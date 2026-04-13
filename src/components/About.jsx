export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container narrow">
        <h2 id="about-title" className="section-title">
          About Me
        </h2>
        <p className="section-lead">
          มีประสบการณ์เล่น FiveM ประมาณ 5 ปี และพัฒนาเป็น FiveM Developer ประมาณ 4 ปี
          สนใจเรียนรู้และพัฒนาทักษะอย่างต่อเนื่องเพื่อเตรียมพร้อมสำหรับอาชีพในอนาคต
        </p>
        <div className="about-grid">
          <div className="card about-card">
            <h3>สิ่งที่ทำ</h3>
            <p>
              รับผิดชอบพัฒนาระบบตามแผนของหัวหน้าโปรเจกต์
              ครอบคลุมทั้งฝั่งสคริปในเกม UI และจัดการฐานข้อมูล
            </p>
          </div>
          <div className="card about-card">
            <h3>เป้าหมาย</h3>
            <p>
              เสริมความรู้ด้านวิศวกรรมซอฟต์แวร์และจะเรียนรู้ไปพร้อมกับประสบการณ์จริงจากการทำงานจริง
              พร้อมรับงานที่เน้นคุณภาพและการทำงานเป็นทีม
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
