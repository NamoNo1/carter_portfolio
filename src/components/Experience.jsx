export default function Experience() {
  return (
    <section className="section section-alt" id="experience" aria-labelledby="exp-title">
      <div className="container narrow">
        <h2 id="exp-title" className="section-title">
          Experience And Education
        </h2>

        <h3 className="subsection-title">Work Experience</h3>
        <ol className="timeline">
          <li className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-body">
              <h3>Junior Full Stack Developer</h3>
              <p className="timeline-place">WAVEVY CITY · 2026 — ปัจจุบัน</p>
              <p>พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์ รับผิดชอบฟีเจอร์และการเชื่อมต่อระบบภายในทีม</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-body">
              <h3>Junior Full Stack Developer</h3>
              <p className="timeline-place">LUV TOWN · 2025</p>
              <p>พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์และโปรเจกต์เมเนเจอร์</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-body">
              <h3>Junior Full Stack Developer</h3>
              <p className="timeline-place">OG CITY · 2024</p>
              <p>พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์</p>
            </div>
          </li>
        </ol>

        <h3 className="subsection-title">Education</h3>
        <ol className="timeline">
          <li className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-body">
              <h3>กำลังเข้าศึกษาระดับปริญญาตรี</h3>
              <p className="timeline-place">สาขาวิศวกรรมซอฟต์แวร์ (ชั้นปีที่ 1) · เริ่ม 2026</p>
              <p>กำลังเข้าศึกษาในระดับอุดมศึกษา สายวิศวกรรมซอฟต์แวร์</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-body">
              <h3>จบการศึกษาระดับมัธยมศึกษาตอนปลาย</h3>
              <p className="timeline-place">
                โรงเรียนสวนกุหลาบวิทยาลัย สระบุรี · แผนการเรียนวิทยาศาสตร์–คณิตศาสตร์ · 2026
              </p>
              <p>สำเร็จการศึกษาระดับชั้นมัธยมศึกษาปีที่ 6</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
