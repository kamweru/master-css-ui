import "@master/css";
import "@master/normal.css";
import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.querySelector("body"),
});

export default app;
