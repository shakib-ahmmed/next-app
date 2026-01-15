"use client";

import Link from "next/link";
import { isLoggedIn, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const loggedIn = isLoggedIn();

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme") || "light";
        setTheme(stored);
        document.querySelector("html")?.setAttribute("data-theme", stored);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.querySelector("html")?.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <div className="navbar bg-base-100 shadow-md px-6">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    MyApp
                </Link>
            </div>
            <div className="flex-none gap-2">
                <Link href="/items" className="btn btn-ghost">Items</Link>
                {loggedIn ? (
                    <>
                        <Link href="/add-item" className="btn btn-primary">Add Item</Link>
                        <button onClick={handleLogout} className="btn btn-error">Logout</button>
                    </>
                ) : (
                    <Link href="/login" className="btn btn-primary">Login</Link>
                )}
                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="btn btn-ghost ml-2">
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </div>
    );
}
