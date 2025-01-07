<script lang="ts">
  import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

  import '../app.css';

  let { children } = $props();
</script>

<div class="font-inter">
  <div class="absolute top-0 w-full h-[55%] bg-green-primary z-1"></div>
  <div class="absolute top-0 w-full h-[55%] bg-gradient-top z-2"></div>
  <div class="absolute bottom-0 w-full h-[45%] bg-gradient-bottom z-2"></div>

  <div class="relative flex flex-col min-h-screen p-4 pb-6 gap-4 z-3">
    <Header />

    <main class="grow">
      {@render children()}
    </main>

    <Footer />
  </div>
</div>
