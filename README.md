# app 目錄

## 啟用 app 目錄功能

next.config.js

```js
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { appDir: true },
};
```

## 引入 tailwind 到 app 目錄

tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
};
```

---

在最頂層的目錄的 layout.tsx 要引入 globals.css
/app/(users)/layout.tsx

```tsx
import "../../styles/globals.css";
```

/app/(admin)/layout.tsx

```tsx
import "../../styles/globals.css";
```

---

在 /pages/_app.tsx 要移除 import globals.css ，因為 app 目錄的 layout.tsx 也有引入 globals.css ，所以會造成重複引入

```tsx
import "../styles/globals.css"; // 要移除這一行
```

## app 目錄底下的 component 都是 server component

## Route Groups 路由群組

https://beta.nextjs.org/docs/routing/defining-routes#route-groups
用括號()把目錄名包起來可以群組路由，括號包起來的目錄名不會影響路由，括號裡的目錄名也不會顯示在 url，且同一層級的目錄只能有一個 page.tsx 檔案，但可以有不同的 layout.tsx 

以此 demo 為例，(users)(admin)兩個目錄為同一層級則這兩個目錄可以有自己的 layout.tsx，但是這兩個目錄只能有一個 page.tsx，因為當客戶端訪問根路徑時會找到(users)或(admin)下的 page.tsx，所以(users)和(admin)只能有一個目錄有 page.tsx ，否則會發生衝突
