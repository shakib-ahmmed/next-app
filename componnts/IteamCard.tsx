"use client";

import Link from "next/link";
import Image from "next/image";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ItemCard({ item }: { item: Item }) {
    return (
        <Link
            href={`/items/${item.id}`}
            className="group relative block bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
            {/* Image */}
            <div className="relative w-full h-64 md:h-72 lg:h-80">
                {item.image ? (
                    <Image
                        loader={({ src }) => `${process.env.NEXT_PUBLIC_API_URL}${src}`}
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="/placeholder.png"
                    />
                ) : (
                    <div className="bg-gray-200 dark:bg-slate-700 w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between h-[200px] md:h-[220px]">
                <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2 truncate">
                    {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-3">
                    {item.description}
                </p>
                <p className="mt-4 text-xl md:text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                    ${item.price}
                </p>

                <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">View Details</span>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-md transition duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </Link>
    );
}
