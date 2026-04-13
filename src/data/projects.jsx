export const projects = [
  {
    id: "shop",
    title: "General Market — Shop",
    previewId: "preview-title-shop",
    tag: "FiveM · NUI · Shop",
    year: "2026",
    teaser:
      "ระบบร้านค้า",
    withThumb: true,
    stack: false,
    gallery: [
      {
        src: "/images/project-shop-general-market.png",
        alt: "NUI ร้านค้า General Market — แสดงยอดเงิน หมวดสินค้า ตะกร้า และชำระเงิน",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Shop</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>General Market — Shop</h3>
        <p>
          ระบบร้านค้าใช้ง่ายได้ง่ายมี Function หลากหลายในการอำนวยความสะดวกของผู้เล่นและให้ความสำคัญกับการถูก Hacking
        </p>
        <p>
        ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> คอยส่งข้อมูลให้ UI และเป็นตัวดำเนินการหลักใน Backend,
          <strong>Vue.js</strong> Render UI,
          <strong>HTML</strong> และ <strong>CSS</strong>,
          <strong>JavaScript</strong> เชื่อมสื่อสารกับ Lua ผ่าน NUI
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          เมื่อเปิดร้าน Lua ฝั่ง client ส่งข้อมูลสินค้าและยอดเงินผู้เล่นเข้า Vue ผ่านข้อความ NUI
          ผู้ใช้เลือกหมวด ค้นหา และเพิ่มของในตะกร้า Vue คำนวณยอดรวมในเบราว์เซอร์โดยไม่ต้องวนกลับเซิร์ฟทุกคลิก
          กดซื้อแล้ว frontend ส่ง callback กลับไปที่ Lua client แล้วต่อไปยัง server เพื่อตรวจสอบเงิน
          หักเงิน และแอดไอเทม
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
        </ul>
      </>
    ),
  },
  {
    id: "mailbox",
    title: "Mailbox",
    previewId: "preview-title-mailbox",
    tag: "FiveM · NUI · Mailbox",
    year: "2026",
    teaser: "กล่องจดหมาย MAILBOX มี Functino สำหรับ Admin",
    withThumb: true,
    stack: false,
    gallery: [
      {
        src: "/images/project-mailbox.png",
        alt: "NUI ระบบ Mailbox — กล่องข้อความในเกม FiveM",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Mailbox</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>Mailbox</h3>
        <p>
          ระบบกล่องจดหมายในเกม สำหรับอ่าน ส่ง และจัดการข้อความจากระบบหรือผู้เล่น
          แสดงสถานะอ่านแล้ว/ยังไม่อ่าน แจ้งเตือน และรายละเอียดแต่ละฉบับ
          มีระบบการแอดไอเทมผ่าน Mailbox
        </p>
        <p>
          ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> เปิด UI และซิงค์ข้อมูลจดหมาย,
          <strong>Vue.js</strong> Render รายการและรายละเอียดจดหมาย,
          <strong>MySQL</strong> ใช้ในการจัดเก็บข้อมูล,
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> สำหรับหน้า NUI
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          เมื่อเปิดกล่องจดหมาย Lua client ดึงข้อมูลจาก server แล้วส่งรายการจดหมายเข้า Vue ผ่าน NUI message
          ผู้เล่นเลือกอ่าน ลบ หรือรับของแนบมา การกระทำที่มีผลกับข้อมูลในเซิร์ฟเวอร์จะส่ง callback จาก Vue ไปยัง Lua
          แล้วให้ server ตรวจสอบสิทธิ์ อัปเดตฐานข้อมูล และตอบกลับผลให้ UI รีเฟรชสถานะ
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
        </ul>
      </>
    ),
  },
  {
    id: "battlepass",
    title: "Battle Pass",
    previewId: "preview-title-battlepass",
    tag: "FiveM · NUI · Battle Pass",
    year: "2026",
    teaser: " Battle Pass ระบบรับไอเทมจากการสะสม EXP มีทั้งฟรีและพรีเมี่ยม",
    withThumb: true,
    stack: false,
    gallery: [
      {
        src: "/images/project-battle-pass.png",
        alt: "NUI ระบบ Battle Pass — Season 1 เลเวล EXP แทร็กรางวัลฟรีและพรีเมียม",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Battle Pass</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>Battle Pass</h3>
        <p>
          Battle Pass ระบบรับไอเทมจากการสะสม EXP มีทั้งฟรีและพรีเมี่ยม
        </p>
        <p>
          ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> ส่งข้อมูล เลเวล EXP สถานะการรับรางวัล และสิทธิ์พรีเมียม และใช้ในการจัดการข้อมูล,
          <strong>Vue.js</strong> จัด state ของ Battle Pass,
          <strong>MySQL</strong> ใช้ในการจัดเก็บข้อมูล,
          <strong>JavaScript</strong> เชื่อม NUI กับ Lua
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          ตอนเปิด UI Callback server ไปยัง UI โดยส่งสถานะ Battle Pass ปัจจุบัน (เลเวล, EXP, รางวัลที่กดรับแล้ว, พรีเมียม)
          แล้วใช้ Vue เพื่อเรนเดอร์ไอเทมต่างๆ
          การกดรับรางวัลหรือปลดล็อกพาสจะส่ง event จาก Vue ไป Lua client แล้วไป server เพื่อตรวจเงื่อนไข โดยใช้ Callback
          อัปเดตฐานข้อมูล ข้อมูลสำคัญไม่เชื่อถือจากฝั่ง UI อย่างเดียว
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>MySQL</li>
        </ul>
      </>
    ),
  },
  {
    id: "skinshop",
    title: "Skin Shop",
    previewId: "preview-title-skinshop",
    tag: "FiveM · NUI · Skin Shop",
    year: "2026",
    teaser: "ร้านเสื้อผ้าที่มีสิ่งอำนวยความสะดวกของผู้เล่น",
    withThumb: true,
    stack: false,
    gallery: [
      {
        src: "/images/project-skin-shop.png",
        alt: "NUI Skin Shop — แต่งตัวละคร แผงเสื้อผ้า ชุดที่บันทึก และปุ่มซื้อ",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Skin Shop</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>Skin Shop</h3>
        <p>
          ร้านเสื้อผ้าที่มีสิ่งอำนวยความสะดวกของผู้เล่น
        </p>
        <p>
          ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> สั่งเปลี่ยน component บนตัวละครแบบเรียลไทม์ตามค่าที่ UI ส่งมา และสื่อสารกับ server เมื่อซื้อ/บันทึก,
          <strong>Vue.js</strong> จัด state ของแต่ละชิ้นเสื้อผ้าและชุดที่บันทึก,
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> สำหรับหน้า NUI และการเชื่อม callback
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          ส่งค่าจาก UI ไป Lua เพื่ออัปเดต การแต่งตัวทันที
          เมื่อกดซื้อหรือเซฟชุด ระบบส่งข้อมูลไป server ตรวจเงินและสิทธิ์ แล้วค่อยยืนยันลงฐานข้อมูลและซิงค์ลุคให้ผู้เล่น
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>MySQL</li>
        </ul>
      </>
    ),
  },
  {
    id: "dailylogin",
    title: "Daily Login",
    previewId: "preview-title-dailylogin",
    tag: "FiveM · NUI · Daily Login",
    year: "2026",
    teaser: "ระบบล็อกอินรายวันแบบ และระบบออนไลน์ Reward ทุกๆ ชั่วโมง",
    withThumb: true,
    stack: false,
    gallery: [
      {
        src: "/images/project-daily-login.png",
        alt: "NUI Daily Login — กริดรางวัลรายวัน รางวัลรายชั่วโมง นับถอยหลัง และโหมด Normal / Premium",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Daily Login</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>Daily Login</h3>
        <p>
          ระบบล็อกอินรายวันแบบ และระบบออนไลน์ Reward ทุกๆ ชั่วโมง
        </p>
        <p>
          ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> ซิงค์เวลาเซิร์ฟเวอร์ สถานะการกดรับ และการแอดของ,
          <strong>Vue.js</strong> จัด state ไอเทมในแต่ละวัน แท็บรางวัล,
          <strong>MySQL</strong> ใช้ในการจัดเก็บข้อมูล,
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> สำหรับหน้า NUI
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          Server เป็นตัวกำหนดว่าวันไหนรับได้แล้ว เหลือเวลากี่วินาทีถึงรอบถัดไป และรางวัลแต่ละช่อง
          ส่งข้อมูลเข้า Vue เพื่อแสดงผลและนับถอยหลังฝั่ง client ให้ลื่นตา
          เมื่อผู้เล่นกดรับ Vue ส่ง callback ไป Lua → server ตรวจเงื่อนไข (วัน ซ้ำ สิทธิ์พรีเมียม) แล้วค่อยอัปเดต DB และตอบกลับให้ UI รีเฟรช
          ป้องกันการกดรับซ้ำหรือข้ามวันโดยไม่ผ่านการตรวจบน server
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>MySQL</li>
          </ul>
      </>
    ),
  },
  {
    id: "gang",
    title: "Gang Manage System",
    previewId: "preview-title-gang",
    tag: "FiveM · NUI · Gang / Family",
    year: "2026",
    teaser: "ระบบจัดการแก๊งและครอบครัวและ Function อำนวยความสะดวกของแก๊ง",
    withThumb: true,
    stack: true,
    gallery: [
      {
        src: "/images/project-gang-system-list.png",
        alt: "Gang & Family System — รายการแก๊ง กรอง All/Gang/Family ค้นหา และสร้างแก๊ง",
      },
      {
        src: "/images/project-gang-system-detail.png",
        alt: "Gang & Family System — ภาพรวมแก๊ง สมาชิกหลักและสำรอง แรงก์และสถานะป้องกัน",
      },
    ],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · NUI · Gang / Family</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>Gang Manage System</h3>
        <p>
          ระบบจัดการแก๊งและครอบครัวและ Function อำนวยความสะดวกของแก๊ง
        </p>
        <p>
          ได้รับ UI จากทีม Design บน <strong>Figma</strong>
        </p>
        <p>
          <strong className="project-inline-label">Tech Used:</strong>
          <strong>Lua</strong> จัดการฐานข้อมูลขนาดใหญ่และ Gameplay ของแก๊ง รวมถึงการแอดของ,
          <strong>Vue.js</strong> ใช้ในการ Render Ui โดยแบ่งออกเป็น component,
          <strong>MySQL</strong> ใช้ในการจัดเก็บข้อมูล,
          <strong>Vite</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> สำหรับ NUI
        </p>
        <p>
          <strong className="project-inline-label">Process:</strong>
          วางแผนการจัดการข้อมูลขนาดใหญ่เพื่อรองรับการเล่นของผู้เล่นจำนวนมากให้มีประสิทธิภาพทั้งการ Render UI รวมถึงการเรียกข้อมูลในแต่ละแก็งค์ และ USERS
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>Vite</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>MySQL</li>
          </ul>
      </>
    ),
  },
  {
    id: "wavevy",
    title: "WAVEVY CITY",
    previewId: "preview-title-wavevy",
    tag: "FiveM · Full Stack",
    year: "2026",
    teaser: "Junior Full Stack — พัฒนาระบบตามแผนหัวหน้าโปรเจกต์",
    withThumb: false,
    stack: false,
    gallery: [],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · Full Stack</span>
          <time dateTime="2026">2026</time>
        </div>
        <h3>WAVEVY CITY</h3>
        <p>
          ทำงานเป็น Junior Full Stack Developer พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์
          เน้นการส่งมอบฟีเจอร์ที่สอดคล้องกับทิศทางของทีม
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>MySQL</li>
        </ul>
      </>
    ),
  },
  {
    id: "luv",
    title: "LUV TOWN",
    previewId: "preview-title-luv",
    tag: "FiveM · Full Stack",
    year: "2025",
    teaser: "Junior Full Stack — ประสาน PM และหัวหน้าโปรเจกต์",
    withThumb: false,
    stack: false,
    gallery: [],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · Full Stack</span>
          <time dateTime="2025">2025</time>
        </div>
        <h3>LUV TOWN</h3>
        <p>
          Junior Full Stack Developer พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์และโปรเจกต์เมเนเจอร์
          ประสานงานตามสโคปที่กำหนด
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>MySQL</li>
        </ul>
      </>
    ),
  },
  {
    id: "og",
    title: "OG CITY",
    previewId: "preview-title-og",
    tag: "FiveM · Full Stack",
    year: "2024",
    teaser: "Junior Full Stack — สะสมประสบการณ์เซิร์ฟเวอร์จริง",
    withThumb: false,
    stack: false,
    gallery: [],
    body: (
      <>
        <div className="project-meta">
          <span className="project-tag">FiveM · Full Stack</span>
          <time dateTime="2024">2024</time>
        </div>
        <h3>OG CITY</h3>
        <p>
          Junior Full Stack Developer พัฒนาระบบตามแผนของหัวหน้าโปรเจกต์
          สะสมประสบการณ์จากโปรเจกต์เซิร์ฟเวอร์จริง
        </p>
        <ul className="project-tech">
          <li>Lua</li>
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>MySQL</li>
        </ul>
      </>
    ),
  },
];
