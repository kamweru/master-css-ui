<script>
  let max = 100,
    min = 0,
    value = 10,
    percentProgress = 0;
  $: value, (percentProgress = (value / max) * 100);
</script>

<input
  type="range"
  {min}
  {max}
  bind:value
  on:change
  class="appearance:none w:100% h:.5em bg:gray-86 r:5 mx:.05em background-size:{percentProgress}%|100% bg:linear-gradient(red-70,red-70) bg:no-repeat appearance:none::-webkit-slider-thumb w:1em::-webkit-slider-thumb h:1em::-webkit-slider-thumb r:50%::-webkit-slider-thumb cursor:pointer::-webkit-slider-thumb opacity:0::-webkit-slider-thumb transition:all|300ms::-webkit-slider-thumb bg:red-70::-webkit-slider-thumb appearance:none::-ms-thumb w:1em::-ms-thumb h:1em::-ms-thumb r:50%::-ms-thumb cursor:pointer::-ms-thumb opacity:0::-ms-thumb transition:all|300ms::-ms-thumb bg:red-70::-ms-thumb appearance:none::-moz-range-thumb w:1em::-moz-range-thumb h:1em::-moz-range-thumb r:50%::-moz-range-thumb cursor:pointer::-moz-range-thumb opacity:0::-moz-range-thumb transition:all|300ms::-moz-range-thumb bg:red-70::-moz-range-thumb bg:red-66::-webkit-slider-thumb:hover opacity:1:hover::-webkit-slider-thumb bg:red-66::-moz-range-thumb:hover opacity:1:hover::-moz-range-thumb bg:red-66::-ms-thumb:hover opacity:1:hover::-ms-thumb appearance:none::-webkit-slider-runnable-track box-shadow:none::-webkit-slider-runnable-track border:none::-webkit-slider-runnable-track bg:transparent::-webkit-slider-runnable-track appearance:none::-moz-range-track box-shadow:none::-moz-range-track border:none::-moz-range-track bg:transparent::-moz-range-track appearance:none::-ms-track box-shadow:none::-ms-track border:none::-ms-track bg:transparent::-ms-track"
/>
