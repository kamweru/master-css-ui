<script>
  import { border } from "./component.config";
  export let value = "",
    placeholder = "your text goes here";
</script>

<textarea
  class="outline:none resize:none font:gray-60::placeholder font:gray-40::placeholder@dark {border()} bg:white r:4 m:0 min-w:0 max-w:max p:8|12 b:gray-28@dark bg:gray-22@dark f:14 line-height:1.5 transition:all|300ms|ease-in-out w:6::scrollbar h:6::scrollbar rounded::scrollbar bg:fade-86::scrollbar-thumb
    bg:fade-76::scrollbar-thumb:hover
    bg:fade-66::scrollbar-thumb:active
    bg:gray-30::scrollbar-thumb@dark
    bg:gray-40::scrollbar-thumb:hover@dark
    bg:gray-50::scrollbar-thumb:active@dark
    bg:transparent::scrollbar-corner
    rounded::scrollbar-thumb"
  {placeholder}
  bind:value
  on:input
/>
