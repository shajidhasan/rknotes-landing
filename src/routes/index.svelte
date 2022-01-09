<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import HeroImage from '../components/HeroImage.svelte';
</script>

<SvelteSeo
	title="RKNotes - Take and Share Notes With Ease"
	description="RKNotes makes it easy for you to take and edit your notes. All in markdown! If you want, you can generate links to your notes as well, making them available for everyone."
	openGraph={{
		title: 'RKNotes - Take and Share Notes With Ease',
		description:
			'RKNotes makes it easy for you to take and edit your notes. All in markdown! If you want, you can generate links to your notes as well, making them available for everyone.',
		url: 'https://rknotes.xyz',
		images: [{ url: 'open-graph.png', alt: 'RKNotes' }]
	}}
/>

<svelte:head>
	<title>RKNotes - Take and Share Notes With Ease</title>
</svelte:head>

<div class="container mx-auto flex flex-col items-center lg:flex-row">
	<div class="lg:flex-[2] w-2/3 p-5 lg:p-10">
		<HeroImage />
	</div>
	<div class="lg:flex-[3] flex flex-col justify-center p-5 lg:p-20">
		<h1 class="text-5xl text-slate-700 font-semibold">Take and share notes. In markdown.</h1>
		<p class="text-xl text-slate-600 mt-6 leading-relaxed">
			<span class="font-semibold underline decoration-primary-600">RKNotes</span> makes it easy for
			you to quickly write and organize notes. You can write your notes in
			<a class="link" href="https://en.wikipedia.org/wiki/Markdown">markdown</a>. If you choose to,
			you can generate a link to any one of your notes and share it to your friends. The code of
			this website is fully open source. Made with
			<a class="link" href="https://svelte.dev">Svelte</a>,
			<a class="link" href="https://tailwindcss.com">TailwindCSS</a>
			and <a class="link" href="https://firebase.google.com">Firebase</a>.
		</p>
		<div class="space-x-2 mt-6">
			<a
				class="text-white bg-primary-600 px-4 py-2 font-semibold rounded shadow hover:bg-primary-500 text-lg"
				href="https://app.rknotes.xyz/#/login">Login</a
			>
			<a
				class="text-primary-700 bg-primary-50 px-4 py-2 font-medium rounded shadow hover:bg-primary-100 text-lg"
				href="https://app.rknotes.xyz/#/register">Register</a
			>
		</div>
	</div>
</div>
