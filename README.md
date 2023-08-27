# vVibe 餐廳電商網站

### 相關連結
[notion](https://www.notion.so/12-vVibe-f1720464b22645d18a99c2914c39fff9)
[whimsical sitemap + wireframe](https://whimsical.com/vvibe-K94b764LD6s78rpSvM2Kg1)
[Figma連結](https://www.figma.com/file/k3k2DI66h0chC3qnx37kwl/vVibe-%E9%A4%90%E5%BB%B3%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99?type=design&mode=design&t=pIlYFY7UlOBa7GIF-0)
[圖片連結]()


### 套件
[bootstrap](https://bootstrap5.hexschool.com/)
[jQuery datepicker](https://jqueryui.com/datepicker/)
+ icon
   + [google icon](https://fonts.google.com/icons)
   + [bootstrap icon](https://icons.getbootstrap.com/)
+ Google font
   + [Red Hat Mono](https://fonts.google.com/specimen/Red+Hat+Mono?query=red+&category=Monospace)
   + [Noto Serif TC](https://fonts.google.com/noto/specimen/Noto+Serif+TC)
   + [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)

### 安裝
+ `npm i vite`
+ `npm i vite-plugin-ejs`
+ `npm i glob`
+ `npm i vite-plugin-live-reload` 檔案儲存，網頁自動重新整理(vite.config.js)

### 指令
+ `npm i` [初次 clone 專案](https://github.com/hexschool/web-layout-training-vite)需執行，產生 node_modules
+ `npm run dev` 監聽(開啟瀏覽器)，不須使用 Watch Sass 功能

### 遠端部屬
1. 建立 github repo

2. 修改 vite.config.js 檔中的 defineConfig 裡的
   base: '/GitHub Repository 名稱/'

3. git 指令
```cmd
git init 初次設定
git add .
git commit -m "msg"
git remote {copy github URL} 初次設定
git push origin master
```

4. `npm run deploy` 編譯 dist 檔(`npm run build`)並部屬到 github gh-pages 分支