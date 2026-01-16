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

export default function RecentItems() {
    const [items, setItems] = useState<Item[] | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
                if (!res.ok) throw new Error("Failed to fetch items");
                const data: Item[] = await res.json();


                const sorted = data.sort((a, b) => b.id - a.id);

                setItems(sorted.slice(0, 3));
            } catch (err) {
                console.error(err);
                toast.error("Failed to load recent items");
            }
        };

        fetchItems();
    }, []);

    if (!items) return null;

    return (
        <section className="container mx-auto px-6 py-20">
            <Toaster position="top-right" />
            <h2 className="text-4xl font-bold text-center mb-8">Recently Added Items</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        href={`/items/${item.id}`}
                        className="card bg-base-100 shadow-lg p-4 overflow-hidden hover:shadow-xl transition"
                    >
                        <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
                            <Image
                                loader={({ src }) => `${process.env.NEXT_PUBLIC_API_URL}${src}`}
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                                placeholder="blur"
                                blurDataURL="/placeholder.png"
                            />
                        </div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm text-base-content truncate">{item.description}</p>
                        <p className="text-indigo-600 font-semibold mt-1">${item.price}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
