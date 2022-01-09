<script context="module">
	export function load({ status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	import SvelteSeo from 'svelte-seo';
	import notFoundImage from '../assets/404.png';
	import errorImage from '../assets/error.png';

	export let status;
</script>

<SvelteSeo
	openGraph={{
		title: status === 404 ? 'RKNotes - Not Found' : 'RKNotes - We ran into an error',
		description:
			status === 404
				? "The thing you're looking for doesn't exist."
				: "We ran into some kind of error. But worry not, we'll be fixing it soon!"
	}}
/>

<svelte:head>
	{#if status === 404}
		<title>RKNotes - Not Found</title>
	{:else}
		<title>RKNotes - We ran into an error</title>
	{/if}
</svelte:head>

<div class="container mx-auto flex flex-col items-center lg:flex-row">
	<div class="lg:flex-[2] w-2/3 p-5 lg:p-10">
		{#if status === 404}
			<img src={notFoundImage} alt="Not found" class="h-min w-full object-contain" />
		{:else}
			<img src={errorImage} alt="Not found" class="h-min w-full object-contain" />
		{/if}
	</div>
	<div class="lg:flex-[3] flex flex-col justify-center p-5 lg:p-20">
		<h1 class="text-5xl text-slate-700 font-semibold">
			{#if status === 404}
				Uhoh... We couldn't find what you're looking for.
			{:else}
				Uhoh... We ran into some kind of error.
			{/if}
		</h1>
		<p class="text-xl text-slate-600 mt-6 leading-relaxed">
			{#if (status = 404)}
				This page doesn't exist in <span class="font-semibold underline decoration-primary-600"
					>RKNotes</span
				>.
				<a href="/" class="link">Click here</a> to go back to the homepage.
			{:else}
				This wasn't supposed to happen. We will fix <span
					class="font-semibold underline decoration-primary-600">RKNotes</span
				>
				ASAP. In the meantime, you can help by submitting an issue in this
				<a href="https://github.com/shajidhasn/rknotes-landing" class="link">GitHub repo</a>.
				<a href="/" class="link">Click here</a> to go back to the homepage.
			{/if}
		</p>
	</div>
</div>
