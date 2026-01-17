
import Navbar from "@/componnts/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/componnts/ThemeProvider";
import Footer from "@/componnts/Footer";

export const metadata = {
  title: "My App",
  description: "Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <ThemeProvider />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
