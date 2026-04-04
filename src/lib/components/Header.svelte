<script lang="ts">
	import logo from '$lib/assets/new_logo_climaltera.png';
	
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/#services', label: 'Services' },
		{ href: '/#methodology', label: 'Méthodologie' },
		{ href: '/#locations', label: 'Secteurs' },
		{ href: '/#diagnostic', label: 'Mini-diagnostic' },
		{ href: '/a-propos', label: 'À propos' },
		{ href: '/#contact', label: 'Contact' }
	];
</script>

<header class="fixed top-0 left-0 right-0 z-10 bg-white/20 backdrop-blur-lg border-b border-white/20">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="ClimAltera" class="h-10 w-auto" />
			<span class="text-2xl font-bold text-gray-900">ClimAltera</span>
		</a>

		<!-- Navigation Desktop -->
		<nav class="hidden items-center gap-8 lg:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-gray-700 transition-colors hover:text-primary-600"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- CTA Button -->
		<div class="hidden items-center lg:flex">
			<a
				href="/devis"
				class="rounded-full bg-primary-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg"
			>
				Lancer son diagnostic
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="text-gray-700 lg:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 bg-cream lg:hidden">
			<div class="space-y-2 px-4 py-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-primary-50"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<hr class="my-2 border-gray-200" />
				<a
					href="/devis"
					class="block rounded-full bg-primary-600 px-4 py-2.5 text-center font-medium text-white"
					onclick={() => (mobileMenuOpen = false)}
				>
					Lancer son diagnostic
				</a>
			</div>
		</div>
	{/if}
</header>
