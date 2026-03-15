<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Service } from '$lib/data/services';

	let { data } = $props();

	const service: Service = $derived(data.service);
</script>

<svelte:head>
	<title>{service.title} — ClimAltera</title>
	<meta name="description" content={service.description} />
</svelte:head>

<Header />

<main class="bg-cream pt-24">
	<!-- Hero Section -->
	<section class="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
		<!-- Back Link -->
		<a
			href="/#services"
			class="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
		>
			<svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			Tous les projets
		</a>

		<div class="grid items-center gap-10 lg:grid-cols-2">
			<!-- Left: Text -->
			<div>
				<span class="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
					{service.category}
				</span>
				<h1 class="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
					{service.title}
				</h1>
				<p class="text-lg leading-relaxed text-gray-600">
					{service.description}
				</p>
			</div>

			<!-- Right: Image -->
			<div class="overflow-hidden rounded-3xl shadow-2xl">
				<img
					src={service.image}
					alt={service.title}
					class="h-[400px] w-full object-cover"
				/>
			</div>
		</div>
	</section>

	<!-- Details Section -->
	<section class="bg-white py-20">
		<div class="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
			<!-- Left Sidebar: Metadata -->
			<aside class="flex flex-col gap-6">
				<div class="rounded-2xl bg-cream p-6">
					<div class="mb-6">
						<span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">Technology</span>
						<span class="text-base font-medium text-gray-900">{service.technology}</span>
					</div>
					<div class="mb-6">
						<span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">Savings</span>
						<span class="text-base font-medium text-gray-900">{service.savings}</span>
					</div>
					<div class="mb-6">
						<span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">Status</span>
						<span class="inline-flex items-center gap-1.5 text-base font-medium text-primary-600">
							<span class="h-2 w-2 rounded-full bg-primary-500"></span>
							{service.status}
						</span>
					</div>
					<div>
						<span class="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">Country</span>
						<span class="text-base font-medium text-gray-900">{service.country}</span>
					</div>
				</div>
			</aside>

			<!-- Right: Full Description -->
			<div>
				<h2 class="mb-6 text-3xl font-bold text-gray-900">À propos du projet</h2>
				<p class="mb-8 text-lg leading-relaxed text-gray-600">
					{service.fullDescription}
				</p>

				<h3 class="mb-4 text-xl font-semibold text-gray-900">Ce que comprend notre accompagnement :</h3>
				<ul class="mb-8 space-y-3">
					{#each service.bulletPoints as point}
						<li class="flex items-start gap-3">
							<svg class="mt-1 h-5 w-5 flex-shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-gray-600">{point}</span>
						</li>
					{/each}
				</ul>

				<p class="text-lg leading-relaxed text-gray-600">
					{service.conclusion}
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-cream py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<div class="rounded-3xl bg-primary-800 px-8 py-14 text-white shadow-xl sm:px-12">
				<h2 class="mb-4 text-3xl font-bold md:text-4xl">
					Rejoignez la communauté ClimAltera
				</h2>
				<p class="mx-auto mb-8 max-w-xl text-primary-200">
					Engagez votre entreprise dans la transition écologique et rejoignez les organisations qui font la différence.
				</p>

				<div class="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
					<input
						type="tel"
						placeholder="(+33) Votre numéro"
						class="flex-1 rounded-full bg-primary-700/50 px-5 py-3 text-white placeholder-primary-300 outline-none ring-1 ring-primary-600 transition focus:ring-2 focus:ring-primary-400"
					/>
					<a
						href="/#contact"
						class="rounded-full bg-primary-400 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-300"
					>
						Nous contacter
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
