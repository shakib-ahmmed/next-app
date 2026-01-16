import Navbar from "@/componnts/Navbar";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Footer from "@/componnts/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme bootstrap (prevents flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = theme === 'dark' || (!theme && prefersDark);
    document.documentElement.classList.toggle('dark', useDark);
  } catch (e) {}
})();
`,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
