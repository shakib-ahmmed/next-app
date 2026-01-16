"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddItemPage from "../add-item/page";

interface Item { id: number; name: string; description: string; price: number; image: string; }

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);

    const fetchItems = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => { fetchItems(); }, []);

    const handleNewItem = (item: Item) => setItems(prev => [...prev, item]);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Items</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map(item => (
                    <Link key={item.id} href={`/items/${item.id}`} className="border rounded shadow hover:shadow-lg overflow-hidden group bg-white dark:bg-slate-800 transition">
                        <div className="relative w-full h-48">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-2">
                            <h2 className="font-semibold text-lg">{item.name}</h2>
                            <p className="text-slate-600 dark:text-slate-300">${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Optional live add */}
            {/* <AddItemPage onNewItem={handleNewItem} /> */}
        </div>
    );
}
