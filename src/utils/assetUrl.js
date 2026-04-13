/**
 * ไฟล์ใน public/ — ใช้ค่า base จาก Vite เพื่อให้โหลดถูกบน GitHub Pages (เช่น /portfolio/)
 */
export function assetUrl(path) {
  const p = String(path).replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${p}`;
}
