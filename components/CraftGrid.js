// frontend/components/CraftGrid.js
import { getMediaUrl } from "../lib/api";

export default function CraftGrid({ items = [] }) {
  const list = [...(items || [])]
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .slice(0, 6);

  return (
    <section className="craft">
      <div className="craft-inner">
        <div className="projects-meta">
          <div className="figma-text">craft</div>
          <div className="figma-text figma-text--secondary">visual explorations</div>
        </div>

        <div className="craft-grid">
          {list.map((it) => {
            const src = getMediaUrl(it?.image);
            return (
              <div key={it.id} className="craft-cell">
                {src ? <img src={src} alt="" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}