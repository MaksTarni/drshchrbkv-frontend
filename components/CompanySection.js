// frontend/components/CompanySection.js
import { getMediaUrl } from "../lib/api";

function getCompanyClass(company) {
  const v = (company?.variant || "").toLowerCase();
  if (v === "emex") return "company-emex";
  if (v === "sberbank") return "company-sberbank";
  if (v === "cloudpayments") return "company-cloudpayments";
  return "company-emex";
}

export default function CompanySection({ company }) {
  if (!company) return null;

  const title = company?.title || "";
  const subtitle = company?.subtitle || "";
  const tagA = company?.tagA;
  const tagB = company?.tagB;

  const frameAUrl = getMediaUrl(company?.frameA?.image);
  const frameBUrl = getMediaUrl(company?.frameB?.image);

  const variant = (company?.variant || "").toLowerCase();
  const cls = getCompanyClass(company);

  const isEmex = variant === "emex";

  return (
    <section className={cls} aria-label={title || "company"}>
      {/* row 1: title left, subtitle right */}
      <div className="company-title">
        <div className="figma-header">{title}</div>
      </div>

      <div className="company-subtitle">
        <div className="figma-text figma-text--secondary">{subtitle}</div>
      </div>

      {/* row 2: tags */}
      {(tagA || tagB) ? (
        <div className="company-tags">
          {tagA ? <span className="tag">{tagA}</span> : null}
          {tagB ? <span className="tag">{tagB}</span> : null}
        </div>
      ) : (
        <div />
      )}

      {/* MEDIA */}
      {isEmex ? (
        <>
          {/* emex: frameA -> col 2, row 3 (653x690 ячейка, внутри паддинги) */}
          {frameAUrl ? (
            <div
              className="company-media company-media--a"
              style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}
            >
              <img src={frameAUrl} alt={`${title} frame A`} />
            </div>
          ) : (
            <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }} />
          )}

          {/* emex: frameB -> cols 3-4, rows 3-4 (большой блок) */}
          {frameBUrl ? (
            <div
              className="company-media company-media--b"
              style={{ gridColumn: "3 / 5", gridRow: "3 / 5" }}
            >
              <img src={frameBUrl} alt={`${title} frame B`} />
            </div>
          ) : (
            <div style={{ gridColumn: "3 / 5", gridRow: "3 / 5" }} />
          )}
        </>
      ) : (
        <>
          {/* default (пока): 2 большие карточки 50/50 */}
          {frameAUrl ? (
            <div className="company-media" style={{ gridColumn: "1 / 3" }}>
              <img src={frameAUrl} alt={`${title} frame A`} />
            </div>
          ) : (
            <div style={{ gridColumn: "1 / 3" }} />
          )}

          {frameBUrl ? (
            <div className="company-media" style={{ gridColumn: "3 / 5" }}>
              <img src={frameBUrl} alt={`${title} frame B`} />
            </div>
          ) : (
            <div style={{ gridColumn: "3 / 5" }} />
          )}
        </>
      )}
    </section>
  );
}
