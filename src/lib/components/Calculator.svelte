<script lang="ts">
	let depositPerMonth = $state(200);
	let depositMonths = $state(6);

	// Calculs simplifiés pour la démo
	let co2Saved = $derived(Math.round(depositPerMonth * depositMonths * 0.8 / 3));
	let moneySaved = $derived(Math.round(depositPerMonth * depositMonths * 0.127));

	const equivalents = [
		{ icon: 'car', value: '500 kgCO2', equivalent: '4,167 km en voiture', color: 'text-primary-600' },
		{ icon: 'tree', value: '1,000 kgCO2', equivalent: '45 arbres plantés', color: 'text-primary-600' },
		{ icon: 'plane', value: '10,000 kgCO2', equivalent: '40 vols courts', color: 'text-primary-600' }
	];
</script>

<section class="bg-cream px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div>
				<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
					Calculez vos <span class="text-primary-500">économies</span>
				</h2>
				<p class="mb-8 text-lg text-gray-600">
					Ce calculateur fonctionne vraiment ! Essayez-le et découvrez combien vous pourriez économiser avec ClimAltera.
				</p>

				<div class="mb-8">
					<h3 class="mb-4 text-lg font-semibold text-gray-700">
						Équivalents carbone pratiques
					</h3>
					<ul class="space-y-3">
						{#each equivalents as eq}
							<li class="flex items-center gap-3">
								{#if eq.icon === 'car'}
									<span class="text-2xl">🚗</span>
								{:else if eq.icon === 'tree'}
									<span class="text-2xl">🌲</span>
								{:else}
									<span class="text-2xl">✈️</span>
								{/if}
								<span class="text-gray-700">
									{eq.value} = <span class="font-semibold {eq.color}">{eq.equivalent}</span>
								</span>
							</li>
						{/each}
					</ul>
				</div>

				<p class="mb-6 text-sm text-gray-500">
					Veuillez noter que cette estimation n'est pas une garantie des retours que vous obtiendrez en investissant dans des projets via ClimAltera.
				</p>

				<a
					href="#contact"
					class="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
				>
					Commencer
				</a>
			</div>

			<!-- Right Calculator -->
			<div class="relative flex items-start justify-center pt-16">
				<!-- Decorative coins -->
				<div class="absolute -top-2 left-[calc(50%-220px)] z-20 flex h-20 w-20 items-center justify-center rounded-full bg-primary-300 shadow-lg">
					<span class="text-3xl font-bold text-primary-800">$</span>
				</div>
				<div class="absolute top-10 left-[calc(50%-180px)] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400 shadow-md">
					<span class="text-xl font-bold text-white">$</span>
				</div>
				<!-- Sparkles -->
				<div class="absolute top-6 left-[calc(50%-150px)] z-10 text-2xl text-primary-300">✦</div>

				<!-- Outer decorative frame (green border with pattern) -->
				<div class="relative rounded-[40px] bg-primary-600 p-4 shadow-2xl" style="box-shadow: 0px 8px 40px rgba(5, 150, 105, 0.3);">
					<!-- Inner white card -->
					<div class="relative flex flex-col justify-between rounded-[32px] bg-white p-10 md:p-14" style="box-shadow: 0px 0px 0px 16px rgba(255, 255, 255, 0.2); min-height: 480px;">

						<h3 class="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
							<span class="italic text-primary-500">In total,</span> you could save...
						</h3>

						<!-- Deposit per month slider -->
						<div class="mb-6">
							<label for="deposit-per-month" class="mb-3 block text-sm font-medium text-gray-700">
								Deposit per month ($)
							</label>
							<div class="flex items-center gap-4">
								<input
									id="deposit-per-month"
									type="range"
									bind:value={depositPerMonth}
									min="50"
									max="1000"
									step="10"
									class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
								/>
								<div class="flex h-8 min-w-[52px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
									{depositPerMonth}
								</div>
							</div>
						</div>

						<!-- Deposit time slider -->
						<div class="mb-10">
							<label for="deposit-months" class="mb-3 block text-sm font-medium text-gray-700">
								Deposit time (months)
							</label>
							<div class="flex items-center gap-4">
								<input
									id="deposit-months"
									type="range"
									bind:value={depositMonths}
									min="1"
									max="24"
									step="1"
									class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
								/>
								<div class="flex h-8 min-w-[52px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
									{depositMonths}
								</div>
							</div>
						</div>

						<!-- Results -->
						<div class="grid grid-cols-2 gap-4">
							<div class="flex items-baseline justify-center gap-2 rounded-2xl bg-primary-900 px-6 py-6">
								<p class="text-4xl font-extrabold text-white md:text-5xl">{co2Saved}</p>
								<p class="text-base text-gray-300">
									kgCO<sub>2</sub>
								</p>
							</div>
							<div class="flex items-baseline justify-center gap-2 rounded-2xl bg-primary-400 px-6 py-6">
								<p class="text-sm font-medium text-white/80">$</p>
								<p class="text-4xl font-extrabold text-white md:text-5xl">{moneySaved}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
