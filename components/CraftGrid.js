// frontend/components/CraftGrid.js
import { getMediaUrl } from "../lib/api";

export default function CraftGrid({ items = [] }) {
  const list = [...(items || [])]
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .slice(0, 6);

  return (
    <section className="craft-wrap" aria-label="craft">
      <div className="craft-meta">
        <div className="figma-text">craft</div>
        <div className="figma-text figma-text--secondary">always</div>
      </div>

      {list.map((it) => {
        const src = getMediaUrl(it?.image);
        return (
          <div key={it.id || it.documentId} className="craft-cell">
            {src ? <img src={src} alt={it?.alt || ""} /> : null}
          </div>
        );
      })}
    </section>
  );
}