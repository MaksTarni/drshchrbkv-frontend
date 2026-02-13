// frontend/components/Hero.js
import Header from "./Header";

function blocksToPlainText(blocks) {
  if (!blocks) return "";
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";

  const out = [];
  for (const b of blocks) {
    const children = b?.children;
    if (Array.isArray(children)) {
      out.push(children.map((c) => c?.text || "").join(""));
    }
  }
  return out.join("\n").trim();
}

export default function Hero({ hero, accent, settings }) {
  const title = hero?.title || "";
  const highlightText = blocksToPlainText(hero?.description);
  const highlightColor = hero?.highlightColor || accent || "#FDFF45";

  return (
    <section
      className="hero section"
      id="index"
      style={{ "--color-highlight": highlightColor }}
    >
      <Header settings={settings} />
      <div className="hero-grid">
        {/* ряд 1: заголовок */}
        <div className="hero-title-row">
          <div className="hero-title">
            <h1 className="figma-header">{title}</h1>
          </div>
          <div className="hero-empty" />
        </div>

        {/* ряд 2: жёлтый блок (50%) */}
        <div className="hero-highlight-row">
          <div className="hero-highlight-col hero-highlight-col--left">
            <div className="hero-highlight-inner">
              <h2 className="figma-header">{highlightText}</h2>
            </div>
          </div>
          <div className="hero-highlight-col hero-highlight-col--right" />
        </div>
      </div>
    </section>
  );
}