<script>
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<div class="flex-1 bg-gray-50 flex flex-col items-center justify-center">
		<slot />
	</div>
	<Footer />
</div>
