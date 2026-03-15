<script lang="ts">
	// --- Entrées du diagnostic ---
	const secteurs = [
		'Industrie / Production',
		'BTP / Construction',
		'Transport / Logistique',
		'Commerce / Distribution',
		'Services / Conseil',
		'Agriculture / Agroalimentaire',
		'Hôtellerie / Restauration',
		'Santé / Médico-social',
		'Autre'
	];

	const enjeux = [
		{ id: 'carbone', label: 'Réduction carbone' },
		{ id: 'dechets', label: 'Gestion des déchets' },
		{ id: 'eau', label: 'Consommation d\'eau' },
		{ id: 'risques', label: 'Risques climatiques' },
		{ id: 'reglementation', label: 'Conformité réglementaire' },
		{ id: 'global', label: 'Démarche globale RSE' }
	];

	let secteur = $state('');
	let salaries = $state(25);
	let sites = $state(1);
	let energie = $state(50); // en MWh/an estimé
	let flotte = $state(5);
	let enjeuPrincipal = $state('');
	let showResult = $state(false);

	// --- Calcul du score de maturité (0-100) ---
	let score = $derived(() => {
		let s = 0;
		// Plus l'entreprise est grande, plus les enjeux sont complexes
		if (salaries <= 10) s += 20;
		else if (salaries <= 50) s += 15;
		else if (salaries <= 150) s += 10;
		else s += 5;

		// Peu de sites = plus facile à gérer
		if (sites <= 1) s += 20;
		else if (sites <= 3) s += 15;
		else s += 8;

		// Énergie faible = maturité potentielle plus haute
		if (energie <= 30) s += 25;
		else if (energie <= 100) s += 15;
		else if (energie <= 300) s += 10;
		else s += 5;

		// Flotte réduite  
		if (flotte <= 2) s += 20;
		else if (flotte <= 10) s += 12;
		else s += 5;

		// Enjeu ciblé = début de réflexion
		if (enjeuPrincipal) s += 15;

		return Math.min(s, 100);
	});

	let niveau = $derived(() => {
		const s = score();
		if (s >= 70) return { label: 'Avancé', color: 'bg-primary-500', text: 'text-primary-700', description: 'Votre profil indique une maturité environnementale déjà solide. Un plan de réduction structuré peut amplifier vos résultats.' };
		if (s >= 40) return { label: 'Intermédiaire', color: 'bg-amber-400', text: 'text-amber-700', description: 'Vous avez des bases, mais un diagnostic approfondi révélerait des leviers d\'action significatifs.' };
		return { label: 'Débutant', color: 'bg-red-400', text: 'text-red-700', description: 'Tout reste à construire — c\'est le moment idéal pour poser les fondations avec un bilan carbone simplifié.' };
	});

	let offreRecommandee = $derived(() => {
		if (enjeuPrincipal === 'risques') return 'Diagnostic de Vulnérabilité Climatique';
		if (enjeuPrincipal === 'global' || enjeuPrincipal === 'dechets' || enjeuPrincipal === 'eau') return 'Diagnostic Environnemental Global';
		const s = score();
		if (s >= 70) return 'Plan de Réduction des Émissions';
		if (s >= 40) return 'Bilan Carbone Simplifié PME';
		return 'Bilan Carbone Simplifié PME';
	});

	function handleDiagnostic() {
		if (secteur && enjeuPrincipal) {
			showResult = true;
		}
	}

	function reset() {
		showResult = false;
		secteur = '';
		salaries = 25;
		sites = 1;
		energie = 50;
		flotte = 5;
		enjeuPrincipal = '';
	}
</script>

<section id="diagnostic" class="bg-cream px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-4 text-center">
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">
				Mini-diagnostic <span class="text-primary-500">environnemental</span>
			</h2>
		</div>
		<p class="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-600">
			Évaluez en 2 minutes le niveau de maturité environnementale de votre entreprise et découvrez l'accompagnement adapté.
		</p>

		{#if !showResult}
			<!-- FORMULAIRE -->
			<div class="mx-auto max-w-4xl">
				<div class="relative rounded-[40px] bg-primary-600 p-4 shadow-2xl" style="box-shadow: 0px 8px 40px rgba(5, 150, 105, 0.3);">
					<div class="rounded-[32px] bg-white p-8 md:p-12" style="box-shadow: 0px 0px 0px 16px rgba(255, 255, 255, 0.2);">

						<div class="grid gap-8 md:grid-cols-2">
							<!-- Secteur d'activité -->
							<div>
								<label for="secteur" class="mb-2 block text-sm font-semibold text-gray-700">
									Secteur d'activité
								</label>
								<select
									id="secteur"
									bind:value={secteur}
									class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
								>
									<option value="" disabled>Sélectionnez votre secteur</option>
									{#each secteurs as s}
										<option value={s}>{s}</option>
									{/each}
								</select>
							</div>

							<!-- Nombre de salariés -->
							<div>
								<label for="salaries" class="mb-2 block text-sm font-semibold text-gray-700">
									Nombre de salariés
								</label>
								<div class="flex items-center gap-4">
									<input
										id="salaries"
										type="range"
										bind:value={salaries}
										min="1"
										max="500"
										step="1"
										class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
									/>
									<div class="flex h-9 min-w-[60px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
										{salaries}
									</div>
								</div>
							</div>

							<!-- Nombre de sites -->
							<div>
								<label for="sites" class="mb-2 block text-sm font-semibold text-gray-700">
									Nombre de sites / établissements
								</label>
								<div class="flex items-center gap-4">
									<input
										id="sites"
										type="range"
										bind:value={sites}
										min="1"
										max="20"
										step="1"
										class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
									/>
									<div class="flex h-9 min-w-[60px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
										{sites}
									</div>
								</div>
							</div>

							<!-- Énergie estimée -->
							<div>
								<label for="energie" class="mb-2 block text-sm font-semibold text-gray-700">
									Consommation d'énergie estimée (MWh/an)
								</label>
								<div class="flex items-center gap-4">
									<input
										id="energie"
										type="range"
										bind:value={energie}
										min="5"
										max="1000"
										step="5"
										class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
									/>
									<div class="flex h-9 min-w-[60px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
										{energie}
									</div>
								</div>
							</div>

							<!-- Flotte / déplacements -->
							<div>
								<label for="flotte" class="mb-2 block text-sm font-semibold text-gray-700">
									Véhicules / flotte
								</label>
								<div class="flex items-center gap-4">
									<input
										id="flotte"
										type="range"
										bind:value={flotte}
										min="0"
										max="100"
										step="1"
										class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-primary-600"
									/>
									<div class="flex h-9 min-w-[60px] items-center justify-center rounded-full bg-primary-500 px-3 text-sm font-bold text-white">
										{flotte}
									</div>
								</div>
							</div>

							<!-- Enjeu principal -->
							<div>
								<span class="mb-2 block text-sm font-semibold text-gray-700">
									Enjeu principal
								</span>
								<div class="grid grid-cols-2 gap-2" role="group" aria-label="Enjeu principal">
									{#each enjeux as enjeu}
										<button
											type="button"
											onclick={() => (enjeuPrincipal = enjeu.id)}
											class="rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all {enjeuPrincipal === enjeu.id
												? 'border-primary-500 bg-primary-50 text-primary-700'
												: 'border-gray-200 bg-white text-gray-600 hover:border-primary-300'}"
										>
											{enjeu.label}
										</button>
									{/each}
								</div>
							</div>
						</div>

						<!-- Bouton lancer -->
						<div class="mt-10 text-center">
							<button
								type="button"
								onclick={handleDiagnostic}
								disabled={!secteur || !enjeuPrincipal}
								class="inline-flex items-center gap-2 rounded-full bg-primary-500 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
							>
								Lancer le diagnostic
								<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</button>
							<p class="mt-3 text-xs text-gray-400">Estimation indicative — aucune donnée personnelle n'est collectée.</p>
						</div>
					</div>
				</div>
			</div>

		{:else}
			<!-- RÉSULTATS -->
			<div class="mx-auto max-w-4xl">
				<div class="relative rounded-[40px] bg-primary-600 p-4 shadow-2xl" style="box-shadow: 0px 8px 40px rgba(5, 150, 105, 0.3);">
					<div class="rounded-[32px] bg-white p-8 md:p-12" style="box-shadow: 0px 0px 0px 16px rgba(255, 255, 255, 0.2);">

						<!-- Score -->
						<div class="mb-8 text-center">
							<p class="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Votre niveau de maturité</p>
							<div class="inline-flex items-center gap-3 rounded-full {niveau().color} px-6 py-2">
								<span class="text-2xl font-extrabold text-white">{score()}/100</span>
								<span class="text-sm font-bold text-white/90">{niveau().label}</span>
							</div>
						</div>

						<!-- Jauge visuelle -->
						<div class="mx-auto mb-10 max-w-md">
							<div class="h-4 w-full overflow-hidden rounded-full bg-gray-100">
								<div
									class="h-full rounded-full {niveau().color} transition-all duration-700"
									style="width: {score()}%;"
								></div>
							</div>
							<div class="mt-2 flex justify-between text-xs text-gray-400">
								<span>Débutant</span>
								<span>Intermédiaire</span>
								<span>Avancé</span>
							</div>
						</div>

						<!-- Synthèse -->
						<div class="mb-8 rounded-2xl bg-gray-50 p-6">
							<h3 class="mb-2 text-lg font-bold text-gray-900">Synthèse</h3>
							<p class="mb-4 text-sm leading-relaxed text-gray-600">{niveau().description}</p>
							<div class="flex flex-wrap gap-3 text-xs text-gray-500">
								<span class="rounded-full bg-white px-3 py-1 shadow-sm">{secteur}</span>
								<span class="rounded-full bg-white px-3 py-1 shadow-sm">{salaries} salariés</span>
								<span class="rounded-full bg-white px-3 py-1 shadow-sm">{sites} site{sites > 1 ? 's' : ''}</span>
								<span class="rounded-full bg-white px-3 py-1 shadow-sm">{energie} MWh/an</span>
								<span class="rounded-full bg-white px-3 py-1 shadow-sm">{flotte} véhicule{flotte > 1 ? 's' : ''}</span>
							</div>
						</div>

						<!-- Offre recommandée -->
						<div class="mb-8 rounded-2xl border-2 border-primary-200 bg-primary-50 p-6">
							<p class="mb-1 text-xs font-semibold text-primary-600 uppercase tracking-wide">Offre recommandée</p>
							<h3 class="mb-2 text-xl font-bold text-gray-900">{offreRecommandee()}</h3>
							<p class="text-sm text-gray-600">
								Sur la base de votre profil, cette prestation vous permettra d'avancer concrètement sur vos enjeux environnementaux.
							</p>
						</div>

						<!-- CTA -->
						<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
							<a
								href="/devis"
								class="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-primary-600 hover:shadow-lg"
							>
								Demander un échange gratuit
								<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</a>
							<button
								type="button"
								onclick={reset}
								class="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50"
							>
								Recommencer le diagnostic
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
