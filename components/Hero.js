// frontend/components/Hero.js
import Link from "next/link";

function blocksToPlainText(blocks) {
  // Strapi Blocks -> plain text (аккуратно, без падений)
  if (!blocks) return "";
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";

  const out = [];
  for (const b of blocks) {
    // Strapi blocks обычно: { type: 'paragraph', children:[{text:''}] }
    const children = b?.children;
    if (Array.isArray(children)) {
      out.push(children.map((c) => c?.text || "").join(""));
    } else if (typeof b?.text === "string") {
      out.push(b.text);
    }
  }
  return out.join("\n").trim();
}

export default function Hero({ navLeft, navRight, title, descriptionBlocks, highlightColor }) {
  const highlightText = blocksToPlainText(descriptionBlocks);

  return (
    <section className="hero" id="index" style={{ "--hero-highlight": highlightColor || "#FDFF45" }}>
      {/* nav */}
      <div className="header">
        <div className="frame nav">
          <Link className="nav-link figma-text" href={navLeft?.href || "#index"}>
            {navLeft?.label || "index"}
          </Link>

          <Link className="nav-link figma-text" href={navRight?.href || "#info"}>
            {navRight?.label || "info"}
          </Link>
        </div>
      </div>

      {/* top text */}
      <div className="hero-intro">
        <h1 className="figma-header">{title || ""}</h1>
      </div>

      {/* yellow highlight */}
      <div className="hero-highlight">
        <div className="frame hero-highlight-row">
          <div className="hero-highlight-inner">
            <h2 className="figma-header">{highlightText || ""}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}