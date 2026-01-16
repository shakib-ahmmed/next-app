import Image from "next/image";
import Link from "next/link";

async function getItems() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="max-w-7xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item: any) => (
                <Link key={item.id} href={`/items/${item.id}`} className="border p-4 rounded hover:shadow-lg transition">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="rounded mb-2 object-cover w-full"
                    />
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                    <p className="mt-2 font-semibold">${item.price}</p>
                </Link>
            ))}
        </div>
    );
}
