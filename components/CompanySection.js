// frontend/components/CompanySection.js
import { getMediaUrl } from "../lib/api";

const DEFAULTS = {
  frameA: { top: 215, left: 20, width: 653, height: 690, zIndex: 2, objectFit: "cover" },
  frameB: { top: 215, left: 693, width: 653, height: 690, zIndex: 2, objectFit: "cover" },
};

function resolveSlot(slot, defaults) {
  if (!slot) return null;

  return {
    imageUrl: getMediaUrl(slot.image),
    top: slot.top ?? defaults.top,
    left: slot.left ?? defaults.left,
    width: slot.width ?? defaults.width,
    height: slot.height ?? defaults.height,
    zIndex: slot.zIndex ?? defaults.zIndex ?? 1,
    objectFit: slot.objectFit ?? defaults.objectFit ?? "cover",
  };
}

export default function CompanySection({ company }) {
  const title = company?.title || "";
  const subtitle = company?.subtitle || "";
  const tagA = company?.tagA;
  const tagB = company?.tagB;

  const a = resolveSlot(company?.frameA, DEFAULTS.frameA);
  const b = resolveSlot(company?.frameB, DEFAULTS.frameB);

  return (
    <section className="company-section">
      <div className="company-inner">
        <div className="company-title">
          <div className="figma-text">{title}</div>
          <div className="figma-text figma-text--secondary">{subtitle}</div>
        </div>

        {(tagA || tagB) ? (
          <div className="company-tags">
            {tagA ? <span className="tag">{tagA}</span> : null}
            {tagB ? <span className="tag">{tagB}</span> : null}
          </div>
        ) : null}

        {a?.imageUrl ? (
          <div
            className="frame-slot"
            style={{
              "--slot-top": `${a.top}px`,
              "--slot-left": `${a.left}px`,
              "--slot-w": `${a.width}px`,
              "--slot-h": `${a.height}px`,
              "--slot-z": a.zIndex,
              "--slot-fit": a.objectFit,
            }}
          >
            <img src={a.imageUrl} alt={`${title} frame A`} />
          </div>
        ) : null}

        {b?.imageUrl ? (
          <div
            className="frame-slot"
            style={{
              "--slot-top": `${b.top}px`,
              "--slot-left": `${b.left}px`,
              "--slot-w": `${b.width}px`,
              "--slot-h": `${b.height}px`,
              "--slot-z": b.zIndex,
              "--slot-fit": b.objectFit,
            }}
          >
            <img src={b.imageUrl} alt={`${title} frame B`} />
          </div>
        ) : null}
      </div>
    </section>
  );
}