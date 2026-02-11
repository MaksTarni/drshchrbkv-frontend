// frontend/components/Hero.js
import { useEffect, useMemo, useState } from "react";
import { blocksToText } from "../lib/api";

function normalizeLocal(h) {
  if (!h) return null;
  return h.attributes ? { id: h.id, ...h.attributes } : h;
}

function useIsMobile(breakpoint = 768) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return mounted ? isMobile : false; // без hydration mismatch
}

export default function Hero({ heroes = [], settings }) {
  const isMobile = useIsMobile(768);

  const list = useMemo(() => (heroes || []).map(normalizeLocal).filter(Boolean), [heroes]);

  const hero = useMemo(() => {
    const byDevice = list.find((h) => !!h.is_mobile === !!isMobile);
    return byDevice || list.find((h) => h.is_mobile === false) || list[0] || null;
  }, [list, isMobile]);

  if (!hero) return null;

  const intro = hero.title || "";
  const highlight = blocksToText(hero.description) || "";

  const accent = hero.highlightColor || settings?.accentColor || "#FDFF45";

  const styleVars = {
    "--hero-height": `${Number(hero.pageHeight ?? 768)}px`,
    "--hero-text-width": `${Number(hero.textWidth ?? 653)}px`,
    "--hero-intro-top": `${Number(hero.introTop ?? 60)}px`,
    "--hero-highlight-top": `${Number(hero.highlightTop ?? 414)}px`,
    "--hero-highlight-height": `${Number(hero.highlightHeight ?? 334)}px`,
    "--hero-highlight-padding-y": `${Number(hero.highlightPaddingY ?? 26)}px`,
    "--hero-highlight": accent,
  };

  return (
    <section id="index" className="hero" style={styleVars}>
      <div className="frame hero-layer">
        <div className="hero-intro figma-header">{intro}</div>

        <div className="hero-highlight">
          <div className="frame hero-highlight-row">
            <div className="hero-highlight-inner figma-header">{highlight}</div>
          </div>
        </div>
      </div>
    </section>
  );
}