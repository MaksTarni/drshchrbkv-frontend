// frontend/components/Header.js
export default function Header({ settings }) {
  const leftLabel = settings?.navLeftLabel || "index";
  const rightLabel = settings?.navRightLabel || "info";

  const leftHref = settings?.navLeftHref || "#index";
  const rightHref = settings?.navRightHref || "#info";

  return (
    <header className="header">
      <div className="frame">
        <nav className="nav">
          <a className="nav-link figma-text" href={leftHref}>
            {leftLabel}
          </a>
          <a className="nav-link figma-text" href={rightHref}>
            {rightLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}