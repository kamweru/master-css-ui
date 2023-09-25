<script>
  import { cv } from "../utils";
  import { border } from "./component.config";
  export let value = null,
    min = null,
    max = null,
    step = null,
    required = true,
    placeholder = null,
    intent = "default",
    size = "sm";
  const classes = cv("outline:none", {
    intent: {
      default: `w:100% font:gray-60::placeholder font:gray-40::placeholder@dark ${border()} bg:white r:4 m:0 min-w:0  b:gray-28@dark bg:gray-22@dark f:14 line-height:1.5 transition:all|300ms|ease-in-out`,
    },
    size: {
      sm: "p:8|12",
      md: "p:10|15",
    },
    default: {
      intent: "default",
      size: "sm",
    },
  });
</script>

<input
  class={classes({ intent, size, class: $$props.class })}
  type="text"
  bind:value
  {placeholder}
  {min}
  {max}
  {step}
  {required}
  on:focus
  on:blur
  on:input
  on:change
  on:keypress
  on:keydown
  on:keyup
  {...$$restProps}
/>
