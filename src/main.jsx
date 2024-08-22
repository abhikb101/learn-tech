import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HabbitTracker from "./App.jsx";
import "./global.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HabbitTracker />
  </StrictMode>
);
