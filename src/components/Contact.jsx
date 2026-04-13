export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container narrow">
        <h2 id="contact-title" className="section-title">
          Contact Me
        </h2>
        <p className="section-lead">ติดต่องานหรือสอบถามเพิ่มเติมได้ตามช่องทางด้านล่าง</p>
        <ul className="contact-list">
          <li>
            <span className="contact-label">โทรศัพท์</span>
            <span className="contact-value">080-894-2607</span>
          </li>
          <li>
            <span className="contact-label">อีเมล</span>
            <span className="contact-value">supercats5456@gmail.com</span>
          </li>
          <li>
            <span className="contact-label">ที่อยู่</span>
            <span className="contact-value">52/3 หมู่ 1 ตำบลปากเพรียว อำเภอเมือง จังหวัดสระบุรี 18000</span>
          </li>
          <li>
            <span className="contact-label">Instagram</span>
            <a href="https://www.instagram.com/hxm_t3r/" target="_blank" rel="noopener noreferrer">
              @hxm_t3r
            </a>
          </li>
          <li>
            <span className="contact-label">Discord</span>
            <span className="contact-value mono">.namoputtaya</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
