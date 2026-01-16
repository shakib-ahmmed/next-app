import Image from "next/image";
import Link from "next/link";

async function getItems() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed");
    return res.json();
}

export default async function ItemsPage() {
    const items = await getItems();
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Items</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item: any) => (
                    <Link key={item.id} href={`/items/${item.id}`} className="border p-4 rounded hover:shadow-lg transition bg-white dark:bg-slate-800">
                        <div className="relative w-full h-48">
                            {item.image && <Image src={item.image} alt={item.name} fill className="object-cover rounded" />}
                        </div>
                        <h2 className="mt-3 font-bold text-lg">{item.name}</h2>
                        <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                        <p className="mt-2 font-semibold text-indigo-600 dark:text-indigo-400">${item.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
