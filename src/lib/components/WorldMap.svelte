<script lang="ts">
import { onMount } from 'svelte';

const zones = [
	{
		name: 'France',
		status: 'Zone active',
		description: 'Accompagnement opérationnel des PME sur tout le territoire métropolitain et outre-mer.',
		active: true
	},
	{
		name: 'Afrique',
		status: 'En développement',
		description: 'Ambition de déploiement à moyen terme pour accompagner les entreprises du continent.',
		active: false
	}
];

let mapContainer: HTMLElement;
let mapInstance: any = null;

// Marqueurs réels : France + Afrique
const markers = [
	{ name: 'Paris', coords: [48.8566, 2.3522], style: { fill: '#065f46' } },
	{ name: 'Lyon', coords: [45.764, 4.8357], style: { fill: '#065f46' } },
	{ name: 'Marseille', coords: [43.2965, 5.3698], style: { fill: '#065f46' } },
	{ name: 'Bordeaux', coords: [44.8378, -0.5792], style: { fill: '#065f46' } },
	{ name: 'Nantes', coords: [47.2184, -1.5536], style: { fill: '#065f46' } },
	{ name: 'Dakar', coords: [14.7167, -17.4677], style: { fill: '#9ca3af' } },
	{ name: 'Abidjan', coords: [5.3600, -4.0083], style: { fill: '#9ca3af' } },
	{ name: 'Nairobi', coords: [-1.2921, 36.8219], style: { fill: '#9ca3af' } },
];

onMount(async () => {
	const jsVectorMap = (await import('jsvectormap')).default;
	await import('jsvectormap/dist/maps/world.js');

	mapInstance = new jsVectorMap({
		selector: mapContainer,
		map: 'world',
		backgroundColor: 'transparent',
		zoomButtons: true,
		zoomOnScroll: true,
		zoomOnScrollSpeed: 3,
		draggable: true,
		zoomMax: 12,
		zoomMin: 1,
		zoomAnimate: true,
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

	return () => {
		if (mapInstance) {
			mapInstance.destroy();
		}
	};
});
</script>

<style>
	/* Force le conteneur jsvectormap à remplir le wrapper */
	.map-wrapper :global(.jvm-container) {
		width: 100% !important;
		height: 100% !important;
	}
</style>

<section id="locations" class="bg-primary-100 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<!-- Title -->
		<div class="mb-4 text-center">
			<h2 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
				Une expertise pensée pour les entreprises<br />
				<span class="text-primary-600">en France et en Afrique</span>
			</h2>
		</div>
		<p class="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-600">
			Nous accompagnons aujourd'hui les PME en France, avec l'ambition d'étendre notre savoir-faire au continent africain.
		</p>

		<!-- World Map -->
		<div class="relative mx-auto mb-16 w-full max-w-7xl">
			<div
				bind:this={mapContainer}
				class="map-wrapper w-full"
				style="height: 600px; min-height: 500px;"
			></div>

			<!-- Legend -->
			<div class="absolute bottom-4 left-4 flex flex-col gap-2 rounded-xl bg-white/90 px-4 py-3 text-sm shadow-md backdrop-blur-sm sm:bottom-8 sm:left-8">
				<div class="flex items-center gap-2">
					<span class="inline-block h-3 w-3 rounded-full bg-primary-800"></span>
					<span class="text-gray-700">Zone active</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="inline-block h-3 w-3 rounded-full bg-gray-400"></span>
					<span class="text-gray-700">En développement</span>
				</div>
			</div>
		</div>

		<!-- Zone Cards -->
		<div class="grid gap-6 sm:grid-cols-2">
			{#each zones as zone}
				<div class="rounded-2xl {zone.active ? 'bg-primary-900 text-white' : 'bg-white text-gray-900'} p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
					<div class="mb-3 flex items-center gap-3">
						<svg class="h-6 w-6 {zone.active ? 'text-primary-300' : 'text-primary-500'}" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
						</svg>
						<span class="rounded-full px-3 py-0.5 text-xs font-semibold {zone.active ? 'bg-primary-400/30 text-primary-200' : 'bg-primary-100 text-primary-700'}">
							{zone.status}
						</span>
					</div>
					<h3 class="mb-2 text-2xl font-bold">{zone.name}</h3>
					<p class="text-sm leading-relaxed {zone.active ? 'text-white/80' : 'text-gray-600'}">
						{zone.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
