import Image from "next/image";

interface Params {
    params: { id: string };
}

async function getItem(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Item not found");
    return res.json();
}

export default async function ItemDetailPage({ params }: Params) {
    const item = await getItem(params.id);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="rounded object-cover w-full"
            />
            <h1 className="text-3xl font-bold mt-4">{item.name}</h1>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{item.description}</p>
            <p className="mt-4 font-semibold text-xl">${item.price}</p>
        </div>
    );
}
