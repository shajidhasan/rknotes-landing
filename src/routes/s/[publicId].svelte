<script lang="ts" context="module">
	export const load = async ({ params, fetch }) => {
		const res = await fetch(`./api/${params.publicId}`);
		const result = (await res.json()) as Result<Note>;
		if (result.found) {
			return {
				props: {
					note: result.data
				}
			};
		}

		return {
			status: 404
		};
	};
</script>

<script lang="ts">
	import showdown from 'showdown';
	import sanitizeHtml from 'sanitize-html';
	import SvelteSeo from 'svelte-seo';

	export let note: Note;

	let converter = new showdown.Converter();

	let noteHtml = sanitizeHtml(converter.makeHtml(note.data));
</script>

<SvelteSeo
	title={note.name}
	description={`A note shared by ${note.creator}.`}
	openGraph={{ title: note.name, description: `A note shared by ${note.creator}.` }}
/>

<svelte:head>
	<title>{note.name} - {note.creator}</title>
</svelte:head>

<div class="container mx-auto px-3 py-3 sm:px5 sm:py-5 md:px-12 lg:px-24 xl:px-48 flex flex-col">
	<div class="mt-4 mb-1">
		<h1
			class="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700 line-clamp-1"
		>
			{note.name}
		</h1>
		<p class="text-center text-sm md:text-base text-slate-600">Shared by {note.creator}</p>
		<div
			class="bg-white rounded-lg shadow p-3 md:p-5 prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-primary mt-5 mx-auto max-w-none"
		>
			{@html noteHtml}
		</div>
	</div>
</div>
