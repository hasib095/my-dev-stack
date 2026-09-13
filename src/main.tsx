import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Suspense
      fallback={
        <section
          className="flex min-h-80 items-center justify-center bg-white"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span
              className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-pink-500"
              aria-hidden="true"
            />
            Loading technologies...
          </div>
        </section>
      }
    >
      <Technologies />
    </Suspense>
    <Footer />
    <ToastContainer position="bottom-right" autoClose={2500} />
  </StrictMode>,
);
