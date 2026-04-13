import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// บน GitHub Actions: GITHUB_REPOSITORY = owner/repo
// - project site → base /ชื่อ-repo/
// - user site (repo ลงท้าย .github.io) → base /
const [, repoName] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isUserGithubIoSite = repoName && /\.github\.io$/i.test(repoName);
const base = repoName ? (isUserGithubIoSite ? "/" : `/${repoName}/`) : "./";

export default defineConfig({
  plugins: [react()],
  base,
});
