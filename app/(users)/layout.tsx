import "../../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* head.tsx 影響該層和該層以下的目錄的 head tag 中的 tags, 但如果子層或子層以下的目錄也有 head.tsx 則相同的 tags 會被子層覆蓋, 而最頂層的 head.tsx 會覆蓋 layout.tsx 中 head tag 相同的tags */}
      <head>
        <title>Sonnys Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
