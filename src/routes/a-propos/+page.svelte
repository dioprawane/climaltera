<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>À propos — ClimAltera</title>
	<meta name="description" content="ClimAltera accompagne les PME dans la compréhension, l'anticipation et la maîtrise de leurs enjeux climatiques et environnementaux." />
</svelte:head>

<Header />

<main class="bg-cream pt-24">

	<!-- 1. Introduction -->
	<section id="about" class="mx-auto max-w-4xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<a
			href="/"
			class="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
		>
			<svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			Retour à l'accueil
		</a>

		<span class="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">Qui sommes-nous</span>
		<h1 class="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
			À propos de <span class="text-primary-500">ClimAltéra</span>
		</h1>

		<div class="space-y-5 text-lg leading-relaxed text-gray-600">
			<p>
				ClimAltéra est une structure spécialisée dans <strong class="text-gray-900">l'analyse environnementale</strong> et la <strong class="text-gray-900">gestion des risques climatiques</strong> pour les entreprises.
			</p>
			<p>
				Nous accompagnons les PME dans la compréhension, l'anticipation et la maîtrise de leurs enjeux climatiques et environnementaux.
			</p>
			<p>
				Notre objectif est de transformer les contraintes environnementales en leviers de <strong class="text-gray-900">performance</strong>, de <strong class="text-gray-900">résilience</strong> et de <strong class="text-gray-900">compétitivité</strong> pour les entreprises.
			</p>
		</div>
	</section>

	<!-- Phrase signature -->
	<section class="bg-primary-800 py-16">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<blockquote class="text-2xl font-semibold leading-relaxed text-white md:text-3xl">
				« ClimAltéra aide les entreprises à passer de la complexité climatique à une stratégie environnementale <span class="text-primary-300">claire</span> et <span class="text-primary-300">opérationnelle</span>. »
			</blockquote>
		</div>
	</section>

	<!-- 2. Pourquoi ClimAltéra existe -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Pourquoi ClimAltéra ?</h2>

			<p class="mb-6 text-lg leading-relaxed text-gray-600">
				Le contexte économique et environnemental évolue rapidement. Les entreprises font face à :
			</p>

			<div class="mb-8 grid gap-4 sm:grid-cols-2">
				<div class="flex items-center gap-4 rounded-2xl bg-cream p-5">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100">
						<svg class="h-6 w-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" /></svg>
					</div>
					<span class="text-gray-700">L'intensification des crises climatiques</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl bg-cream p-5">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100">
						<svg class="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
					</div>
					<span class="text-gray-700">Une pression réglementaire croissante</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl bg-cream p-5">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
					</div>
					<span class="text-gray-700">Des exigences accrues des clients et partenaires</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl bg-cream p-5">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
						<svg class="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
					</div>
					<span class="text-gray-700">Une hausse des coûts liés à l'énergie et aux ressources</span>
				</div>
			</div>

			<div class="space-y-4 text-lg leading-relaxed text-gray-600">
				<p>
					Dans ce contexte, la transition écologique ne doit pas être perçue uniquement comme une contrainte. Elle devient un <strong class="text-gray-900">facteur stratégique de pérennité et de compétitivité</strong>.
				</p>
				<p>
					ClimAltéra a été créé pour aider les entreprises à transformer ces enjeux en opportunités d'amélioration et de structuration durable.
				</p>
			</div>
		</div>
	</section>

	<!-- 3. Notre mission + 4. Notre vision (côte à côte) -->
	<section class="bg-cream py-20">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-10 lg:grid-cols-2">
				<!-- Mission -->
				<div class="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
					<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100">
						<svg class="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h2 class="mb-5 text-2xl font-bold text-gray-900">Notre mission</h2>
					<p class="mb-5 text-gray-600">
						La mission de ClimAltéra est d'aider les PME à :
					</p>
					<ul class="mb-6 space-y-3">
						{#each [
							'Mesurer leur empreinte carbone',
							'Identifier leurs vulnérabilités climatiques',
							"Structurer un plan d'action réaliste",
							'Intégrer les enjeux environnementaux dans leur stratégie'
						] as point}
							<li class="flex items-start gap-3">
								<svg class="mt-1 h-5 w-5 flex-shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
								<span class="text-gray-700">{point}</span>
							</li>
						{/each}
					</ul>
					<p class="text-gray-600">
						Nous proposons une approche <strong class="text-gray-900">pragmatique</strong>, adaptée aux réalités opérationnelles des petites et moyennes entreprises.
					</p>
				</div>

				<!-- Vision -->
				<div class="rounded-3xl bg-primary-800 p-8 text-white shadow-sm lg:p-10">
					<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700">
						<svg class="h-6 w-6 text-primary-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
						</svg>
					</div>
					<h2 class="mb-5 text-2xl font-bold">Notre vision</h2>
					<p class="mb-5 text-primary-200">
						Nous croyons que la transition écologique doit être :
					</p>
					<ul class="mb-6 space-y-3">
						{#each ['Compréhensible', 'Accessible', 'Opérationnelle', 'Adaptée aux PME'] as point}
							<li class="flex items-start gap-3">
								<span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-400"></span>
								<span class="text-primary-100">{point}</span>
							</li>
						{/each}
					</ul>
					<p class="text-primary-200">
						Trop souvent, les démarches environnementales sont perçues comme complexes ou réservées aux grandes entreprises.
					</p>
					<p class="mt-3 font-medium text-white">
						ClimAltéra souhaite démocratiser l'accès à une stratégie environnementale claire et efficace pour les PME.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- 5. Notre approche -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-10 text-3xl font-bold text-gray-900 md:text-4xl">Notre approche</h2>
			<p class="mb-10 text-lg text-gray-600">
				Chaque mission ClimAltéra repose sur une méthode structurée :
			</p>

			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute top-0 bottom-0 left-6 w-px bg-primary-200 sm:left-8"></div>

				<div class="space-y-8">
					{#each [
						{ step: '01', title: 'Collecte des données clés', desc: 'Rassemblement des informations essentielles sur votre activité et vos impacts.' },
						{ step: '02', title: 'Entretiens ciblés avec les équipes', desc: 'Échanges avec les parties prenantes pour comprendre les réalités du terrain.' },
						{ step: '03', title: 'Analyse technique des impacts', desc: 'Évaluation quantitative et qualitative de vos enjeux environnementaux.' },
						{ step: '04', title: 'Benchmark simplifié du secteur', desc: 'Positionnement de votre entreprise par rapport aux pratiques de votre secteur.' },
						{ step: '05', title: 'Rapport et restitution des résultats', desc: 'Présentation claire et synthétique des résultats et enseignements.' },
						{ step: '06', title: 'Feuille de route opérationnelle', desc: 'Plan d\'action concret, priorisé et adapté à vos moyens.' }
					] as { step, title, desc }}
						<div class="relative flex items-start gap-6 pl-0 sm:gap-8">
							<div class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-base">
								{step}
							</div>
							<div class="pt-1 sm:pt-3">
								<h3 class="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
								<p class="text-gray-600">{desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<p class="mt-10 text-lg text-gray-600">
				Cette approche permet de fournir des <strong class="text-gray-900">diagnostics clairs</strong> et des <strong class="text-gray-900">recommandations concrètes</strong>.
			</p>
		</div>
	</section>

	<!-- 6. Valeur ajoutée -->
	<section class="bg-cream py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Ce qui fait la différence ClimAltéra</h2>
			<p class="mb-10 text-lg text-gray-600">ClimAltéra se distingue par :</p>

			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Approche PME -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
						<svg class="h-6 w-6 text-rose-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Approche PME</h3>
					<p class="text-sm text-gray-600">Une approche adaptée aux réalités des petites et moyennes entreprises.</p>
				</div>
				<!-- Diagnostics clairs -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
						<svg class="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Diagnostics clairs</h3>
					<p class="text-sm text-gray-600">Des diagnostics compréhensibles, sans jargon inutile.</p>
				</div>
				<!-- Recommandations concrètes -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
						<svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Recommandations concrètes</h3>
					<p class="text-sm text-gray-600">Des recommandations priorisées et actionnables.</p>
				</div>
				<!-- Vision intégrée -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
						<svg class="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Vision intégrée</h3>
					<p class="text-sm text-gray-600">Une vision intégrée entre risques climatiques et performance environnementale.</p>
				</div>
				<!-- Démarche pédagogique -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
						<svg class="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Démarche pédagogique</h3>
					<p class="text-sm text-gray-600">Une démarche permettant l'appropriation par les équipes.</p>
				</div>
				<!-- Objectif : agir -->
				<div class="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
					</div>
					<h3 class="mb-2 font-semibold text-gray-900">Objectif : agir</h3>
					<p class="text-sm text-gray-600">Notre objectif n'est pas seulement d'analyser, mais d'aider les entreprises à agir.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- 7. Entreprises accompagnées -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">À qui s'adresse ClimAltéra ?</h2>
			<p class="mb-10 text-lg text-gray-600">
				ClimAltéra accompagne principalement les PME et TPE dans différents secteurs :
			</p>

			<div class="flex flex-wrap gap-3">
				{#each ['Industrie', 'Services', 'Logistique', 'Agroalimentaire', 'BTP'] as sector}
					<span class="rounded-full border-2 border-primary-200 bg-primary-50 px-6 py-3 text-lg font-medium text-primary-700 transition-colors hover:border-primary-400 hover:bg-primary-100">
						{sector}
					</span>
				{/each}
			</div>

			<p class="mt-8 text-lg text-gray-600">
				Nos missions sont adaptées à des entreprises qui souhaitent structurer leur démarche environnementale de manière <strong class="text-gray-900">progressive et pragmatique</strong>.
			</p>
		</div>
	</section>

	<!-- 8. Notre ambition -->
	<section class="bg-cream py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<h2 class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Notre ambition</h2>
			<p class="mb-8 text-lg text-gray-600">À moyen terme, ClimAltéra vise à :</p>

			<div class="grid gap-6 sm:grid-cols-2">
				<div class="flex items-center gap-4 rounded-2xl border border-primary-100 bg-white p-6">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100">
						<svg class="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
					</div>
					<span class="text-gray-700">Développer une expertise reconnue en gestion des risques climatiques</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl border border-primary-100 bg-white p-6">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
						<svg class="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					</div>
					<span class="text-gray-700">Intervenir auprès d'entreprises en France et en Afrique</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl border border-primary-100 bg-white p-6">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-100">
						<svg class="h-6 w-6 text-violet-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
					</div>
					<span class="text-gray-700">Animer des conférences et ateliers sur les enjeux climatiques</span>
				</div>
				<div class="flex items-center gap-4 rounded-2xl border border-primary-100 bg-white p-6">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
						<svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
					</div>
					<span class="text-gray-700">Accompagner les entreprises dans une transition écologique concrète et opérationnelle</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Fondateur -->
	<section class="bg-white py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="rounded-3xl bg-primary-800 p-8 lg:p-12">
				<div class="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
					<!-- Photo placeholder -->
					<div class="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-4xl font-bold text-primary-300">
						CA
					</div>
					<div>
						<span class="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary-400">Fondateur</span>
						<h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">ClimAltéra</h2>
						<p class="mb-4 text-primary-200">
							Passionné par les enjeux environnementaux et convaincu que la transition écologique doit être accessible à toutes les entreprises, le fondateur de ClimAltéra a créé cette structure pour accompagner les PME avec pragmatisme et expertise.
						</p>
						<p class="text-primary-200">
							Fort d'une expérience en analyse environnementale et en gestion des risques climatiques, il met son savoir-faire au service d'une vision claire : rendre la stratégie climatique compréhensible, actionnable et créatrice de valeur.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 9. Conclusion + CTA -->
	<section class="bg-cream py-20">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<div class="space-y-5 text-xl leading-relaxed text-gray-700">
				<p>
					La transition écologique ne doit pas rester un concept théorique.
				</p>
				<p>
					Elle doit devenir un <strong class="text-gray-900">levier stratégique concret</strong> pour les entreprises.
				</p>
				<p>
					ClimAltéra accompagne les organisations qui souhaitent comprendre leurs impacts, anticiper les risques et construire une <strong class="text-gray-900">trajectoire environnementale durable</strong>.
				</p>
			</div>

			<div class="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<a
					href="/devis"
					class="rounded-full bg-primary-600 px-8 py-3.5 text-lg font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
				>
					Demander un diagnostic
				</a>
				<a
					href="/#services"
					class="rounded-full border border-gray-300 bg-white px-8 py-3.5 text-lg font-medium text-gray-700 transition-all hover:border-primary-400 hover:text-primary-600"
				>
					Découvrir nos services
				</a>
			</div>
		</div>
	</section>

</main>

<Footer />
