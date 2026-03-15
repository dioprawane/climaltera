<script lang="ts">
	const testimonials = [
		{
			quote: "J'ai toujours voulu investir dans les énergies renouvelables, mais cela semblait si compliqué. Cette application rend les choses incroyablement faciles, et j'adore savoir que mon argent contribue à un avenir durable. De plus, les retours sont meilleurs que prévu !",
			author: 'Marie Dupont',
			company: 'LogoIpsum',
			image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
		},
		{
			quote: "ClimAltera nous a aidés à comprendre nos risques climatiques et à mettre en place une stratégie de transition efficace. Une vraie révolution pour notre PME.",
			author: 'Jean Martin',
			company: 'EcoTech',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
		},
		{
			quote: "Les ateliers climat ont transformé la culture de notre entreprise. Nos équipes sont maintenant engagées à 100% dans notre démarche environnementale.",
			author: 'Sophie Bernard',
			company: 'GreenCorp',
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
		<!-- Separator -->
		<div class="mb-16 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>

		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div>
				<h2 class="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
					Un game-changer pour les investisseurs éco-responsables !
				</h2>

				<blockquote class="mb-8 text-lg leading-relaxed text-gray-600">
					"{testimonials[currentTestimonial].quote}"
				</blockquote>

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

					<!-- Company badge -->
					<div class="absolute right-0 bottom-8 rounded-xl bg-white px-4 py-2 shadow-lg">
						<div class="flex items-center gap-2">
							<svg class="h-6 w-6 text-gray-400" viewBox="0 0 32 32" fill="currentColor">
								<circle cx="16" cy="16" r="6" />
							</svg>
							<span class="font-medium text-gray-700">{testimonials[currentTestimonial].company}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
