const icon = (src, alt = "") => (
  <img className="skill-icon-img" src={src} alt={alt} width="22" height="22" loading="lazy" decoding="async" />
);

export default function Skills() {
  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">
          Tech Stack
        </h2>
        <p className="section-lead narrow-text">Skills และ Tools ที่ผมใช้ในการพัฒนา</p>
        <div className="skill-categories" aria-label="Tech stack แยกตามหมวด">
          <div className="skill-category-col">
            <div className="skill-category">
              <h3 className="skill-category-title">Language</h3>
              <ul className="skill-category-list">
                <li>
                  {icon("https://cdn.simpleicons.org/lua/2C2D72")}
                  <span>Lua</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/html5/E34F26")}
                  <span>HTML</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/css/1572B6")}
                  <span>CSS</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/javascript/F7DF1E")}
                  <span>JavaScript</span>
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Framework</h3>
              <ul className="skill-category-list">
                <li>
                  {icon("https://cdn.simpleicons.org/vuedotjs/4FC08D")}
                  <span>Vue.js</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/react/61DAFB")}
                  <span>React</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/vite/646CFF")}
                  <span>Vite</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/tailwindcss/06B6D4")}
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="skill-category-col">
            <div className="skill-category">
              <h3 className="skill-category-title">Platform</h3>
              <ul className="skill-category-list">
                <li>
                  <img
                    className="skill-icon-img skill-icon-img--fivem"
                    src="/images/fivem-stack-icon.png"
                    alt=""
                    width="22"
                    height="22"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>FiveM Native</span>
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Database</h3>
              <ul className="skill-category-list">
                <li>
                  {icon("https://cdn.simpleicons.org/mysql/4479A1")}
                  <span>MySQL</span>
                </li>
                <li>
                  {icon("https://cdn.simpleicons.org/mongodb/47A248")}
                  <span>MongoDB</span>
                </li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Design</h3>
              <ul className="skill-category-list">
                <li>
                  {icon("https://cdn.simpleicons.org/figma/F24E1E")}
                  <span>Figma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
