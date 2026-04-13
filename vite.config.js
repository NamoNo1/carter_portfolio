import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ถ้า deploy ที่ GitHub Pages แบบ project site (เช่น /portfolio/) ให้ตั้ง base เป็น '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: "./",
});
