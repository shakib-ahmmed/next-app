"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddItemPage() {
    const [form, setForm] = useState({ name: "", description: "", price: "", image: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                description: form.description,
                price: Number(form.price),
                image: form.image,
            }),
        });

        if (res.ok) {
            toast.success("Item added successfully");
            setForm({ name: "", description: "", price: "", image: "" });
        } else {
            toast.error("Failed to add item");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded shadow-md mt-10">
            <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-slate-700" />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-slate-700" />
                <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-slate-700" />
                <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-slate-700" />
                <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">Add Item</button>
            </form>
        </div>
    );
}
