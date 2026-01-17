"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import toast, { Toaster } from "react-hot-toast";

export default function AddItemPage({ onNewItem }: { onNewItem?: (item: any) => void }) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [base64Image, setBase64Image] = useState<string>("");

    useEffect(() => {
        setMounted(true);
        if (!isLoggedIn()) router.push("/login");
    }, []);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreview(result);
                setBase64Image(result.split(",")[1]); // remove data:image/...;base64
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
            setBase64Image("");
        }
    }, [file]);

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return toast.error("Please select an image");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    image: base64Image
                })
            });

            if (!res.ok) throw new Error("Failed to add item");

            const newItem = await res.json();
            toast.success("Item added successfully!");
            setName(""); setDescription(""); setPrice(""); setFile(null); setPreview(null); setBase64Image("");
            if (onNewItem) onNewItem(newItem);
        } catch (err) {
            toast.error("Error adding item");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-50 flex items-center justify-center p-4">
            <Toaster position="top-right" />
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-all">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
                    Add New Product
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Item Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Description</label>
                        <textarea
                            placeholder="Write product description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="p-3 border rounded-xl h-24 resize-none focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Price ($)</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Product Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="mb-2"
                        />
                        {preview && (
                            <div className="w-full h-64 border border-dashed rounded-xl overflow-hidden mb-2">
                                <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}
