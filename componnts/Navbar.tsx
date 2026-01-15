"use client";

import Link from "next/link";
import { logout, isLoggedIn } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Auth
    setLoggedIn(isLoggedIn());

    // Theme
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    router.push("/");
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          MyApp
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/items" className="nav-link">Items</Link>

          {loggedIn ? (
            <>
              <Link href="/add-item" className="btn-primary">Add Item</Link>
              <button onClick={handleLogout} className="btn-danger">Logout</button>
            </>
          ) : (
            <Link href="/login" className="btn-primary">Login</Link>
          )}

          <button onClick={toggleTheme} className="icon-btn">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden icon-btn">
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col gap-2 p-4">
            <Link href="/items" onClick={() => setOpen(false)} className="nav-link">Items</Link>

            {loggedIn ? (
              <>
                <Link href="/add-item" onClick={() => setOpen(false)} className="btn-primary w-full">Add Item</Link>
                <button onClick={handleLogout} className="btn-danger w-full">Logout</button>
              </>
            ) : (
              <Link href="/login" onClick={() => setOpen(false)} className="btn-primary w-full">Login</Link>
            )}

            <button onClick={toggleTheme} className="icon-btn self-start mt-2">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
