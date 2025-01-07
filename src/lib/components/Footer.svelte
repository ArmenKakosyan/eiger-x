<script>
  import { page } from '$app/state';

	import NAV_ITEMS from "$lib/constants/navItems";

  const currentPath = $derived(page.url.pathname);
  const modifiedPath = $derived(['/', '/home'].includes(currentPath) ? '/home' : currentPath);
</script>

<footer class="h-[81px] flex rounded-lg bg-black-secondary shadow-footer">
  {#each NAV_ITEMS as { title, icon, href, fillStrokes }}
    {@const isActive = modifiedPath === href}

    <a href={href} class="justify-center flex flex-col w-1/3 h-full gap-2 items-center text-white-primary text-sm hover:bg-black-primary">
      <svg
        class="w-6 h-6" 
        fill={!fillStrokes ? isActive ? '#24FFBC' : 'white' : 'transparent'}
        stroke={fillStrokes ? isActive ? '#24FFBC' : 'white' : 'transparent'}
      >
        {@html icon}
      </svg>
      <span class={`text-sm ${isActive ? 'text-green-primary' : ''}`}>{title}</span>
    </a>
  {/each}
</footer>