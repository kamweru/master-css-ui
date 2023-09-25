<script>
  export let checked = false;
</script>

<div class="grid-cols:3">
  <label class="grid-col-span:2 cursor:pointer user-select:none flex ai:center">
    <input
      type="checkbox"
      class="appearance:none w:16 h:16 b:2|solid|blue-70 r:5 bg:transparent rel mr:10 cursor:pointer content:'':before bg:blue-70:before block:before abs:before top:1:before left:1:before translate(-50%|-50%):before scale(0):before w:10:before h:10:before r:3:before transition:all|0.3s|ease-in-out:before translate(-50%|-50%):checked:before scale(1):checked:before"
      bind:checked
    />
    <slot>
      <span>{checked ? "checked" : "not checked"}</span>
    </slot>
  </label>
</div>
