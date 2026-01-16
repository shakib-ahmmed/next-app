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

    useEffect(() => {
        setMounted(true);
        if (!isLoggedIn()) router.push("/login");
    }, []);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file]);

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return toast.error("Please select an image");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", file);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Failed to add item");

            const newItem = await res.json();
            toast.success("Item added successfully!");

            setName("");
            setDescription("");
            setPrice("");
            setFile(null);
            setPreview(null);

            if (onNewItem) onNewItem(newItem); // live update
        } catch (err) {
            console.error(err);
            toast.error("Error adding item");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-slate-800 rounded shadow-md">
            <Toaster position="top-right" />
            <h1 className="text-2xl font-bold mb-4 text-center">Add New Item</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border rounded dark:bg-slate-700"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-2 border rounded dark:bg-slate-700"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full p-2 border rounded dark:bg-slate-700"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full"
                />
                {preview && (
                    <div className="relative w-full h-48 mt-2">
                        <img src={preview} alt="Preview" className="object-cover w-full h-full rounded" />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}
