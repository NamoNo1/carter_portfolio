import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <div className="header-start">
          <a className="header-avatar" href="#top" aria-label="Carter — กลับขึ้นบน">
            <img
              className="header-avatar-img"
              src="/images/carter-profile.png"
              alt=""
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a className="logo" href="#top" aria-label="กลับขึ้นบน">
            <span aria-hidden="true">&lt;</span>dev<span aria-hidden="true">/&gt;</span> Carter
          </a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          aria-label="เปิดเมนู"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className="nav-toggle-bar"></span>
        </button>
        <nav className={`site-nav${navOpen ? " is-open" : ""}`} id="site-nav" aria-label="เมนูหลัก">
          <ul>
            <li>
              <a
                href="#about"
                onClick={() => setNavOpen(false)}
              >
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setNavOpen(false)}>
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setNavOpen(false)}>
                Project
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setNavOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
