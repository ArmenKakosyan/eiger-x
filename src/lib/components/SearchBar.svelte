<script>
	import { searchQuery } from "$lib/stores/search";
</script>

<div class="relative w-full">
  <input
    bind:value={$searchQuery}
    type="text"
    placeholder="Search for help"
    class="w-full py-2.5 px-3 h-[41px] rounded-lg bg-grey-primary text-white-primary text-sm leading-[21px] placeholder:text-white-primary
    placeholder:text-sm placeholder:leading-[21px] focus:outline-none border-none"
  />
  <img
    src="icons/search.svg"
    alt="Search"
    class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white-primary"
  />
</div>
