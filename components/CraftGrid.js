// frontend/components/CraftGrid.js
import { getMediaUrl } from "../lib/api";

export default function CraftGrid({ items = [], settings }) {
  const title = (settings?.craftTitle || "").trim();
  const subtitle = (settings?.craftSubtitle || "").trim();

  if (!items.length) return null;

  return (
    <section className="craft" id="info">
      <div className="canvas craft-layer">
        <div className="craft-meta">
          <div className="figma-text">{title}</div>
          <div className="figma-text figma-text--secondary">{subtitle}</div>
        </div>

        <div className="craft-grid">
          {items.slice(0, 6).map((it) => {
            const url = getMediaUrl(it.image);
            return (
              <div key={it.id || it.documentId} className="craft-cell">
                {url ? <img src={url} alt="" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}