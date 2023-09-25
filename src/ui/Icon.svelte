<script>
  import { iconDAttributes } from "./component.config";
  export let iconName = "cursor";
  let d = iconDAttributes[iconName];
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  class="w:20 h:20"
  {...$$props}
>
  <path fill="currentColor" {d} />
</svg>
