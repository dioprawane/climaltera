<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { services, type Service } from '$lib/data/services';

	let { data } = $props();

	const service: Service = $derived(data.service);

	// Service suivant pour le CTA en bas de page
	const currentIndex = $derived(services.findIndex((s) => s.slug === service.slug));
	const nextService = $derived(services[(currentIndex + 1) % services.length]);
</script>

<svelte:head>
	<title>{service.metaTitle}</title>
	<meta name="description" content={service.metaDescription} />
	<link rel="canonical" href="https://climaltera.com/services/{service.slug}" />
</svelte:head>

<Header />

<main class="bg-cream pt-24">
	<!-- Hero Section -->
	<section class="relative overflow-hidden">
		<!-- Background Image avec overlay -->
		<div class="absolute inset-0 z-0">
			<img
				src={service.image}
				alt={service.title}
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
			<!-- Breadcrumb -->
			<nav aria-label="Fil d'Ariane" class="mb-8">
				<ol class="flex items-center gap-2 text-sm text-white/60">
					<li><a href="/" class="transition-colors hover:text-white">Accueil</a></li>
					<li><span aria-hidden="true">/</span></li>
					<li><a href="/#services" class="transition-colors hover:text-white">Services</a></li>
					<li><span aria-hidden="true">/</span></li>
					<li class="text-white font-medium">{service.title}</li>
				</ol>
			</nav>

			<span class="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
				{service.category}
			</span>
			<h1 class="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
				{service.title}
			</h1>
			<p class="mb-8 max-w-2xl text-lg leading-relaxed text-white/85">
				{service.description}
			</p>

			<div class="flex flex-wrap gap-4">
				<a
					href="/devis"
					class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl"
				>
					{service.ctaLabel}
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a
					href="/#services"
					class="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
					Tous les services
				</a>
			</div>
		</div>
	</section>

	<!-- Résumé rapide : durée + livrable principal -->
	<section class="border-b border-primary-100 bg-white">
		<div class="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-primary-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
			<div class="flex items-center gap-4 px-6 py-6 sm:px-8">
				<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Durée estimée</p>
					<p class="text-lg font-bold text-gray-900">{service.estimatedDuration}</p>
				</div>
			</div>
			<div class="flex items-center gap-4 px-6 py-6 sm:px-8">
				<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.013 0 1.893.67 2.181 1.636M5.25 6.108c-1.135.094-1.976 1.057-1.976 2.192V18.75A2.25 2.25 0 005.25 21h5.25" />
					</svg>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Livrables</p>
					<p class="text-lg font-bold text-gray-900">{service.detailedDeliverables.length} documents</p>
				</div>
			</div>
			<div class="flex items-center gap-4 px-6 py-6 sm:px-8">
				<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
					</svg>
				</div>
				<div>
					<p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Zone</p>
					<p class="text-lg font-bold text-gray-900">{service.country}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- À qui s'adresse cette offre -->
	<section class="bg-white py-16 lg:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
				<div>
					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-gray-900">À qui s'adresse cette offre</h2>
					</div>
					<p class="mb-6 text-gray-600">
						{service.fullDescription}
					</p>
					<ul class="space-y-3">
						{#each service.targetAudience as audience}
							<li class="flex items-start gap-3">
								<svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span class="text-gray-700">{audience}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Objectifs -->
				<div>
					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-gray-900">Objectifs</h2>
					</div>
					<ul class="space-y-4">
						{#each service.objectives as objective, i}
							<li class="flex items-start gap-4 rounded-xl bg-cream p-4">
								<span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
									{i + 1}
								</span>
								<span class="text-gray-700 leading-relaxed">{objective}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Périmètre -->
	<section class="bg-cream py-16 lg:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-10 text-center">
				<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</div>
				<h2 class="text-3xl font-bold text-gray-900">Périmètre de la mission</h2>
				<p class="mx-auto mt-3 max-w-2xl text-gray-600">
					Ce que couvre concrètement notre intervention, de la collecte des données à la restitution finale.
				</p>
			</div>

			<div class="grid gap-5 sm:grid-cols-2">
				{#each service.scope as item, i}
					<div class="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
							<span class="text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
						</div>
						<p class="text-gray-700 leading-relaxed">{item}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Livrables -->
	<section class="bg-white py-16 lg:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
				<div>
					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-gray-900">Livrables</h2>
					</div>
					<p class="mb-6 text-gray-600">
						À l'issue de la mission, vous recevez un ensemble de documents opérationnels, prêts à être exploités en interne.
					</p>

					<!-- Durée badge -->
					<div class="inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-3">
						<svg class="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<div>
							<p class="text-xs font-semibold uppercase tracking-wider text-primary-600">Durée estimée</p>
							<p class="text-base font-bold text-gray-900">{service.estimatedDuration}</p>
						</div>
					</div>
				</div>

				<div class="space-y-3">
					{#each service.detailedDeliverables as deliverable, i}
						<div class="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary-200 hover:bg-primary-50/50">
							<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
								<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</div>
							<span class="text-gray-700 leading-relaxed">{deliverable}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Notre accompagnement (bulletPoints + conclusion) -->
	<section class="bg-cream py-16 lg:py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-900">Ce que comprend notre accompagnement</h2>

			<div class="mb-8 space-y-3">
				{#each service.bulletPoints as point}
					<div class="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
						<svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="text-gray-700">{point}</span>
					</div>
				{/each}
			</div>

			<p class="text-center text-lg leading-relaxed text-gray-600 italic">
				{service.conclusion}
			</p>
		</div>
	</section>

	<!-- CTA principal -->
	<section class="bg-primary-800 py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
				Prêt à passer à l'action ?
			</h2>
			<p class="mx-auto mb-8 max-w-xl text-primary-200">
				Échangeons sur votre projet. Premier rendez-vous gratuit et sans engagement pour comprendre vos besoins et vous proposer un accompagnement adapté.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/devis"
					class="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl"
				>
					{service.ctaLabel}
					<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a
					href="mailto:contact@climaltera.com"
					class="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					</svg>
					Nous écrire
				</a>
			</div>
		</div>
	</section>

	<!-- Découvrir aussi -->
	<section class="bg-cream py-16">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-center text-2xl font-bold text-gray-900">Découvrir aussi</h2>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each services.filter((s) => s.slug !== service.slug).slice(0, 3) as other}
					<a
						href="/services/{other.slug}"
						class="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
					>
						<span class="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">{other.category}</span>
						<h3 class="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600">{other.title}</h3>
						<p class="mb-4 text-sm text-gray-600">{other.description}</p>
						<span class="inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-all group-hover:gap-2">
							En savoir plus
							<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</main>

<Footer />
