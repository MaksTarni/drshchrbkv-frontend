// components/Footer.js
export default function Footer({ settings }) {
  const email = settings?.contactEmail || "";
  const telegram = settings?.contactTelegramLabel || "";

  return (
    <footer className="footer">
      <div className="frame footer-layer">
        <div className="footer-links">
          <div className="figma-text">{email}</div>
          <div className="figma-text">{telegram}</div>
        </div>
      </div>
    </footer>
  );
}