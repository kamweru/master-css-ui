<script>
  import { clickOutside } from "../utils";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  import { shadow } from "./component.config";
  export let open = false;
</script>

<div
  use:clickOutside={{
    enabled: open,
    cb: () => {
      open = !open;
    },
  }}
  class="rel"
>
  <dialog
    {open}
    class="{shadow()} w:224 r:6 mt:8>* mt:0>*:first translateY(-110%) bg:white"
  >
    <slot name="content">
      <div class="flex ai:start">
        <Icon iconName="info-outline" class="w:24 color:yellow-80" />
        <div class="pl:8">
          <h4>Delete the item</h4>
          <div>Are you sure to delete this item?</div>
          <div class="flex jc:end mr:8>* mr:0>*:last mt:8">
            <Button on:click={() => (open = !open)}>No</Button>
            <Button on:click={() => (open = !open)}>Yes</Button>
          </div>
        </div>
      </div>
    </slot>
  </dialog>
  <slot name="actionButton">
    <Button on:click={() => (open = !open)} slot="actionButton">
      PopConfirm button
    </Button>
  </slot>
</div>
