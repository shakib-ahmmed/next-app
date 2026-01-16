"use client";

import Link from "next/link";
import { logout, isLoggedIn } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    setOpen(false);
    router.push("/");
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          MyApp
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink href="/items">Items</NavLink>

          {loggedIn ? (
            <>
              <PrimaryLink href="/add-item">Add Item</PrimaryLink>
              <DangerButton onClick={handleLogout}>Logout</DangerButton>
            </>
          ) : (
            <PrimaryLink href="/login">Login</PrimaryLink>
          )}

          <IconButton onClick={toggleTheme} ariaLabel="Toggle theme">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </IconButton>
        </div>

        {/* Mobile menu button */}
        <IconButton
          onClick={() => setOpen(!open)}
          ariaLabel="Open menu"
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </IconButton>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-3 bg-white dark:bg-slate-900">
          <NavLink href="/items" onClick={() => setOpen(false)}>
            Items
          </NavLink>

          {loggedIn ? (
            <>
              <PrimaryLink href="/add-item" onClick={() => setOpen(false)}>
                Add Item
              </PrimaryLink>
              <DangerButton onClick={handleLogout}>Logout</DangerButton>
            </>
          ) : (
            <PrimaryLink href="/login" onClick={() => setOpen(false)}>
              Login
            </PrimaryLink>
          )}

          <IconButton onClick={toggleTheme} ariaLabel="Toggle theme" className="self-start mt-2">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </IconButton>
        </div>
      </div>
    </header>
  );
}



function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
    >
      {children}
    </Link>
  );
}

function PrimaryLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition shadow"
    >
      {children}
    </Link>
  );
}

function DangerButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 transition shadow"
    >
      {children}
    </button>
  );
}

function IconButton({
  children,
  onClick,
  ariaLabel,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition ${className}`}
    >
      {children}
    </button>
  );
}
