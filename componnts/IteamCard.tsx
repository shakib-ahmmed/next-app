import Link from "next/link";

export default function ItemCard({ item }: any) {
    return (
        <Link
            href={`/items/${item.id}`}
            className="card bg-base-100 shadow-lg rounded-lg p-6 hover:scale-105 transform transition"
        >
            <div className="h-40 bg-base-200 rounded mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-lg font-semibold">{item.price}</p>
        </Link>
    );
}
