// frontend/components/Hero.js
function blocksToPlainText(blocks) {
  if (!blocks) return "";
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";

  const out = [];
  for (const b of blocks) {
    const children = b?.children;
    if (Array.isArray(children)) {
      out.push(children.map((c) => c?.text || "").join(""));
    } else if (typeof b?.text === "string") {
      out.push(b.text);
    }
  }
  return out.join("\n").trim();
}

export default function Hero({ hero, accent }) {
  const title = hero?.title || "";
  const highlightText = blocksToPlainText(hero?.description);
  const highlightColor = hero?.highlightColor || accent || "#FDFF45";

  return (
    <section className="hero section" id="index" style={{ "--color-highlight": highlightColor }}>
      <div className="frame">
        <div className="hero-intro">
          <h1 className="figma-header">{title}</h1>
        </div>
      </div>

      <div className="hero-highlight">
        <div className="frame">
          <div className="hero-highlight-inner">
            <h2 className="figma-header">{highlightText}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}