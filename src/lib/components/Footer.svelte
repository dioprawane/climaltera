<script lang="ts">
	import logo from '$lib/assets/logo_climaltera.svg';
	import bgImage from '$lib/assets/image.png';
	import { services } from '$lib/data/services';

	const legalLinks = [
		{ label: 'Mentions légales', href: '/mentions-legales' },
		{ label: 'Politique de confidentialité', href: '/confidentialite' },
		{ label: 'CGU / CGV', href: '/cgu' }
	];
</script>

<!-- Footer with panoramic background -->
<footer id="contact" class="relative">
	<!-- Background image -->
	<div class="absolute inset-0 overflow-hidden">
		<img
			src={bgImage}
			alt=""
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-primary-900/40"></div>
	</div>

	<!-- Footer card overlay -->
	<div class="relative mx-auto max-w-6xl px-4 pt-60 pb-8 sm:px-6 lg:px-8">
		<div class="rounded-[32px] border border-white/10 bg-primary-900/70 p-8 backdrop-blur-md lg:p-12">
			<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

				<!-- Col 1 : Logo, contact, LinkedIn -->
				<div>
					<a href="/" class="mb-6 flex items-center gap-2">
						<img src={logo} alt="ClimAltera" class="h-10 w-auto brightness-0 invert" />
						<span class="text-2xl font-bold text-white">ClimAltera</span>
					</a>

					<p class="mb-4 text-sm leading-relaxed text-gray-300">
						Accompagnement climatique et environnemental pour les PME.
					</p>

					<!-- Email -->
					<a
						href="mailto:contact@climaltera.com"
						class="mb-4 flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
					>
						<svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						contact@climaltera.com
					</a>

					<!-- Réseaux sociaux -->
					<div class="mt-4 flex items-center gap-3">
						<!-- LinkedIn -->
						<a
							href="https://www.linkedin.com/company/climaltera"
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-gray-300 transition-all hover:bg-primary-500 hover:text-white"
							aria-label="LinkedIn"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<!-- Instagram -->
						<a
							href="https://www.instagram.com/climaltera"
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-gray-300 transition-all hover:bg-primary-500 hover:text-white"
							aria-label="Instagram"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
							</svg>
						</a>
						<!-- Facebook -->
						<a
							href="https://www.facebook.com/climaltera"
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-gray-300 transition-all hover:bg-primary-500 hover:text-white"
							aria-label="Facebook"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<!-- YouTube -->
						<a
							href="https://www.youtube.com/@climaltera"
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-gray-300 transition-all hover:bg-primary-500 hover:text-white"
							aria-label="YouTube"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
							</svg>
						</a>
					</div>
				</div>

				<!-- Col 2 : Services -->
				<div>
					<h3 class="mb-6 text-lg font-bold text-white">Services</h3>
					<ul class="space-y-3">
						{#each services as service}
							<li>
								<a href="/services/{service.slug}" class="text-sm text-gray-300 transition-colors hover:text-white">
									{service.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Col 3 : Zones d'intervention + Légal -->
				<div>
					<h3 class="mb-6 text-lg font-bold text-white">Zones d'intervention</h3>
					<ul class="mb-8 space-y-3">
						<li class="flex items-center gap-2 text-sm text-gray-300">
							<span class="inline-block h-2 w-2 rounded-full bg-primary-400"></span>
							France métropolitaine &amp; outre-mer
						</li>
						<li class="flex items-center gap-2 text-sm text-gray-300">
							<span class="inline-block h-2 w-2 rounded-full bg-gray-400"></span>
							Afrique <span class="text-xs text-gray-500">(en développement)</span>
						</li>
					</ul>

					<h3 class="mb-4 text-lg font-bold text-white">Légal</h3>
					<ul class="space-y-3">
						{#each legalLinks as link}
							<li>
								<a href={link.href} class="text-sm text-gray-300 transition-colors hover:text-white">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Col 4 : CTA -->
				<div>
					<h3 class="mb-6 text-lg font-bold text-white">Prêt à agir ?</h3>
					<p class="mb-6 text-sm leading-relaxed text-gray-300">
						Un premier échange gratuit de 30 min pour comprendre vos enjeux et identifier la meilleure façon d'avancer.
					</p>
					<a
						href="/devis"
						class="mb-4 block rounded-full bg-primary-500 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-400 hover:shadow-lg"
					>
						Prendre rendez-vous
					</a>
					<a
						href="mailto:contact@climaltera.com"
						class="block rounded-full border border-primary-600 bg-primary-800/50 px-6 py-3 text-center text-sm font-medium text-gray-300 transition-all hover:bg-primary-700 hover:text-white"
					>
						Nous écrire
					</a>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-700 pt-8 sm:flex-row">
				<p class="text-sm text-gray-400">
					© {new Date().getFullYear()} ClimAltera — Tous droits réservés
				</p>
				<p class="text-sm text-gray-400">
					Conseil climat &amp; environnement pour les PME
				</p>
			</div>
		</div>
	</div>
</footer>
