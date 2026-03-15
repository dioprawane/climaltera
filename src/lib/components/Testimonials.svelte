<script lang="ts">
	const reasons = [
		{
			icon: 'clarity',
			title: 'Une approche claire et sans jargon',
			description: 'Nous traduisons les enjeux climatiques en langage métier. Chaque livrable est compréhensible par un dirigeant, un DAF ou un responsable de site.'
		},
		{
			icon: 'concrete',
			title: 'Des recommandations concrètes',
			description: 'Pas de rapports de 200 pages qui restent dans un tiroir. Nos plans d\'action sont priorisés, chiffrés et directement applicables.'
		},
		{
			icon: 'adapt',
			title: 'Adaptation au niveau de maturité',
			description: 'Que vous débutiez ou ayez déjà engagé une démarche, nous calibrons notre accompagnement à votre situation réelle.'
		},
		{
			icon: 'vision',
			title: 'Vision intégrée risques + climat',
			description: 'Nous ne séparons pas la réduction d\'émissions de l\'adaptation aux risques climatiques — les deux vont de pair pour une stratégie durable.'
		}
	];

	const testimonials = [
		{
			quote: 'ClimAltera nous a permis de passer d\'une vague intention RSE à un plan de réduction structuré en 6 semaines. C\'est exactement ce dont une PME a besoin.',
			author: 'Nathalie Ferrand',
			role: 'Directrice Générale',
			company: 'Ferrand Industries',
			image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
		},
		{
			quote: 'L\'approche est pragmatique et sans jargon. Notre comité de direction a compris les enjeux dès la restitution — c\'est rare dans le conseil climat.',
			author: 'Julien Morel',
			role: 'Responsable QSE',
			company: 'Morel Logistique',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
		},
		{
			quote: 'Les ateliers de sensibilisation ont transformé la culture de notre entreprise. Nos équipes proposent désormais elles-mêmes des actions de réduction.',
			author: 'Camille Lefèvre',
			role: 'Responsable RSE',
			company: 'Groupe Lefèvre',
			image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
		}
	];

	let currentTestimonial = $state(0);

	function nextTestimonial() {
		currentTestimonial = (currentTestimonial + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section class="bg-primary-50 px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">

		<!-- Section 1 : Pourquoi les PME nous choisissent -->
		<div class="mb-4 text-center">
			<h2 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
				Pourquoi les PME <span class="text-primary-600">nous choisissent</span>
			</h2>
		</div>
		<p class="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-600">
			Un accompagnement calibré pour les entreprises qui veulent agir vite, bien, et à leur échelle.
		</p>

		<!-- 4 cartes raisons -->
		<div class="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each reasons as reason}
				<div class="group rounded-2xl bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
						{#if reason.icon === 'clarity'}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						{:else if reason.icon === 'concrete'}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
							</svg>
						{:else if reason.icon === 'adapt'}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
							</svg>
						{:else}
							<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="mb-2 text-base font-bold text-gray-900">{reason.title}</h3>
					<p class="text-sm leading-relaxed text-gray-600">{reason.description}</p>
				</div>
			{/each}
		</div>

		<!-- Separator -->
		<div class="mb-16 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

		<!-- Section 2 : Témoignages -->
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div>
				<h3 class="mb-2 text-sm font-semibold text-primary-600 uppercase tracking-wide">Témoignages</h3>
				<h2 class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
					Ils ont fait confiance à ClimAltera
				</h2>

				<blockquote class="mb-4 text-lg leading-relaxed text-gray-600 italic">
					"{testimonials[currentTestimonial].quote}"
				</blockquote>

				<div class="mb-8">
					<p class="font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
					<p class="text-sm text-gray-500">{testimonials[currentTestimonial].role} — {testimonials[currentTestimonial].company}</p>
				</div>

				<!-- Navigation -->
				<div class="flex items-center gap-4">
					<button
						onclick={prevTestimonial}
						class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-200 text-primary-700 transition-all hover:bg-primary-300"
						aria-label="Témoignage précédent"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onclick={nextTestimonial}
						class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white transition-all hover:bg-primary-600"
						aria-label="Témoignage suivant"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</button>
					<!-- Dots -->
					<div class="ml-2 flex gap-2">
						{#each testimonials as _, i}
							<span class="h-2 w-2 rounded-full transition-all {i === currentTestimonial ? 'bg-primary-600 scale-125' : 'bg-primary-300'}"></span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Right Image -->
			<div class="relative flex justify-center">
				<!-- Background blob -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="h-80 w-80 rounded-full bg-primary-400 opacity-80 blur-3xl"></div>
				</div>

				<!-- Person image -->
				<div class="relative">
					<div class="h-80 w-80 overflow-hidden rounded-full bg-primary-500 shadow-xl">
						<img
							src={testimonials[currentTestimonial].image}
							alt={testimonials[currentTestimonial].author}
							class="h-full w-full object-cover"
						/>
					</div>

					<!-- Role badge -->
					<div class="absolute right-0 bottom-8 rounded-xl bg-white px-4 py-2 shadow-lg">
						<div class="flex items-center gap-2">
							<div class="h-2 w-2 rounded-full bg-primary-500"></div>
							<span class="text-sm font-medium text-gray-700">{testimonials[currentTestimonial].role}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
