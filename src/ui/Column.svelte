<script>
  export let columns = 3;
  let bg = [],
    colorNumber = 88;
  for (let index = 0; index < columns; index++) {
    bg.push(colorNumber);
    colorNumber -= 2;
  }
</script>

<div class="flex flex-wrap:wrap">
  {#each [...Array(columns).keys()] as col}
    <div
      class="bg:indigo-{bg[
        col
      ]} p:16|0 flex-basis:calc(100%/{columns}) text:center"
    >
      col {col + 1}
    </div>
  {/each}
</div>
