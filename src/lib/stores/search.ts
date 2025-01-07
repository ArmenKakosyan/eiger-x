import { writable, derived } from "svelte/store";

import HELP_ITEMS from "$lib/constants/helpItems";

export const items = writable(HELP_ITEMS);

export const searchQuery = writable("");

export const filteredItems = derived(
  [items, searchQuery],
  ([$items, $searchQuery]) =>
    $items.filter(item =>
      item.toLowerCase().includes($searchQuery.toLowerCase())
    )
);
