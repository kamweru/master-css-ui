<script>
  import Button from "./Button.svelte";
  import Divider from "./Divider.svelte";
  import Icon from "./Icon.svelte";
  import { border } from "./component.config";
  let open = false,
    accordionContent,
    accordionContentHeight = 0,
    toggleOpen = () => {
      if (accordionContent) {
        open = !open;
        if (accordionContentHeight) {
          accordionContentHeight = 0;
        } else {
          accordionContentHeight = accordionContent.scrollHeight;
        }
      }
    };
</script>

<div class="{border({ intent: 'plain' })} r:4">
  <Button class="w:100% flex ai:center p:6" on:click={toggleOpen}>
    <span class="mr:4">
      <Icon
        iconName="chevron-right"
        class="w:20 {open ? 'rotate(90)' : ''} transition:all|100ms|ease-in-out"
      />
    </span>
    <slot name="header">
      <div>This is panel header</div>
    </slot>
  </Button>
  <div
    class="max-h:{accordionContentHeight} transition:max-height|300ms|ease-in-out overflow:hidden"
    bind:this={accordionContent}
  >
    <Divider />
    <div class="p:8">
      <slot name="body">
        <p class="font:14 my:0">
          Owls are magnificent creatures known for their distinctive appearance
          and intriguing behaviors. Their enigmatic presence and captivating
          beauty make them fascinating companions for those who appreciate the
          mystical allure of these majestic birds.
        </p>
      </slot>
    </div>
  </div>
</div>
