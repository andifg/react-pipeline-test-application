import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
});
