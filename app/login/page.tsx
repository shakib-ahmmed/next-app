"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (login(email, password)) {
            toast.success("Logged in successfully!");
            router.push("/add-item");
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-slate-800 rounded shadow-md">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded dark:bg-slate-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border rounded dark:bg-slate-700"
                />
                <button
                    type="submit"
                    className="w-full py-2 cursor-pointer bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
