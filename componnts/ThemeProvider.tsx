"use client";
import { useEffect } from "react";

export default function ThemeProvider() {
    useEffect(() => {
        try {
            const theme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const useDark = theme === "dark" || (!theme && prefersDark);
            document.documentElement.classList.toggle("dark", useDark);
        } catch (e) { }
    }, []);

    return null;
}
