// vite.config.js
import { defineConfig } from "file:///C:/Users/301an/Desktop/lesson/week6/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/301an/Desktop/lesson/week6/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/301an/Desktop/lesson/week6/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/301an/Desktop/lesson/week6/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\301an\\Desktop\\lesson\\week6";
var __vite_injected_original_import_meta_url = "file:///C:/Users/301an/Desktop/lesson/week6/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    //post 在其他function執行完畢後執行
    apply: "build",
    //npm run build
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  //Github Repo Name
  base: "/vVibe/",
  plugins: [
    //指定檔案儲存後，自動重新整理
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  css: {
    devSourcemap: true
  },
  server: {
    //啟動 server 時，預設開啟的頁面
    open: "pages/index.html"
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__vite_injected_original_dirname, "node_modules/bootstrap")
    }
  },
  build: {
    //使用 rollup 模組打包
    rollupOptions: {
      //input 指定應用程式的入口檔案(所有 pages 資料夾底下的 .html)
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
    //構建完成後，檔案會被輸出到 dist 資料夾
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwzMDFhblxcXFxEZXNrdG9wXFxcXGxlc3NvblxcXFx3ZWVrNlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMzAxYW5cXFxcRGVza3RvcFxcXFxsZXNzb25cXFxcd2VlazZcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzMwMWFuL0Rlc2t0b3AvbGVzc29uL3dlZWs2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tZWpzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XG5cbmZ1bmN0aW9uIG1vdmVPdXRwdXRQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21vdmUtb3V0cHV0JyxcbiAgICBlbmZvcmNlOiAncG9zdCcsIC8vcG9zdCBcdTU3MjhcdTUxNzZcdTRFRDZmdW5jdGlvblx1NTdGN1x1ODg0Q1x1NUI4Q1x1NzU2Mlx1NUY4Q1x1NTdGN1x1ODg0Q1xuICAgIGFwcGx5OiAnYnVpbGQnLCAgLy9ucG0gcnVuIGJ1aWxkXG4gICAgYXN5bmMgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIGluIGJ1bmRsZSkge1xuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcbiAgICAgICAgICAvL1x1NkE5NFx1Njg0OFx1NTQwRFx1N0EzMVx1ODJFNVx1NzBCQSdwYWdlcy8nIFx1OTU4Qlx1OTgyRFx1RkYwQ1x1NEY3Rlx1NzUyOCAuc2xpY2UgXHU1QzA3ICdwYWdlcy8nIFx1NTIyQVx1OTY2NFx1RkYwQ1x1NTNENlx1NUY5N1x1NjVCMFx1NzY4NFx1NkE5NFx1Njg0OFx1NTQwRFx1N0EzMVx1MzAwMlxuICAgICAgICAgIC8vXHU1QzA3XHU2NUIwXHU2QTk0XHU1NDBEXHU2MzA3XHU1QjlBXHU3RDY2IGJ1bmRsZSBcdTcyNjlcdTRFRjZcdTc2ODQgZmlsZU5hbWUgXHU1QzZDXHU2MDI3XHVGRjBDXHU0RUU1XHU4QUJGXHU2NTc0XHU2QTk0XHU2ODQ4XHU4RjM4XHU1MUZBXHU3Njg0XHU3RDUwXHU2NzlDXG4gICAgICAgICAgY29uc3QgbmV3RmlsZU5hbWUgPSBmaWxlTmFtZS5zbGljZSgncGFnZXMvJy5sZW5ndGgpO1xuICAgICAgICAgIGJ1bmRsZVtmaWxlTmFtZV0uZmlsZU5hbWUgPSBuZXdGaWxlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAvL0dpdGh1YiBSZXBvIE5hbWVcbiAgYmFzZTogJy93ZWVrNi8nLFxuICBwbHVnaW5zOiBbXG4gICAgLy9cdTYzMDdcdTVCOUFcdTZBOTRcdTY4NDhcdTUxMzJcdTVCNThcdTVGOENcdUZGMENcdTgxRUFcdTUyRDVcdTkxQ0RcdTY1QjBcdTY1NzRcdTc0MDZcbiAgICBsaXZlUmVsb2FkKFsnLi9sYXlvdXQvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouaHRtbCddKSwgXG4gICAgVml0ZUVqc1BsdWdpbigpLFxuICAgIG1vdmVPdXRwdXRQbHVnaW4oKSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgZGV2U291cmNlbWFwOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICAvL1x1NTU1Rlx1NTJENSBzZXJ2ZXIgXHU2NjQyXHVGRjBDXHU5ODEwXHU4QTJEXHU5NThCXHU1NTVGXHU3Njg0XHU5ODAxXHU5NzYyXG4gICAgb3BlbjogJ3BhZ2VzL2luZGV4Lmh0bWwnLCAgXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ35ib290c3RyYXAnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcCcpLFxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvL1x1NEY3Rlx1NzUyOCByb2xsdXAgXHU2QTIxXHU3RDQ0XHU2MjUzXHU1MzA1XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy9pbnB1dCBcdTYzMDdcdTVCOUFcdTYxQzlcdTc1MjhcdTdBMEJcdTVGMEZcdTc2ODRcdTUxNjVcdTUzRTNcdTZBOTRcdTY4NDgoXHU2MjQwXHU2NzA5IHBhZ2VzIFx1OENDN1x1NjU5OVx1NTkzRVx1NUU5NVx1NEUwQlx1NzY4NCAuaHRtbClcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2JcbiAgICAgICAgICAuc3luYygncGFnZXMvKiovKi5odG1sJylcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXG4gICAgICAgICAgICBwYXRoLnJlbGF0aXZlKCdwYWdlcycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgfSxcbiAgICBvdXREaXI6ICdkaXN0JywgLy9cdTY5Q0JcdTVFRkFcdTVCOENcdTYyMTBcdTVGOENcdUZGMENcdTZBOTRcdTY4NDhcdTY3MDNcdTg4QUJcdThGMzhcdTUxRkFcdTUyMzAgZGlzdCBcdThDQzdcdTY1OTlcdTU5M0VcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLG9CQUFvQjtBQUNwVSxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTnZCLElBQU0sbUNBQW1DO0FBQWdKLElBQU0sMkNBQTJDO0FBUTFPLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLElBQ1QsT0FBTztBQUFBO0FBQUEsSUFDUCxNQUFNLGVBQWUsU0FBUyxRQUFRO0FBQ3BDLGlCQUFXLFlBQVksUUFBUTtBQUM3QixZQUFJLFNBQVMsV0FBVyxRQUFRLEdBQUc7QUFHakMsZ0JBQU0sY0FBYyxTQUFTLE1BQU0sU0FBUyxNQUFNO0FBQ2xELGlCQUFPLFFBQVEsRUFBRSxXQUFXO0FBQUEsUUFDOUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBO0FBQUEsSUFFUCxXQUFXLENBQUMscUJBQXFCLG9CQUFvQixtQkFBbUIsQ0FBQztBQUFBLElBQ3pFLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGNBQWMsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLElBQ2hFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxlQUFlO0FBQUE7QUFBQSxNQUViLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
