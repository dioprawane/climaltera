<script lang="ts">
	import {
		Header,
		Hero,
		Services,
		Methodology,
		WorldMap,
		Calculator,
		Testimonials,
		Footer
	} from '$lib';
</script>

<svelte:head>
	<title>ClimAltera - Accompagnement des PME dans la transition écologique</title>
	<meta
		name="description"
		content="ClimAltera accompagne les PME dans leur transition écologique et la gestion des risques climatiques. Diagnostic environnemental, ateliers climat et solutions durables."
	/>
</svelte:head>

<Header />

<main>
	<Hero />
	<Services />
	<Methodology />
	<WorldMap />
	<Calculator />
	<Testimonials />
</main>

<Footer />
