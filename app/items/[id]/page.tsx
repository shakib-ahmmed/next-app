"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ItemDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
                const data: Item[] = await res.json();
                const found = data.find((i) => i.id === Number(id));
                if (!found) throw new Error("Item not found");
                setItem(found);
            } catch (err) {
                console.error(err);
                toast.error("Item not found");
                router.push("/items");
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (!item) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-4 md:p-10 flex flex-col md:flex-row items-center gap-10">
            <Toaster position="top-right" />

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-80 md:h-[500px] rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{item.name}</h1>
                <p className="text-slate-700 dark:text-slate-300 text-lg">{item.description}</p>
                <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">${item.price}</p>

                <button
                    onClick={() => toast.success("Added to cart!")}
                    className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded shadow-lg transition-all duration-300"
                >
                    Add to Cart
                </button>

                <button
                    onClick={() => router.back()}
                    className="mt-2 px-6 py-2 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded transition"
                >
                    Back to Items
                </button>
            </div>
        </div>
    );
}
