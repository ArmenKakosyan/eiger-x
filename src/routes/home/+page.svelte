<script>
	import HelpItem from "$lib/components/HelpItem.svelte";
	import MessageButton from "$lib/components/MessageButton.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
  import { filteredItems } from "$lib/stores/search";
</script>

<div class="flex flex-col gap-3">
  <MessageButton />

  <div class="p-2 flex flex-col bg-black-secondary rounded-[10px] gap-2 shadow-custom">
    <SearchBar />

    <ul>
      {#if $filteredItems.length > 0}
        {#each $filteredItems as item}
          <li>
            <HelpItem text={item} />
          </li>
        {/each}
      {:else}
        <li class="h-[41px] flex justify-center items-center px-3 py-2.5 text-">
          <span class="text-sm leading-[21px]">No results found</span>
        </li>
      {/if}
    </ul>
  </div>
</div>
