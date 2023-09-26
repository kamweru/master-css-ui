<script>
  import Button from "./ui/Button.svelte";
  import Input from "./ui/Input.svelte";
  import Column from "./ui/Column.svelte";
  import Select from "./ui/Select.svelte";
  import Range from "./ui/Range.svelte";
  import Dropdown from "./ui/Dropdown.svelte";
  import Checkbox from "./ui/Checkbox.svelte";
  import Textarea from "./ui/Textarea.svelte";
  import Toast from "./ui/Toast.svelte";
  import Divider from "./ui/Divider.svelte";
  import Collapse from "./ui/Collapse.svelte";
  import Switch from "./ui/Switch.svelte";
  import PopConfirm from "./ui/PopConfirm.svelte";
  const intents = [undefined, "primary", "outline", "text"],
    sizes = [undefined, "md", "sm", "xs"];
  let intent = "default",
    size = "md",
    selected = 1,
    open = true;
</script>

<main class="w:xs mx:auto mt:8>* mt:0>*:first color:gray-28">
  {#each [...Array(4).keys()] as cols}
    <Column columns={cols + 1} />
  {/each}
  <div class="rel w:100% h:60"><Toast {open} /></div>

  <Divider />

  <Collapse />
  <div class="flex flex-wrap:wrap gap:8">
    <div class="w:200">
      <Textarea />
    </div>
    <div class="w:200">
      <Checkbox />
      <Switch />
    </div>
    <div class="w:200">
      <PopConfirm />
    </div>
    <div class="w:200">
      <Dropdown />
    </div>

    <div class="w:200">
      <Range />
    </div>
    <div class="w:200">
      <Select bind:value={selected}>
        {#each [...Array(4).keys()] as cols}
          <option value={cols}>item {cols}</option>
        {/each}
      </Select>
    </div>

    <div class="w:200"><Input /></div>
    <div class="w:200">
      <Input {...intent && { intent }} {...size && { size }} />
    </div>
    {#each sizes as size}
      {#each intents as intent}
        <div>
          <Button {...intent && { intent }} {...size && { size }}>
            {intent || "default"} button
          </Button>
        </div>
      {/each}
    {/each}
  </div>
</main>
