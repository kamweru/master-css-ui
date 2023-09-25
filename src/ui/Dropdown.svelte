<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  import { clickOutside } from "../utils";
  import { shadow } from "./component.config";
  export let open = false;
</script>

<div
  class="rel"
  use:clickOutside={{
    enabled: open,
    cb: () => {
      open = !open;
    },
  }}
>
  <slot>
    <Button
      intent="outline"
      on:click={() => (open = !open)}
      slot="actionButton"
    >
      Dropdown button
    </Button>
  </slot>
  <dialog class="bg:white r:4 w:224 z:1 mt:4 {shadow()} p:2" {open}>
    <slot name="dropdown">
      {#each [...Array(3).keys()] as item}
        <div class="block py:4 pl:8 bg:gray-88:hover r:3 cursor:pointer">
          <span>dropdown item {item}</span>
        </div>
      {/each}
    </slot>
  </dialog>
</div>
