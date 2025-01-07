<script>
	import USERS from "$lib/constants/users";
</script>

<header class="flex flex-col gap-[100px] justify-between px-5 pt-5">
  <div class="flex justify-between w-full items-center">
    <img src="icons/logo.svg" alt="EigerX Logo" class="h-8 self-end" />

    <div class="flex -space-x-1 h-10">
      {#each USERS as { image, alt }, index}
        {@const zIndex = USERS.length - index}
        <div
          class={`rounded-full ${
            index === USERS.length - 1 ? '' : 'border-2 border-black-secondary -m-0.5'
          }`}
          style="z-index: {zIndex}"
        >
          <img
            src={image}
            alt={alt}
            class="w-10 h-10 rounded-full object-cover"
          />
        </div>
      {/each}
    </div>
  </div>

  <div class="w-full font-default">
    <h2 class="text-[31px] font-bold leading-[38px] text-white-primary opacity-70">
      Hello there
    </h2>
    <h3 class="text-[31px] font-bold leading-[38px] text-white-primary">
      How can we help?
    </h3>
  </div>
</header>
