<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { services as allServices } from '$lib/data/services';
	const services = allServices.filter((s) => !s.hidden);

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let sector = $state('');
	let companySize = $state('');
	let need = $state('');
	let message = $state('');
	let submitted = $state(false);
	let sending = $state(false);
	let error = $state('');

	const sectors = [
		'Industrie / Manufacturing',
		'BTP / Construction',
		'Transport / Logistique',
		'Agroalimentaire',
		'Commerce / Distribution',
		'Services / Tertiaire',
		'Santé',
		'Énergie',
		'Tourisme / Hôtellerie',
		'Autre'
	];

	const companySizes = [
		'1 – 10 salariés',
		'11 – 50 salariés',
		'51 – 150 salariés',
		'151 – 250 salariés',
		'250+ salariés'
	];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		sending = true;
		error = '';

		// Trouver le libellé du service sélectionné
		const selectedService = services.find((s) => s.slug === need);
		const needLabel = selectedService
			? selectedService.title
			: need === 'autre'
				? 'Autre / Je ne sais pas encore'
				: need;

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					company,
					sector,
					companySize,
					need: needLabel,
					message: message || '(aucun message)'
				})
			});

			const data = await res.json();

			if (res.ok && data.success) {
				submitted = true;
			} else {
				error = data?.error || "Une erreur est survenue. Veuillez réessayer.";
			}
		} catch {
			error = "Impossible d'envoyer le message. Vérifiez votre connexion internet.";
		} finally {
			sending = false;
		}
	}
</script>

<svelte:head>
	<title>Nous contacter — ClimAltera</title>
	<meta name="description" content="Contactez ClimAltera pour un diagnostic climat, un bilan carbone ou un accompagnement RSE adapté à votre PME." />
</svelte:head>

<Header />

<main class="bg-cream pt-24">
	<!-- Hero -->
	<section class="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
		<a
			href="/"
			class="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
		>
			<svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			Retour à l'accueil
		</a>

		<div class="max-w-3xl">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
				Parlons de votre projet
			</h1>
			<p class="text-lg text-gray-600">
				Quelques informations sur votre entreprise suffisent pour que nous puissions vous proposer un accompagnement sur-mesure. Réponse sous 48h.
			</p>
		</div>
	</section>

	<!-- Form Section -->
	<section class="bg-white py-16">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			{#if submitted}
				<!-- Success State -->
				<div class="rounded-3xl bg-primary-50 p-12 text-center">
					<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
						<svg class="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h2 class="mb-3 text-2xl font-bold text-gray-900">Message envoyé !</h2>
					<p class="mb-8 text-gray-600">
						Merci pour votre demande. Nous reviendrons vers vous sous 48h avec une réponse personnalisée.
					</p>
					<a
						href="/"
						class="inline-flex rounded-full bg-primary-600 px-8 py-3 font-medium text-white transition-all hover:bg-primary-700"
					>
						Retour à l'accueil
					</a>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-10">

					<!-- 1. Identité -->
					<fieldset>
						<legend class="mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700">1</span>
							Vos coordonnées
						</legend>
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-1.5 block text-sm font-medium text-gray-700">Nom complet *</label>
								<input
									id="name"
									type="text"
									required
									bind:value={name}
									placeholder="Jean Dupont"
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								/>
							</div>
							<div>
								<label for="email" class="mb-1.5 block text-sm font-medium text-gray-700">Email professionnel *</label>
								<input
									id="email"
									type="email"
									required
									bind:value={email}
									placeholder="jean@entreprise.com"
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								/>
							</div>
						</div>
					</fieldset>

					<!-- 2. Entreprise -->
					<fieldset>
						<legend class="mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700">2</span>
							Votre entreprise
						</legend>
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="company" class="mb-1.5 block text-sm font-medium text-gray-700">Nom de l'entreprise *</label>
								<input
									id="company"
									type="text"
									required
									bind:value={company}
									placeholder="Nom de votre entreprise"
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								/>
							</div>
							<div>
								<label for="sector" class="mb-1.5 block text-sm font-medium text-gray-700">Secteur d'activité *</label>
								<select
									id="sector"
									required
									bind:value={sector}
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								>
									<option value="" disabled>Choisir un secteur</option>
									{#each sectors as s}
										<option value={s}>{s}</option>
									{/each}
								</select>
							</div>
							<div class="sm:col-span-2">
								<label for="companySize" class="mb-1.5 block text-sm font-medium text-gray-700">Taille de l'entreprise *</label>
								<div class="grid grid-cols-2 gap-3 sm:grid-cols-5">
									{#each companySizes as size}
										<label
											class="flex cursor-pointer items-center justify-center rounded-xl border-2 px-3 py-2.5 text-center text-sm font-medium transition-all {companySize === size
												? 'border-primary-500 bg-primary-50 text-primary-700'
												: 'border-gray-200 text-gray-600 hover:border-primary-200 hover:bg-gray-50'}"
										>
											<input
												type="radio"
												name="companySize"
												value={size}
												bind:group={companySize}
												class="sr-only"
											/>
											{size}
										</label>
									{/each}
								</div>
							</div>
						</div>
					</fieldset>

					<!-- 3. Besoin -->
					<fieldset>
						<legend class="mb-6 flex items-center gap-3 text-xl font-semibold text-gray-900">
							<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700">3</span>
							Votre besoin
						</legend>

						<div class="mb-6">
							<label for="need" class="mb-1.5 block text-sm font-medium text-gray-700">Besoin principal *</label>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each services as service}
									<label
										class="flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all {need === service.slug
											? 'border-primary-500 bg-primary-50'
											: 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}"
									>
										<input
											type="radio"
											name="need"
											value={service.slug}
											bind:group={need}
											class="mt-0.5 accent-primary-600"
										/>
										<div>
											<span class="block text-sm font-semibold text-gray-900">{service.title}</span>
											<span class="text-xs text-gray-500">{service.category}</span>
										</div>
									</label>
								{/each}
								<label
									class="flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all {need === 'autre'
										? 'border-primary-500 bg-primary-50'
										: 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}"
								>
									<input
										type="radio"
										name="need"
										value="autre"
										bind:group={need}
										class="mt-0.5 accent-primary-600"
									/>
									<div>
										<span class="block text-sm font-semibold text-gray-900">Autre / Je ne sais pas encore</span>
										<span class="text-xs text-gray-500">Nous vous orienterons</span>
									</div>
								</label>
							</div>
						</div>

						<div>
							<label for="message" class="mb-1.5 block text-sm font-medium text-gray-700">
								Message (contexte, contraintes, questions…)
							</label>
							<textarea
								id="message"
								rows="4"
								bind:value={message}
								placeholder="Décrivez brièvement votre situation, vos objectifs et vos éventuelles contraintes…"
								class="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
							></textarea>
						</div>
					</fieldset>

					<!-- Error message -->
					{#if error}
						<div class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
							<p class="flex items-center gap-2">
								<svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								{error}
							</p>
						</div>
					{/if}

					<!-- Submit -->
					<div class="flex flex-col items-center gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:justify-between">
						<p class="text-sm text-gray-500">* Champs obligatoires — Vos données ne seront jamais partagées.</p>
						<button
							type="submit"
							disabled={sending}
							class="w-full rounded-full bg-primary-600 px-10 py-3.5 text-lg font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
						>
							{#if sending}
								<span class="inline-flex items-center gap-2">
									<svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
									</svg>
									Envoi en cours…
								</span>
							{:else}
								Envoyer ma demande
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</section>
</main>

<Footer />
