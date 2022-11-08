import "../../styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header className="p-3 bg-green-300 text-right">
          <Link className="text-blue-700" href={"/"}>Go Back To Users Home</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
