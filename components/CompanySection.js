// components/CompanySection.js
import React from "react";

// helper to build absolute url if Strapi gives relative
function getMediaUrl(media) {
  if (!media) return null;
  const url = media?.url || media?.data?.attributes?.url;
  if (!url) return null;
  if (url.startsWith("http")) return url;
  const base = process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.drshchrbkv.com";
  return `${base}${url}`;
}

function getCompanyClass(company) {
  const v = company?.variant || "emex";
  return `company-${v}`;
}

export default function CompanySection({ company }) {
  if (!company) return null;

  const { title, subtitle, tagA, tagB } = company;

  const frameAUrl = getMediaUrl(company?.frameA?.image);
  const frameBUrl = getMediaUrl(company?.frameB?.image);

  const cls = getCompanyClass(company);
  const isEmex = cls === "company-emex";

  return (
    <section className={cls} aria-label={title}>
      <div className="company-title">
        <div className="figma-header">{title}</div>
      </div>

      <div className="company-subtitle">
        <div className="figma-text figma-text--secondary">{subtitle}</div>
      </div>

      {/* row 2: tags (как pills) */}
      {tagA || tagB ? (
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
          {/* Empty cell (col 1) on media row to match Figma grid */}
          <div className="company-emex-spacer" aria-hidden="true" />

          {/* Small card (col 2, row 3) */}
          {frameAUrl ? (
            <div className="company-media company-media--emex-a">
              <img src={frameAUrl} alt={`${title} frame A`} />
            </div>
          ) : (
            <div className="company-media company-media--emex-a" />
          )}

          {/* Large image (cols 3-4, rows 3-4) */}
          {frameBUrl ? (
            <div className="company-media company-media--emex-b">
              <img src={frameBUrl} alt={`${title} frame B`} />
            </div>
          ) : (
            <div className="company-media company-media--emex-b" />
          )}

          {/* Bottom-left empty cell (cols 1-2, row 4) */}
          <div className="company-emex-spacer company-emex-spacer--wide" aria-hidden="true" />
        </>
      ) : (
        <>
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
