"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
                if (!res.ok) throw new Error(`Failed to fetch items (Status ${res.status})`);
                const data: Item[] = await res.json();
                setItems(data);
            } catch (err: any) {
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, []);

    if (loading) return <p>Loading items...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item) => (
                <Link
                    key={item._id} 
                    href={`/items/${item._id}`}
                    className="card bg-base-100 shadow-lg p-4 overflow-hidden hover:shadow-xl transition"
                >
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="mt-1 font-semibold">${item.price}</p>
                </Link>
            ))}

        </div>
    );
}
