<script lang="ts">
	import { services } from '$lib/data/services';

	// Drag scroll state
	let carouselContainer: HTMLElement;
	let isDragging = $state(false);
	let startX = $state(0);
	let scrollLeft = $state(0);
	let currentSlide = $state(0);

	// Calculate current slide based on scroll position
	function updateCurrentSlide() {
		if (carouselContainer) {
			const cardWidth = carouselContainer.scrollWidth / services.length;
			currentSlide = Math.round(carouselContainer.scrollLeft / cardWidth);
		}
	}

	// Drag handlers
	function handleMouseDown(e: MouseEvent) {
		isDragging = true;
		startX = e.pageX - carouselContainer.offsetLeft;
		scrollLeft = carouselContainer.scrollLeft;
		carouselContainer.style.cursor = 'grabbing';
		carouselContainer.style.scrollBehavior = 'auto';
	}

	function handleMouseUp() {
		isDragging = false;
		carouselContainer.style.cursor = 'grab';
		carouselContainer.style.scrollBehavior = 'smooth';
		updateCurrentSlide();
	}

	function handleMouseLeave() {
		if (isDragging) {
			isDragging = false;
			carouselContainer.style.cursor = 'grab';
			carouselContainer.style.scrollBehavior = 'smooth';
			updateCurrentSlide();
		}
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - carouselContainer.offsetLeft;
		const walk = (x - startX) * 1.5; // Multiplier for faster scroll
		carouselContainer.scrollLeft = scrollLeft - walk;
	}

	// Touch handlers for mobile
	function handleTouchStart(e: TouchEvent) {
		isDragging = true;
		startX = e.touches[0].pageX - carouselContainer.offsetLeft;
		scrollLeft = carouselContainer.scrollLeft;
		carouselContainer.style.scrollBehavior = 'auto';
	}

	function handleTouchEnd() {
		isDragging = false;
		carouselContainer.style.scrollBehavior = 'smooth';
		updateCurrentSlide();
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		const x = e.touches[0].pageX - carouselContainer.offsetLeft;
		const walk = (x - startX) * 1.5;
		carouselContainer.scrollLeft = scrollLeft - walk;
	}

	// Go to specific slide
	function goToSlide(index: number) {
		if (carouselContainer) {
			const cardWidth = carouselContainer.scrollWidth / services.length;
			carouselContainer.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
			currentSlide = index;
		}
	}
</script>

<section id="services" class="bg-cream px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-4xl font-bold text-primary-600 md:text-5xl">
			Nos services
		</h2>

		<!-- Draggable Services Carousel -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div 
			bind:this={carouselContainer}
			role="listbox"
			tabindex="0"
			aria-label="Carrousel des services - Glissez pour naviguer"
			class="flex gap-6 overflow-x-auto pb-4 scroll-smooth select-none"
			style="cursor: grab; scrollbar-width: none; -ms-overflow-style: none;"
			onmousedown={handleMouseDown}
			onmouseup={handleMouseUp}
			onmouseleave={handleMouseLeave}
			onmousemove={handleMouseMove}
			ontouchstart={handleTouchStart}
			ontouchend={handleTouchEnd}
			ontouchmove={handleTouchMove}
			onscroll={updateCurrentSlide}
		>
			{#each services as service, i}
				<div
					class="group relative flex flex-shrink-0 flex-col overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
					style="min-height: 500px; width: calc(50% - 12px); min-width: 300px;"
				>
					<!-- Background Image -->
					<div 
						class="absolute inset-0 z-0"
						style="
							width: 105%;
							height: 105%;
							left: -2.5%;
							top: -2.5%;
							background-image: url({service.image});
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center;
						"
					></div>

					<!-- Content Card at bottom -->
					<div
						class="relative z-10 mt-auto p-6 {service.color === 'teal'
							? 'bg-primary-800 text-white'
							: service.color === 'mint'
								? 'bg-primary-200 text-gray-900'
								: 'bg-primary-100 text-gray-900'}"
						style="border-radius: 1.5rem;"
					>
						<div class="mb-3 flex items-center gap-2">
							{#if service.icon === 'tree'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2L4 12h3v8h10v-8h3L12 2z" />
								</svg>
							{:else if service.icon === 'chart'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M3 3v18h18M9 17V9m4 8v-5m4 5V6" stroke="currentColor" stroke-width="2" fill="none" />
								</svg>
							{:else if service.icon === 'sun'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="4" />
									<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.73-12.73l1.41-1.41" stroke="currentColor" stroke-width="2" fill="none" />
								</svg>
							{:else}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
								</svg>
							{/if}
							<span class="text-sm {service.color === 'teal' ? 'text-white/80' : 'text-gray-600'}">{service.category}</span>
						</div>

						<h3 class="mb-4 text-xl font-bold md:text-2xl">
							{service.title}
						</h3>

						<a
							href="/projects/{service.slug}"
							class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-all {service.color === 'teal'
								? 'bg-primary-400 text-white hover:bg-primary-300'
								: 'bg-primary-500 text-white hover:bg-primary-600'}"
						>
							En savoir plus
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Pagination Dots -->
		<div class="mt-8 flex justify-center gap-2">
			{#each services as _, i}
				<button
					class="h-2.5 w-2.5 rounded-full transition-all {i === currentSlide
						? 'bg-primary-600'
						: 'bg-primary-300 hover:bg-primary-400'}"
					onclick={() => goToSlide(i)}
					aria-label="Service {i + 1}"
				></button>
			{/each}
		</div>

		<!-- Certifications -->
		<!-- <div class="mt-20 text-center">
			<p class="mb-8 text-gray-600">
				Nous accompagnons les entreprises vers les certifications leaders de l'industrie
			</p>
			<div class="flex flex-wrap items-center justify-center gap-10">
				{#each [1, 2, 3, 4, 5] as i}
					<div class="flex items-center gap-2 text-gray-400">
						<svg class="h-8 w-8" viewBox="0 0 32 32" fill="currentColor">
							<circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2" />
							<circle cx="16" cy="16" r="4" />
						</svg>
						<span class="text-lg font-medium">LOGOIPSUM</span>
					</div>
				{/each}
			</div>
		</div> -->
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	div::-webkit-scrollbar {
		display: none;
	}
</style>