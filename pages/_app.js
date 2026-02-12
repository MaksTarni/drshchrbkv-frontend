// frontend/pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";

function setPngScale() {
  const DESIGN_W = 1366;  // из Figma
  const INDENT = 20;      // padding от края экрана

  const vw = window.innerWidth;
  const available = Math.max(320, vw - INDENT * 2);

  const scale = available / DESIGN_W;
  document.documentElement.style.setProperty("--png-scale", String(scale));
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setPngScale();
    window.addEventListener("resize", setPngScale);
    return () => window.removeEventListener("resize", setPngScale);
  }, []);

  return <Component {...pageProps} />;
}
