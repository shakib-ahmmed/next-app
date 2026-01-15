"use client"; // Needed if layout uses state/hooks

import Navbar from "@/componnts/Navbar";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Footer from "@/componnts/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
