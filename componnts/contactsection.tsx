"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            // Mock API request - replace with backend endpoint
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative bg-base-200 py-24 overflow-hidden">
            <Toaster position="top-right" />

            {/* Floating shapes */}
            <div className="absolute top-10 left-1/4 w-24 h-24 bg-indigo-300 rounded-full opacity-30 animate-bounce-slow"></div>
            <div className="absolute top-1/2 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-25 animate-pulse-slow"></div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-indigo-600 relative z-10">
                Contact Us
            </h2>

            <form
                onSubmit={handleSubmit}
                className="relative z-10 max-w-2xl mx-auto bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col gap-6 transform transition-all hover:scale-[1.02] duration-500"
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full text-lg focus:border-indigo-500 focus:ring focus:ring-indigo-300 transition"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full text-lg focus:border-indigo-500 focus:ring focus:ring-indigo-300 transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered w-full text-lg h-36 resize-none focus:border-indigo-500 focus:ring focus:ring-indigo-300 transition"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-primary w-full text-xl py-3 transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
}
