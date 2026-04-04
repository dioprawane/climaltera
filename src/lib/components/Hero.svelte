<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Partner data
	const partners = [
		{ type: 'award', name: 'App of the Day' },
		{ type: 'logo', name: 'LogoIpsum' },
		{ type: 'logo', name: 'EcoTech' },
		{ type: 'logo', name: 'GreenCorp' },
		{ type: 'logo', name: 'ClimateFirst' },
		{ type: 'bcorp', name: 'B Corporation' },
		{ type: 'logo', name: 'Sustainable Co' },
		{ type: 'logo', name: 'Carbon Zero' }
	];

	// Carousel state
	let currentPartnerIndex = $state(0);
	let carouselContainer: HTMLElement;
	let autoScrollInterval: ReturnType<typeof setInterval> | null = null;
	let isAutoScrollPaused = $state(false);
	let partnersToShow = $state(4); // Desktop par défaut

	// Auto-scroll functionality
	function startAutoScroll() {
		autoScrollInterval = setInterval(() => {
			if (!isAutoScrollPaused) {
				currentPartnerIndex = (currentPartnerIndex + 1) % partners.length;
			}
		}, 3000); // Change toutes les 3 secondes
	}

	function pauseAutoScroll() {
		isAutoScrollPaused = true;
	}

	function resumeAutoScroll() {
		isAutoScrollPaused = false;
	}

	// Navigation functions
	function navigateCarousel(direction: 'prev' | 'next') {
		if (direction === 'next') {
			currentPartnerIndex = (currentPartnerIndex + 1) % partners.length;
		} else {
			currentPartnerIndex = (currentPartnerIndex - 1 + partners.length) % partners.length;
		}
	}

	function goToSlide(slideIndex: number) {
		currentPartnerIndex = slideIndex * partnersToShow;
	}

	// Responsive partners count
	function updatePartnersToShow() {
		if (typeof window !== 'undefined') {
			const width = window.innerWidth;
			if (width < 640) {
				partnersToShow = 2; // Mobile
			} else if (width < 1024) {
				partnersToShow = 3; // Tablet
			} else {
				partnersToShow = 4; // Desktop
			}
		}
	}

	onMount(() => {
		updatePartnersToShow();
		window.addEventListener('resize', updatePartnersToShow);
		startAutoScroll();
		
		return () => {
			window.removeEventListener('resize', updatePartnersToShow);
		};
	});

	onDestroy(() => {
		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
		}
	});
</script>

<section class="bg-cream px-4 pt-16 pb-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<!-- Separator Line -->
		<div class="mb-8 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div>
				<h1 class="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
					Anticipez demain.<br />
					<span class="text-primary-500">Agissez dès aujourd'hui.</span>
				</h1>

				<p class="mb-8 max-w-lg text-lg text-gray-600">
					ClimAltera aide les PME et les associations à comprendre, réduire leur empreinte carbone et à anticiper les risques climatiques avant qu'ils ne coûtent chers.
				</p>

				<!-- CTA -->
				<div class="flex flex-col items-start gap-4 sm:flex-row">
					<a
						href="/devis"
						class="rounded-full bg-primary-500 px-7 py-3 font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
					>
						Lancer son diagnostic
					</a>
					<a
						href="/#services"
						class="rounded-full border border-gray-300 bg-white px-7 py-3 font-medium text-gray-700 transition-all hover:border-primary-400 hover:text-primary-600"
					>
						Découvrir nos services
					</a>
				</div>
			</div>

			<!-- Right - App Mockup -->
			<div class="relative flex justify-center lg:justify-end">
				<!-- Floating Badges Top -->
				<div class="absolute top-0 left-0 z-20 flex flex-wrap items-center gap-3 lg:left-10">
					<div class="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
							<svg class="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
						</div>
						<span class="text-sm font-medium text-gray-700">Projets adaptés à vous</span>
					</div>
					<div class="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
							<svg class="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
							</svg>
						</div>
						<span class="text-sm font-medium text-gray-700">Suivez votre impact</span>
					</div>
				</div>

				<!-- Phone Mockup Container -->
				<div class="relative z-10 mt-8" style="width: 300px; height: auto;">
					<!-- Phone Frame -->
					<div class="rounded-[32px] bg-[#047857] p-[12px]">
						<div class="overflow-hidden rounded-[22px] bg-white">
							<!-- Project Image -->
							<div class="relative overflow-hidden" style="height: 150px;">
								<img
									src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=552&h=300&fit=crop"
									alt="Ferme solaire dans les Alpes"
									class="h-full w-full object-cover"
								/>
							</div>

							<!-- Project Details -->
							<div class="p-3 flex flex-col items-center text-center">
								<!-- Title -->
								<h3 class="mb-2 text-sm font-bold text-gray-900">
									Bilan carbone simplifié – Exemple d'accompagnement
								</h3>

								<!-- Example stats -->
								<div class="mb-3 w-full grid grid-cols-2 gap-1.5">
									<div class="rounded-md bg-gray-50 p-2">
										<div class="flex items-center gap-1">
											<svg class="h-3 w-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
											</svg>
											<span class="text-xs font-medium text-gray-700">– 35 %</span>
										</div>
										<p class="mt-0.5 text-[10px] text-gray-400">Réduction CO₂</p>
									</div>
									<div class="rounded-md bg-gray-50 p-2">
										<div class="flex items-center gap-1">
											<svg class="h-3 w-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
											<span class="text-xs font-medium text-gray-700">4 sem.</span>
										</div>
										<p class="mt-0.5 text-[10px] text-gray-400">Durée</p>
									</div>
									<div class="rounded-md bg-gray-50 p-2">
										<div class="flex items-center gap-1">
											<svg class="h-3 w-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											<span class="text-xs font-medium text-gray-700">Scope 1-3</span>
										</div>
										<p class="mt-0.5 text-[10px] text-gray-400">Périmètre</p>
									</div>
									<div class="rounded-md bg-gray-50 p-2">
										<div class="flex items-center gap-1">
											<svg class="h-3 w-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
											<span class="text-xs font-medium text-gray-700">30 salariés</span>
										</div>
										<p class="mt-0.5 text-[10px] text-gray-400">Effectif</p>
									</div>
								</div>

								<!-- CTA -->
								<a
									href="/services/bilan-carbone-pme"
									class="inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
								>
									Voir un exemple concret
									<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Partners Carousel Section -->
		<div class="mt-20 flex flex-col items-center gap-8">
			<p class="max-w-lg text-center text-gray-600">
				ClimAltera accompagne les PME dans leur transition écologique et la gestion des risques climatiques.
			</p>

			<!-- Partners Carousel -->
			<div class="relative w-full">
				<div class="overflow-hidden py-4">
					<!-- Navigation Buttons -->
					<div class="absolute left-0 top-1/2 z-10 -translate-y-1/2">
						<button
							onclick={() => navigateCarousel('prev')}
							class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
							aria-label="Partenaire précédent"
						>
							<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
							</svg>
						</button>
					</div>
					<div class="absolute right-0 top-1/2 z-10 -translate-y-1/2">
						<button
							onclick={() => navigateCarousel('next')}
							class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
							aria-label="Partenaire suivant"
						>
							<svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>

					<!-- Carousel Container -->
					<div 
						bind:this={carouselContainer}
						role="region"
						aria-label="Carrousel des partenaires"
						class="flex justify-center transition-transform duration-500 ease-in-out px-14"
						style="transform: translateX(-{currentPartnerIndex * 200}px);"
						onmouseenter={() => pauseAutoScroll()}
						onmouseleave={() => resumeAutoScroll()}
					>
						{#each partners as partner, index}
							<div class="flex-shrink-0 w-48 flex items-center justify-center">
								{#if partner.type === 'award'}
									<div class="flex flex-col items-center">
										<div class="mb-3 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg">
											<svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
											</svg>
										</div>
										<span class="text-sm font-medium text-gray-600 text-center">APP OF<br/>THE DAY</span>
									</div>
								{:else if partner.type === 'bcorp'}
									<div class="flex flex-col items-center">
										<div class="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-2xl font-bold text-primary-600 shadow-lg">
											B
										</div>
										<span class="text-sm font-medium text-gray-600 text-center">Certified<br/>B Corp</span>
									</div>
								{:else}
									<div class="flex flex-col items-center">
										<div class="mb-3 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
											<svg class="h-10 w-10 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
												<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" />
												<circle cx="12" cy="12" r="3" />
											</svg>
										</div>
										<span class="text-sm font-medium text-gray-600 text-center">{partner.name}</span>
									</div>
								{/if}
							</div>
						{/each}
					</div>

					<!-- Pagination Dots -->
					<div class="mt-6 flex justify-center gap-2">
						{#each partners as _, index}
							<button
								class="h-2.5 w-2.5 rounded-full transition-all {currentPartnerIndex === index
									? 'bg-primary-500 scale-110'
									: 'bg-gray-300 hover:bg-gray-400'}"
								onclick={() => { currentPartnerIndex = index; }}
								aria-label="Aller au partenaire {index + 1}"
							></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>