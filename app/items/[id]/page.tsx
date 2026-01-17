"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function ItemDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;

        async function fetchItem() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`);
                if (!res.ok) throw new Error(`Item not found (Status ${res.status})`);
                const data: Item = await res.json();
                setItem(data);
            } catch (err: any) {
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchItem();
    }, [id]);

    if (loading) return <p>Loading item...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!item) return <p>Item not found</p>;

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <img src={item.image} alt={item.name} className="w-full h-96 object-cover mb-4 rounded" />
            <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-xl font-semibold mb-4">${item.price}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => router.back()}
            >
                Back
            </button>
        </div>
    );
}
