<script>
  import Button from "./Button.svelte";
  import { shadow } from "./component.config";
</script>

<div class="rel visibility:visible:hover>button+div">
  <slot>
    <Button intent="outline" slot="actionButton">Dropdown button</Button>
  </slot>
  <div
    class="abs bg:white r:4 w:224 z:1 mt:1 {shadow({
      intent: 'dropdown',
    })} p:2 transition:all|.3s|cubic-bezier(.645,.045,.355,1) visibility:hidden"
  >
    <slot name="dropdown">
      {#each [...Array(3).keys()] as item}
        <div class="block py:4 pl:8 bg:gray-88:hover r:3 cursor:pointer">
          <span>dropdown item {item}</span>
        </div>
      {/each}
    </slot>
  </div>
</div>
