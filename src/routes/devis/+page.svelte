<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { services } from '$lib/data/services';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let selectedService = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// TODO: intégrer un vrai backend
		submitted = true;
	}
</script>

<svelte:head>
	<title>Demander un devis — ClimAltera</title>
	<meta name="description" content="Demandez un devis personnalisé pour nos services d'accompagnement climatique." />
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

		<div class="max-w-2xl">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
				Demander un devis
			</h1>
			<p class="text-lg text-gray-600">
				Remplissez le formulaire ci-dessous et notre équipe vous recontactera sous 48h avec une proposition personnalisée.
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
					<h2 class="mb-3 text-2xl font-bold text-gray-900">Demande envoyée !</h2>
					<p class="mb-8 text-gray-600">
						Merci pour votre demande. Notre équipe vous recontactera dans les plus brefs délais.
					</p>
					<a
						href="/"
						class="inline-flex rounded-full bg-primary-600 px-8 py-3 font-medium text-white transition-all hover:bg-primary-700"
					>
						Retour à l'accueil
					</a>
				</div>
			{:else}
				<!-- Form -->
				<form onsubmit={handleSubmit} class="space-y-8">
					<!-- Identity -->
					<div>
						<h2 class="mb-6 text-xl font-semibold text-gray-900">Vos informations</h2>
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
								<label for="company" class="mb-1.5 block text-sm font-medium text-gray-700">Entreprise *</label>
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
								<label for="email" class="mb-1.5 block text-sm font-medium text-gray-700">Email *</label>
								<input
									id="email"
									type="email"
									required
									bind:value={email}
									placeholder="jean@entreprise.com"
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								/>
							</div>
							<div>
								<label for="phone" class="mb-1.5 block text-sm font-medium text-gray-700">Téléphone</label>
								<input
									id="phone"
									type="tel"
									bind:value={phone}
									placeholder="(+33) 6 12 34 56 78"
									class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
								/>
							</div>
						</div>
					</div>

					<!-- Service Selection -->
					<div>
						<h2 class="mb-6 text-xl font-semibold text-gray-900">Service souhaité</h2>
						<div class="grid gap-3 sm:grid-cols-2">
							{#each services as service}
								<label
									class="flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all {selectedService === service.slug
										? 'border-primary-500 bg-primary-50'
										: 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'}"
								>
									<input
										type="radio"
										name="service"
										value={service.slug}
										bind:group={selectedService}
										class="mt-0.5 accent-primary-600"
									/>
									<div>
										<span class="block text-sm font-semibold text-gray-900">{service.title}</span>
										<span class="text-xs text-gray-500">{service.category}</span>
									</div>
								</label>
							{/each}
						</div>
					</div>

					<!-- Message -->
					<div>
						<h2 class="mb-6 text-xl font-semibold text-gray-900">Votre projet</h2>
						<label for="message" class="mb-1.5 block text-sm font-medium text-gray-700">
							Décrivez brièvement votre besoin
						</label>
						<textarea
							id="message"
							rows="5"
							bind:value={message}
							placeholder="Parlez-nous de votre entreprise, vos objectifs et vos contraintes..."
							class="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
						></textarea>
					</div>

					<!-- Submit -->
					<div class="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-between">
						<p class="text-sm text-gray-500">* Champs obligatoires</p>
						<button
							type="submit"
							class="w-full rounded-full bg-primary-600 px-10 py-3.5 text-lg font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg sm:w-auto"
						>
							Envoyer ma demande
						</button>
					</div>
				</form>
			{/if}
		</div>
	</section>
</main>

<Footer />
