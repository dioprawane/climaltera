<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Mentions légales — ClimAltera</title>
	<meta name="description" content="Mentions légales du site ClimAltera.com" />
</svelte:head>

<Header />

<main class="bg-cream pt-24">
	<section class="mx-auto max-w-4xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
		<a
			href="/"
			class="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
		>
			<svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			Retour à l'accueil
		</a>

		<h1 class="mb-10 text-4xl font-bold text-gray-900 md:text-5xl">Mentions légales</h1>

		<div class="space-y-10 text-gray-600 leading-relaxed">
			<!-- Éditeur -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">1. Éditeur du site</h2>
				<p>
					Le site <strong>www.climaltera.com</strong> est édité par :<br />
					<strong>ClimAltera</strong><br />
					Forme juridique : [À compléter — ex : SAS au capital de X €]<br />
					Siège social : [Adresse à compléter]<br />
					SIRET : [À compléter]<br />
					RCS : [À compléter]<br />
					Numéro de TVA intracommunautaire : [À compléter]
				</p>
				<p class="mt-3">
					Directeur de la publication : [Nom du responsable à compléter]<br />
					Contact : <a href="mailto:contact@climaltera.com" class="text-primary-600 underline hover:text-primary-800">contact@climaltera.com</a>
				</p>
			</div>

			<!-- Hébergeur -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">2. Hébergement</h2>
				<p>
					Le site est hébergé par :<br />
					[Nom de l'hébergeur à compléter]<br />
					Adresse : [À compléter]<br />
					Téléphone : [À compléter]
				</p>
			</div>

			<!-- Propriété intellectuelle -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">3. Propriété intellectuelle</h2>
				<p>
					L'ensemble du contenu du site ClimAltera (textes, images, graphismes, logo, icônes, vidéos, logiciels…) est protégé par les lois en vigueur sur la propriété intellectuelle.
				</p>
				<p class="mt-3">
					Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de ClimAltera.
				</p>
				<p class="mt-3">
					Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
				</p>
			</div>

			<!-- Responsabilité -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">4. Limitation de responsabilité</h2>
				<p>
					ClimAltera s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
				</p>
				<p class="mt-3">
					Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
				</p>
			</div>

			<!-- Liens hypertextes -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">5. Liens hypertextes</h2>
				<p>
					Le site ClimAltera peut contenir des liens hypertextes vers d'autres sites internet. Cependant, ClimAltera n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en conséquence aucune responsabilité de ce fait.
				</p>
			</div>

			<!-- Cookies -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">6. Cookies</h2>
				<p>
					La navigation sur le site ClimAltera est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre <a href="/confidentialite" class="text-primary-600 underline hover:text-primary-800">politique de confidentialité</a>.
				</p>
			</div>

			<!-- Droit applicable -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">7. Droit applicable</h2>
				<p>
					Tout litige en relation avec l'utilisation du site ClimAltera est soumis au droit français. L'utilisateur reconnaît la compétence exclusive des tribunaux français.
				</p>
			</div>

			<!-- Date de mise à jour -->
			<div class="rounded-xl bg-gray-50 p-6">
				<p class="text-sm text-gray-500">
					Dernière mise à jour : avril 2026
				</p>
			</div>
		</div>
	</section>
</main>

<Footer />
