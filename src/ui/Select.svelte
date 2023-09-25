<script>
  export let value = null;
  import { border } from "./component.config";
  // let { border } = color;
</script>

<select
  class="appearance:none outline:none block {border()} w:100% r:4 f:14 p:8|12 capitalize transition:all|300ms|ease-in-out bg:gray-98 b:gray-28@dark bg:gray-22@dark color:gray-50"
  bind:value
  on:change
  {...$$restProps}
>
  <slot />
</select>
