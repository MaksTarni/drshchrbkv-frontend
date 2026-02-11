// frontend/components/Hero.js
import { useEffect, useMemo, useState } from "react";

function pickBreakpoint(w) {
  if (w <= 640) return "mobile";
  if (w <= 1024) return "tablet";
  return "desktop";
}

function blocksToText(blocks) {
  // Strapi blocks -> plain text (минимально, чтобы “1 в 1” по переносу дальше править стилями)
  if (!Array.isArray(blocks)) return "";
  const walk = (node) => {
    if (!node) return "";
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(walk).join("");
    if (node.type === "text") return node.text || "";
    if (node.children) return walk(node.children);
    return "";
  };
  return blocks.map(walk).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export default function Hero({ heroes = [], settings }) {
  const [bp, setBp] = useState("desktop");

  useEffect(() => {
    const apply = () => setBp(pickBreakpoint(window.innerWidth));
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const hero = useMemo(() => {
    const byBp = heroes.find((h) => h?.breakpoint === bp);
    return byBp || heroes.find((h) => h?.breakpoint === "desktop") || heroes[0] || null;
  }, [heroes, bp]);

  // тексты: верхний — из hero.title (string)
  // жёлтый — из hero.description (blocks)
  const introText = hero?.title || settings?.metaTitle || "";
  const highlightText = blocksToText(hero?.description) || "";

  // значения из Strapi (если нет — дефолты desktop)
  const vars = {
    "--hero-height": `${hero?.pageHeight ?? 768}px`,
    "--hero-text-width": `${hero?.textWidth ?? 653}px`,
    "--hero-intro-top": `${hero?.introTop ?? 60}px`,
    "--hero-highlight-top": `${hero?.highlightTop ?? 414}px`,
    "--hero-highlight-height": `${hero?.highlightHeight ?? 334}px`,
    "--hero-highlight-padding-y": `${hero?.highlightPaddingY ?? 26}px`,
    "--hero-pad": `${hero?.pagePadding ?? 20}px`,
    "--hero-highlight": hero?.highlightColor || settings?.accentColor || "#FDFF45",

    // (не трогаю “глобальный шрифт”, но hero-типографику можно править тут)
    "--hero-h-size": `${hero?.headerFontSize ?? 50}px`,
    "--hero-h-line": `${hero?.headerLineHeight ?? 48}px`,
    "--hero-h-letter": `${hero?.headerLetterSpacing ?? -1}px`,
  };

  return (
    <section className="hero" style={vars}>
      <div className="hero-layer canvas">
        <div className="hero-intro">
          <h1 className="hero-h">{introText}</h1>
        </div>

        <div className="hero-highlight">
          <div className="hero-highlight-row frame">
            <div className="hero-highlight-inner">
              <p className="hero-h">{highlightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}