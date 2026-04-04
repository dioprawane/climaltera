<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>CGU / CGV — ClimAltera</title>
	<meta name="description" content="Conditions générales d'utilisation et de vente de ClimAltera." />
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

		<h1 class="mb-10 text-4xl font-bold text-gray-900 md:text-5xl">Conditions Générales d'Utilisation et de Vente</h1>

		<!-- CGU -->
		<div class="space-y-10 text-gray-600 leading-relaxed">
			<div class="rounded-xl bg-primary-50 px-6 py-4">
				<h2 class="text-xl font-bold text-primary-700">Partie 1 — Conditions Générales d'Utilisation (CGU)</h2>
			</div>

			<!-- Article 1 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 1 — Objet</h2>
				<p>
					Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du site <strong>www.climaltera.com</strong> édité par ClimAltera.
				</p>
				<p class="mt-3">
					L'accès au site implique l'acceptation sans réserve des présentes CGU par l'utilisateur.
				</p>
			</div>

			<!-- Article 2 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 2 — Accès au site</h2>
				<p>
					Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les coûts liés à l'accès au site (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
				</p>
				<p class="mt-3">
					ClimAltera se réserve le droit de suspendre ou d'interrompre l'accès au site à tout moment, notamment pour des raisons de maintenance, sans que cela ne puisse donner lieu à une quelconque indemnisation.
				</p>
			</div>

			<!-- Article 3 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 3 — Propriété intellectuelle</h2>
				<p>
					L'ensemble des éléments du site (textes, images, graphismes, logo, vidéos, sons, logiciels, mises en page…) est la propriété exclusive de ClimAltera ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, du contenu de ce site, par quelque procédé que ce soit, sans l'autorisation expresse et préalable de ClimAltera, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
				</p>
			</div>

			<!-- Article 4 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 4 — Responsabilité de l'utilisateur</h2>
				<p>L'utilisateur s'engage à :</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li>Utiliser le site conformément à sa destination et aux présentes CGU</li>
					<li>Ne pas porter atteinte à l'ordre public et aux bonnes mœurs</li>
					<li>Ne pas tenter de nuire au bon fonctionnement du site</li>
					<li>Fournir des informations exactes et à jour dans les formulaires de contact</li>
				</ul>
			</div>

			<!-- Article 5 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 5 — Données personnelles</h2>
				<p>
					Les données personnelles collectées sur le site font l'objet d'un traitement conforme au RGPD. Pour plus d'informations, consulter notre <a href="/confidentialite" class="text-primary-600 underline hover:text-primary-800">politique de confidentialité</a>.
				</p>
			</div>

			<!-- CGV -->
			<div class="rounded-xl bg-primary-50 px-6 py-4 mt-16">
				<h2 class="text-xl font-bold text-primary-700">Partie 2 — Conditions Générales de Vente (CGV)</h2>
			</div>

			<!-- Article 6 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 6 — Champ d'application</h2>
				<p>
					Les présentes Conditions Générales de Vente (CGV) s'appliquent à l'ensemble des prestations de services proposées par ClimAltera à ses clients professionnels : bilans carbone, plans de réduction des émissions, diagnostics de vulnérabilité climatique, ateliers de sensibilisation et tout autre service d'accompagnement environnemental.
				</p>
				<p class="mt-3">
					Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.
				</p>
			</div>

			<!-- Article 7 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 7 — Prestations de services</h2>
				<p>
					ClimAltera propose des prestations de conseil et d'accompagnement en matière de transition écologique et de gestion des risques climatiques, notamment :
				</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li>Bilan carbone simplifié pour PME</li>
					<li>Plan de réduction des émissions</li>
					<li>Diagnostic de vulnérabilité climatique</li>
					<li>Ateliers de sensibilisation climat</li>
				</ul>
				<p class="mt-3">
					Le contenu détaillé de chaque prestation est défini dans le devis ou la proposition commerciale remis au client.
				</p>
			</div>

			<!-- Article 8 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 8 — Devis et commande</h2>
				<p>
					Toute prestation fait l'objet d'un devis préalable détaillé, remis gratuitement au client. Le devis est valable 30 jours à compter de sa date d'émission.
				</p>
				<p class="mt-3">
					La commande est considérée comme ferme et définitive après signature du devis par le client et réception de l'acompte éventuel.
				</p>
			</div>

			<!-- Article 9 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 9 — Tarifs</h2>
				<p>
					Les prix des prestations sont indiqués en euros hors taxes (HT) dans le devis. La TVA applicable est ajoutée au moment de la facturation au taux en vigueur.
				</p>
				<p class="mt-3">
					ClimAltera se réserve le droit de modifier ses tarifs à tout moment. Les prestations en cours sont facturées au tarif convenu lors de la signature du devis.
				</p>
			</div>

			<!-- Article 10 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 10 — Modalités de paiement</h2>
				<p>
					Sauf accord contraire :
				</p>
				<ul class="mt-3 ml-6 list-disc space-y-2">
					<li>Un acompte de 30 % est demandé à la signature du devis</li>
					<li>Le solde est facturé à la livraison des livrables finaux</li>
					<li>Les factures sont payables à 30 jours date de facture</li>
				</ul>
				<p class="mt-3">
					En cas de retard de paiement, des pénalités de retard au taux de 3 fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement, conformément aux articles L.441-10 et D.441-5 du Code de commerce.
				</p>
			</div>

			<!-- Article 11 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 11 — Exécution des prestations</h2>
				<p>
					ClimAltera s'engage à exécuter les prestations avec diligence et conformément aux règles de l'art. Les délais indiqués dans le devis sont donnés à titre indicatif et ne constituent pas un engagement ferme, sauf mention contraire.
				</p>
				<p class="mt-3">
					Le client s'engage à fournir à ClimAltera toutes les informations et données nécessaires à la bonne exécution de la mission dans les délais convenus.
				</p>
			</div>

			<!-- Article 12 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 12 — Confidentialité</h2>
				<p>
					Chacune des parties s'engage à conserver strictement confidentiels l'ensemble des documents, informations et données communiqués par l'autre partie dans le cadre de la prestation. Cette obligation de confidentialité s'applique pendant toute la durée de la relation contractuelle et pendant 3 ans après son terme.
				</p>
			</div>

			<!-- Article 13 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 13 — Résiliation</h2>
				<p>
					En cas de manquement par l'une des parties à l'une de ses obligations, l'autre partie pourra résilier le contrat de plein droit, 15 jours après l'envoi d'une mise en demeure restée sans effet, adressée par lettre recommandée avec accusé de réception.
				</p>
				<p class="mt-3">
					En cas d'annulation par le client après le démarrage de la mission, les prestations déjà réalisées seront facturées au prorata du travail effectué.
				</p>
			</div>

			<!-- Article 14 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 14 — Limitation de responsabilité</h2>
				<p>
					La responsabilité de ClimAltera est limitée au montant total de la prestation. ClimAltera ne pourra en aucun cas être tenue responsable des dommages indirects (perte de chiffre d'affaires, perte de données, préjudice d'image, etc.).
				</p>
				<p class="mt-3">
					Les recommandations émises par ClimAltera ont valeur de conseil. Le client reste seul responsable des décisions prises sur la base des livrables fournis.
				</p>
			</div>

			<!-- Article 15 -->
			<div>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Article 15 — Droit applicable et litiges</h2>
				<p>
					Les présentes CGU/CGV sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord amiable, le litige sera soumis aux tribunaux compétents du ressort du siège social de ClimAltera.
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
