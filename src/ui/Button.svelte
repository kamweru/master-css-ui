<script>
  import { cv } from "../utils/";
  import { border } from "./component.config";
  const btn = cv("r:6 transition:all|.2s|cubic-bezier(.645,.045,.355,1)", {
    intent: {
      primary:
        "color:white bg:indigo-60 bg:indigo-64:hover bg:indigo-68:active outline:indigo-80|2|solid:focus",
      outline: `${border()} color:indigo-60:hover`,
      text: "bg:gray-90:hover bg:gray-22:hover@dark",
    },
    size: {
      xs: "p:4|8",
      sm: "text:14 p:5|15",
      md: "text:16 p:8|18",
    },
    default: {
      intent: "primary",
      size: "sm",
    },
  });
  export let intent = "primary",
    size = "sm";
</script>

<button class={btn({ intent, size, class: $$props.class })} on:click>
  <slot>button</slot>
</button>
