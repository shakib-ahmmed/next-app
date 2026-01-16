"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchItems = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
            if (!res.ok) throw new Error(`Failed to fetch items (Status ${res.status})`);
            const data: Item[] = await res.json();
            setItems(data);
        } catch (err: any) {
            console.error("Fetch error:", err);
            setError("Failed to load items. Make sure your server is running at http://localhost:4000");
            toast.error("Unable to fetch items from the server!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    if (loading) return <div className="text-center mt-20 text-lg">Loading items...</div>;

    if (error)
        return (
            <div className="text-center mt-20 text-red-600">
                {error}
                <br />
                <button
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
                    onClick={fetchItems}
                >
                    Retry
                </button>
                <Toaster position="top-right" />
            </div>
        );

    return (
        <div className="max-w-5xl mx-auto p-4">
            <Toaster position="top-right" />
            <h1 className="text-3xl font-bold mb-6 text-center">Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <Link
                        key={item.id}
                        href={`/items/${item.id}`}
                        className="border rounded shadow hover:shadow-lg overflow-hidden group bg-white dark:bg-slate-800 transition"
                    >
                        <div className="relative w-full h-48">
                            {item.image && (
                                <Image
                                    loader={({ src }) => `${process.env.NEXT_PUBLIC_API_URL}${src}`}
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                    placeholder="blur"
                                    blurDataURL="/placeholder.png"
                                    priority={index === 0}
                                />
                            )}
                        </div>
                        <div className="p-2">
                            <h2 className="font-semibold text-lg">{item.name}</h2>
                            <p className="text-slate-600 dark:text-slate-300 truncate">{item.description}</p>
                            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
