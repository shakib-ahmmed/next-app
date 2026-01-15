"use client";

import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        login();
        router.push("/items");
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <button
                onClick={handleLogin}
                className="px-6 py-3 bg-black text-white rounded"
            >
                Login (Mock)
            </button>
        </div>
    );
}
