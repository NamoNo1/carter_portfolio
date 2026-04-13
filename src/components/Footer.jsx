export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} Carter (เตอร์) · Portfolio
        </p>
        <button type="button" className="to-top" aria-label="กลับขึ้นบน" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      </div>
    </footer>
  );
}
