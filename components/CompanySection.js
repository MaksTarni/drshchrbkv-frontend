import React from "react";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.drshchrbkv.com";

function getMediaUrl(media) {
  const url = media?.url;
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function getCompanyClass(company) {
  const v = (company?.variant || "emex").toLowerCase();
  return `company-${v}`;
}

export default function CompanySection({ company }) {
  if (!company) return null;

  const title = company?.title || "";
  const subtitle = company?.subtitle || "";
  const tagA = company?.tagA || "";
  const tagB = company?.tagB || "";

  const frameAUrl = getMediaUrl(company?.frameA?.image);
  const frameBUrl = getMediaUrl(company?.frameB?.image);

  const variant = (company?.variant || "emex").toLowerCase();
  const cls = getCompanyClass(company);

  return (
    <section className={cls} aria-label={title}>
      {/* ===== ROW 1 ===== */}
      <div className="company-title-wrapper">
        {subtitle && (
          <div className="company-subtitle">
            <div className="figma-text figma-text--secondary">
              {subtitle}
            </div>
          </div>
        )}

        {title && (
          <div className="company-title">
            <div className="figma-header">{title}</div>
          </div>
        )}
      </div>

      {/* ===== LINE UNDER TITLE ===== */}
      {variant === "emex" && <div className="company-line-top" />}

      {/* ===== ROW 2 LEFT ===== */}
      {tagA && (
        <div className="company-tag-a">
          <span className="tag">{tagA}</span>
        </div>
      )}

      {frameAUrl && (
        <div className="company-media company-media--emex-a">
          <img src={frameAUrl} alt={`${title} frame A`} loading="lazy" />
        </div>
      )}

      {/* ===== ROW 3 LEFT LINE ===== */}
      {variant === "emex" && <div className="company-line-middle" />}

      {tagB && (
        <div className="company-tag-b">
          <span className="tag">{tagB}</span>
        </div>
      )}

      {/* ===== RIGHT BIG FRAME (2x2) ===== */}
      {frameBUrl && (
        <div className="company-media company-media--emex-b">
          <img src={frameBUrl} alt={`${title} frame B`} loading="lazy" />
        </div>
      )}
    </section>
  );
}