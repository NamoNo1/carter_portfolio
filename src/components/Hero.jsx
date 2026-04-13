export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">สวัสดีครับ ผมคือ</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-name">Carter</span>
            <span className="hero-role">
              <span className="hero-role-text">Full Stack · FiveM Developer</span>
            </span>
          </h1>
          <p className="hero-tagline">
            ชื่อเล่น <strong>เตอร์</strong> · อายุ 18 ปี · เกิด 11 พ.ย. 2550
          </p>
          <p className="hero-lead">
            FiveM Developer
            มีความเชี่ยวชาญในการพัฒนาระบบเซิร์ฟเวอร์ FiveM มีประสบการณ์การทำงานร่วมกับทีมอย่างเป็นระบบ
            สามารถรับบรีฟและดำเนินการตามแผนงาน จาก Project Manager ได้อย่างแม่นยำ
            มุ่งเน้นการเขียนโค้ดที่มีประสิทธิภาพการทำงานของระบบให้เสถียรที่สุด
            และพร้อมที่จะเรียนรู้จากเพื่อนร่วมทีมเพื่อพัฒนาทักษะให้กับตัวเอง
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              ดูผลงาน
            </a>
            <a className="btn btn-ghost" href="#contact">
              ติดต่อ
            </a>
            <a
              className="btn btn-link"
              href="https://www.instagram.com/hxm_t3r/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="hero-profile">
            <img
              className="hero-profile-img hero-profile-img--main"
              src="/images/fivem-proflie.png"
              width="512"
              height="512"
              alt="Carter — อวตาร์ตัวละคร FiveM ผมสีเขียวนีออน เสื้อเบลเซอร์ดำ"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
          <div className="code-window" aria-hidden="true">
            <div className="code-window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre
              className="code-snippet"
              dangerouslySetInnerHTML={{
                __html: `<code><span class="kw">local</span> <span class="id">stack</span> = {
  <span class="key">fivem</span> = <span class="str">'4y+'</span>,
  <span class="key">web</span> = { <span class="str">'Vue'</span>, <span class="str">'React'</span> },
  <span class="key">db</span> = { <span class="str">'MySQL'</span>, <span class="str">'MongoDB'</span> },
}</code>`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
