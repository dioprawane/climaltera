<script lang="ts">
import { onMount } from 'svelte';

const regions = [
	{ name: 'Amérique du Sud', projects: 3 },
	{ name: 'Europe', projects: 4 },
	{ name: 'Amérique du Nord', projects: 2 },
	{ name: 'Afrique', projects: 5 },
	{ name: 'Asie', projects: 6 },
	{ name: 'Océanie', projects: 1 },
	{ name: 'Moyen-Orient', projects: 3 },
];

let mapContainer: HTMLElement;
let mapInstance: any = null;

// Markers avec coordonnées lat/lng
const markers = [
	// North America
	{ name: 'New York', coords: [40.7128, -74.006], style: { fill: '#065f46' } },
	{ name: 'Toronto', coords: [43.6532, -79.3832], style: { fill: '#065f46' } },
	{ name: 'Vancouver', coords: [49.2827, -123.1207], style: { fill: '#9ca3af' } },
	// South America
	{ name: 'São Paulo', coords: [-23.5505, -46.6333], style: { fill: '#9ca3af' } },
	{ name: 'Buenos Aires', coords: [-34.6037, -58.3816], style: { fill: '#9ca3af' } },
	// Europe
	{ name: 'Paris', coords: [48.8566, 2.3522], style: { fill: '#065f46' } },
	{ name: 'London', coords: [51.5074, -0.1278], style: { fill: '#065f46' } },
	{ name: 'Berlin', coords: [52.52, 13.405], style: { fill: '#065f46' } },
	{ name: 'Madrid', coords: [40.4168, -3.7038], style: { fill: '#065f46' } },
	// Africa
	{ name: 'Nairobi', coords: [-1.2921, 36.8219], style: { fill: '#065f46' } },
	{ name: 'Cape Town', coords: [-33.9249, 18.4241], style: { fill: '#9ca3af' } },
	// Asia
	{ name: 'Singapore', coords: [1.3521, 103.8198], style: { fill: '#065f46' } },
	{ name: 'Tokyo', coords: [35.6762, 139.6503], style: { fill: '#065f46' } },
	{ name: 'Mumbai', coords: [19.076, 72.8777], style: { fill: '#065f46' } },
	// Australia
	{ name: 'Sydney', coords: [-33.8688, 151.2093], style: { fill: '#9ca3af' } },
];

// Carousel logic (from Services)
let carouselContainer: HTMLElement;
let isDragging = $state(false);
let startX = $state(0);
let scrollLeft = $state(0);
let currentSlide = $state(0);

function updateCurrentSlide() {
	if (carouselContainer) {
		const cardWidth = carouselContainer.scrollWidth / regions.length;
		currentSlide = Math.round(carouselContainer.scrollLeft / cardWidth);
	}
}

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
	const walk = (x - startX) * 1.5;
	carouselContainer.scrollLeft = scrollLeft - walk;
}
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
function goToSlide(index: number) {
	if (carouselContainer) {
		const cardWidth = carouselContainer.scrollWidth / regions.length;
		carouselContainer.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
		currentSlide = index;
	}
}

onMount(async () => {
	// Import dynamique côté client uniquement
	const jsVectorMap = (await import('jsvectormap')).default;
	await import('jsvectormap/dist/maps/world.js');

	mapInstance = new jsVectorMap({
		selector: mapContainer,
		map: 'world',
		backgroundColor: 'transparent',
		zoomButtons: false,
		zoomOnScroll: false,
		draggable: false,
		regionStyle: {
			initial: {
				fill: '#86efac',
				stroke: '#6ee7b7',
				strokeWidth: 0.5,
				fillOpacity: 1,
			},
			hover: {
				fill: '#4ade80',
				cursor: 'default',
			},
		},
		markerStyle: {
			initial: {
				r: 6,
				stroke: '#fff',
				strokeWidth: 2,
				strokeOpacity: 1,
			},
			hover: {
				r: 8,
			},
		},
		markers: markers,
		showTooltip: true,
		onMarkerTooltipShow: (event: any, tooltip: any, index: number) => {
			tooltip.text(markers[index].name);
		},
	});
	// Ne pas forcer la hauteur, laisser Tailwind gérer
	return () => {
		if (mapInstance) {
			mapInstance.destroy();
		}
	};
});
</script>

<section id="locations" class="bg-primary-100 px-4 py-20 sm:px-6 lg:px-8">
   <div class="mx-auto max-w-7xl">
	   <!-- Title -->
	   <div class="mb-12 text-center">
		   <h2 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
			   Agissez dans <span class="text-primary-600">45+ pays</span>
			   <br />
			   avec des organisations locales
		   </h2>
	   </div>

	   <!-- World Map Container -->
	   <div class="relative mx-auto mb-16 w-full max-w-7xl">
		   <div 
			   bind:this={mapContainer}
			   class="h-[380px] w-full sm:h-[500px] md:h-[620px] lg:h-[720px]"
		   ></div>
	   </div>

	   <!-- Navigation Arrows -->
	   <div class="mb-8 flex justify-center gap-4">
		   <button type="button" aria-label="Précédent" onclick={() => goToSlide(currentSlide - 1)} class="h-12 w-12 rounded-full bg-primary-400 text-white text-2xl flex items-center justify-center shadow-md transition hover:bg-primary-500 disabled:opacity-40" disabled={currentSlide === 0}>
			   &#x2039;
		   </button>
		   <button type="button" aria-label="Suivant" onclick={() => goToSlide(currentSlide + 1)} class="h-12 w-12 rounded-full bg-primary-400 text-white text-2xl flex items-center justify-center shadow-md transition hover:bg-primary-500 disabled:opacity-40" disabled={currentSlide >= regions.length - 1}>
			   &#x203A;
		   </button>
	   </div>

	   <!-- Region Cards Carousel -->
	   <div class="relative">
		   <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		   <div
			   bind:this={carouselContainer}
			   class="flex cursor-grab gap-6 overflow-x-auto scroll-smooth py-2"
			   style="scrollbar-width: none; -ms-overflow-style: none;"
			   role="listbox"
			   tabindex="0"
			   aria-label="Carrousel des régions - Glissez pour naviguer"
			   onmousedown={handleMouseDown}
			   onmouseup={handleMouseUp}
			   onmouseleave={handleMouseLeave}
			   onmousemove={handleMouseMove}
			   ontouchstart={handleTouchStart}
			   ontouchend={handleTouchEnd}
			   ontouchmove={handleTouchMove}
		   >
			   {#each regions as region, i}
				   <div class="flex min-w-[340px] shrink-0 items-center gap-4 rounded-2xl bg-primary-900 p-6 text-white transition-transform hover:-translate-y-1 select-none md:min-w-[380px]">
					   <div class="flex h-10 w-10 shrink-0 items-center justify-center">
						   <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
							   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
						   </svg>
					   </div>
					   <div>
						   <p class="text-sm text-gray-300">{region.name}</p>
						   <p class="text-2xl font-bold">{region.projects} Projets</p>
					   </div>
				   </div>
			   {/each}
		   </div>

		   <!-- Pagination Dots -->
		   <div class="mt-8 flex justify-center gap-2">
			   {#each regions as _, i}
				   <button
					   class="h-2.5 w-2.5 rounded-full transition-all {i === currentSlide ? 'bg-primary-600' : 'bg-primary-300'}"
					   aria-label={`Page ${i + 1}`}
					   onclick={() => goToSlide(i)}
				   ></button>
			   {/each}
		   </div>
	   </div>
   </div>
</section>
