import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <Hero/>
    <Technologies/>
  </StrictMode>,
);
