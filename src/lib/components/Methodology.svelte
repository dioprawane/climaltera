<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Collecte de données',
			description: 'Nous récupérons vos factures, relevés et données d\'activité — aucun tableur complexe à remplir.'
		},
		{
			number: '02',
			title: 'Entretiens ciblés',
			description: 'Un échange d\'1 h avec les responsables clés pour comprendre vos process et vos contraintes.'
		},
		{
			number: '03',
			title: 'Analyse technique',
			description: 'Calcul de vos émissions par poste (énergie, transport, achats) selon les référentiels reconnus.'
		},
		{
			number: '04',
			title: 'Benchmark simplifié',
			description: 'Comparaison avec des entreprises de taille et secteur similaires pour situer votre performance.'
		},
		{
			number: '05',
			title: 'Rapport et restitution',
			description: 'Un document clair avec graphiques, chiffres clés et recommandations — présenté en 45 min.'
		},
		{
			number: '06',
			title: 'Feuille de route opérationnelle',
			description: 'Un plan d\'action priorisé avec calendrier, budget estimé et indicateurs de suivi.'
		}
	];
</script>

<section id="methodology" class="bg-cream px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl">
			Notre méthodologie
		</h2>
		<p class="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600">
			6 étapes simples pour passer du diagnostic à l'action — sans mobiliser vos équipes pendant des mois.
		</p>

		<!-- Separator Line -->
		<div class="mb-16 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

		<!-- Steps Grid -->
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each steps as step}
				<div class="group relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
					<!-- Step number -->
					<span class="mb-4 inline-block text-4xl font-black text-primary-200 transition-colors group-hover:text-primary-400">
						{step.number}
					</span>

					<!-- Content -->
					<h3 class="mb-3 text-xl font-bold text-gray-900">
						{step.title}
					</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						{step.description}
					</p>

					<!-- Accent bar -->
					<div class="absolute bottom-0 left-8 right-8 h-1 rounded-t-full bg-primary-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
				</div>
			{/each}
		</div>
	</div>
</section>
