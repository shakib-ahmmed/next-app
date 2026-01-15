"use client";

import Link from "next/link";
import { isLoggedIn, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const router = useRouter();
    const loggedIn = isLoggedIn();

    const [theme, setTheme] = useState("light");

    // On mount, load theme from localStorage or system preference
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored) {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <div className="navbar bg-background-light dark:bg-background-dark shadow-md px-6">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl text-primary-dark dark:text-primary-light">
                    MyApp
                </Link>
            </div>
            <div className="flex-none gap-2 items-center">
                <Link href="/items" className="btn btn-ghost text-primary-dark dark:text-primary-light">Items</Link>
                {loggedIn ? (
                    <>
                        <Link href="/add-item" className="btn btn-primary">Add Item</Link>
                        <button onClick={handleLogout} className="btn btn-error">Logout</button>
                    </>
                ) : (
                    <Link href="/login" className="btn btn-primary">Login</Link>
                )}
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost p-2 rounded-full ml-2 hover:scale-110 transition-transform"
                    aria-label="Toggle Theme"
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </div>
    );
}
