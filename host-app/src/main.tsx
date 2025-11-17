import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import VueApp from "./components/VueApp.tsx";
import ReactApp from "remote-react/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <VueApp />
    <ReactApp />
  </StrictMode>
);
