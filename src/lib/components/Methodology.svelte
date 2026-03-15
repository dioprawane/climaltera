<script lang="ts">
	const steps = [
		{
			icon: 'project',
			title: 'Choisir un projet',
			description: 'Parcourez notre sélection de projets d\'action climatique vérifiés, de la reforestation aux initiatives d\'énergie renouvelable.',
			shape: 'diamond'
		},
		{
			icon: 'invest',
			title: 'Investir avec impact',
			description: 'Allouez vos fonds au projet choisi. Votre investissement aide à financer le projet et génère des rendements basés sur son succès.',
			shape: 'diamond'
		},
		{
			icon: 'track',
			title: 'Suivre & gagner',
			description: 'Suivez la progression de votre investissement via l\'application et regardez vos gains augmenter à mesure que le projet atteint ses objectifs.',
			shape: 'triangle'
		}
	];
</script>

<section id="methodology" class="bg-cream px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-16 text-center text-4xl font-bold text-gray-900 md:text-5xl">
			Notre méthodologie
		</h2>

		<!-- Separator Line -->
		<div class="mb-16 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

		<!-- Steps Grid -->
		<div class="grid gap-12 md:grid-cols-3">
			{#each steps as step, i}
				<div class="flex flex-col items-center text-center">
					<!-- Icon Shape -->
					<div class="mb-8">
						{#if step.shape === 'diamond'}
							<div class="relative flex h-28 w-28 rotate-45 items-center justify-center rounded-2xl bg-accent">
								<div class="-rotate-45 text-primary-800">
									{#if step.icon === 'project'}
										<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2C7 2 3 6 3 11c0 3.5 2 6.5 5 8v3l4-2 4 2v-3c3-1.5 5-4.5 5-8 0-5-4-9-9-9zm0 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6l-.7.4V19l-3-1.5-3 1.5v-1.6l-.7-.4C4.3 15.7 3 13.5 3 11a7 7 0 017-7z" />
										</svg>
									{:else}
										<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 6l-1.5 3H6l3 2.5-1 3.5 4-2.5 4 2.5-1-3.5 3-2.5h-4.5z" />
										</svg>
									{/if}
								</div>
							</div>
						{:else}
							<div class="flex h-28 w-28 items-center justify-center">
								<svg viewBox="0 0 100 90" class="h-full w-full">
									<polygon points="50,5 95,85 5,85" fill="#f59e0b" />
								</svg>
								<div class="absolute text-primary-800">
									<svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
									</svg>
								</div>
							</div>
						{/if}
					</div>

					<!-- Content -->
					<h3 class="mb-4 text-xl font-bold text-gray-900">
						{step.title}
					</h3>
					<p class="max-w-xs text-gray-600">
						{step.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
