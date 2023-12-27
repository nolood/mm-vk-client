import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { initVK } from "./app/vk/vk";

initVK();

const root = document.querySelector("#root");

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
