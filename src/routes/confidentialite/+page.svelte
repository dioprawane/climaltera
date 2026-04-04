<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Politique de confidentialité — ClimAltera</title>
	<meta name="description" content="Politique de confidentialité et protection des données personnelles de ClimAltera." />
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

		<h1 class="mb-10 text-4xl font-bold text-gray-900 md:text-5xl">Politique de confidentialité</h1>

		<div class="space-y-10 text-gray-600 leading-relaxed">
			<!-- Introduction -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">1. Introduction</h2>
				<p>
					ClimAltera accorde une grande importance à la protection de vos données personnelles. La présente politique de confidentialité décrit quelles données nous collectons, pourquoi nous les collectons et comment nous les utilisons.
				</p>
				<p class="mt-3">
					En utilisant le site <strong>www.climaltera.com</strong>, vous acceptez les pratiques décrites dans la présente politique.
				</p>
			</div>

			<!-- Responsable du traitement -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">2. Responsable du traitement</h2>
				<p>
					Le responsable du traitement des données personnelles est :<br />
					<strong>ClimAltera</strong><br />
					Adresse : [À compléter]<br />
					Email : <a href="mailto:contact@climaltera.com" class="text-primary-600 underline hover:text-primary-800">contact@climaltera.com</a>
				</p>
			</div>

			<!-- Données collectées -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">3. Données collectées</h2>
				<p>Nous pouvons collecter les données suivantes :</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone, nom de l'entreprise</li>
					<li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages consultées, durée de visite</li>
					<li><strong>Données transmises via les formulaires :</strong> demande de diagnostic, demande de devis, messages de contact</li>
				</ul>
			</div>

			<!-- Finalités -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">4. Finalités du traitement</h2>
				<p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li>Répondre à vos demandes de contact et de diagnostic</li>
					<li>Vous adresser des devis et propositions commerciales</li>
					<li>Améliorer notre site et nos services</li>
					<li>Respecter nos obligations légales et réglementaires</li>
					<li>Vous envoyer des communications relatives à nos services (avec votre consentement)</li>
				</ul>
			</div>

			<!-- Base légale -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">5. Base légale du traitement</h2>
				<p>Le traitement de vos données repose sur :</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li><strong>Votre consentement</strong> (formulaires de contact, inscription newsletter)</li>
					<li><strong>L'exécution d'un contrat</strong> ou de mesures précontractuelles (demande de devis)</li>
					<li><strong>L'intérêt légitime</strong> de ClimAltera (amélioration des services, analyses statistiques)</li>
				</ul>
			</div>

			<!-- Durée de conservation -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">6. Durée de conservation</h2>
				<p>
					Vos données personnelles sont conservées pendant une durée proportionnée à la finalité de leur collecte :
				</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li><strong>Données de contact et demandes :</strong> 3 ans à compter du dernier échange</li>
					<li><strong>Données clients :</strong> durée de la relation contractuelle + 5 ans (obligations comptables)</li>
					<li><strong>Données de navigation :</strong> 13 mois maximum</li>
				</ul>
			</div>

			<!-- Partage des données -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">7. Partage des données</h2>
				<p>
					ClimAltera ne vend ni ne loue vos données personnelles à des tiers. Vos données peuvent être partagées avec :
				</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li>Nos sous-traitants techniques (hébergement, outils d'analyse) dans le respect du RGPD</li>
					<li>Les autorités compétentes en cas d'obligation légale</li>
				</ul>
			</div>

			<!-- Cookies -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">8. Cookies</h2>
				<p>
					Le site utilise des cookies pour assurer son bon fonctionnement et améliorer l'expérience utilisateur.
				</p>
				<div class="mt-4 overflow-hidden rounded-xl border border-gray-200">
					<table class="w-full text-left text-sm">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-4 py-3 font-semibold text-gray-900">Type</th>
								<th class="px-4 py-3 font-semibold text-gray-900">Finalité</th>
								<th class="px-4 py-3 font-semibold text-gray-900">Durée</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100">
							<tr>
								<td class="px-4 py-3">Essentiels</td>
								<td class="px-4 py-3">Fonctionnement du site</td>
								<td class="px-4 py-3">Session</td>
							</tr>
							<tr>
								<td class="px-4 py-3">Analytiques</td>
								<td class="px-4 py-3">Mesure d'audience</td>
								<td class="px-4 py-3">13 mois</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="mt-3">
					Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est déposé.
				</p>
			</div>

			<!-- Droits des utilisateurs -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">9. Vos droits</h2>
				<p>
					Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
				</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
					<li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
					<li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
					<li><strong>Droit à la limitation :</strong> demander la suspension du traitement de vos données</li>
					<li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible</li>
					<li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes</li>
				</ul>
				<p class="mt-4">
					Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@climaltera.com" class="text-primary-600 underline hover:text-primary-800">contact@climaltera.com</a>
				</p>
				<p class="mt-3">
					Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline hover:text-primary-800">www.cnil.fr</a>
				</p>
			</div>

			<!-- Sécurité -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">10. Sécurité des données</h2>
				<p>
					ClimAltera met en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, et les protéger contre tout accès non autorisé, toute perte, altération ou divulgation.
				</p>
			</div>

			<!-- Modifications -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">11. Modifications de la politique</h2>
				<p>
					ClimAltera se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
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
