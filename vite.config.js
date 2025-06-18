import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")], // svg dosyalarının yeri
      symbolId: "icon-[name]", // <use> ile çağırırken kullanacağın ID yapısı
    }),
  ],
});
