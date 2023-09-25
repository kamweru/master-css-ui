<script>
  import { cv } from "../utils";
  import Icon from "./Icon.svelte";
  import { shadow } from "./component.config";
  export let open = false,
    intent = "warning",
    iconName = "";
  let _iconName = iconName
    ? iconName
    : intent === "success"
    ? "success-circle-outline"
    : intent === "info"
    ? "info-outline"
    : intent === "warning"
    ? "alert-warning-outline"
    : intent === "error"
    ? "error-outline"
    : "";
  const toast = cv(`z:2 w:100% ${shadow()} r:4 p:8`, {
    intent: {
      success: "bg:beryl-88 color:beryl-30",
      info: "bg:cyan-88 color:cyan-30",
      warning: "bg:yellow-88 color:yellow-30",
      error: "bg:red-86 color:red-30",
    },
    default: { intent: "warning" },
  });
</script>

<dialog {open} class={toast({ intent })}>
  <div class="flex ai:center">
    <div class="flex jc:center px:4">
      <Icon iconName={_iconName} />
    </div>
    <div class="flex flex:col flex:1 ml:8">
      <slot name="message">
        <div>
          <div class="f:semibold capitalize">{intent}</div>
          <div>You can set up a toast message here</div>
        </div>
      </slot>
    </div>
    <div class="flex jc:center px:4">
      <Icon iconName="close" />
    </div>
  </div>
</dialog>
