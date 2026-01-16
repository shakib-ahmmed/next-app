"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function ItemCard({ item }: { item: Item }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group"
        >
            <Link
                href={`/items/${item.id}`}
                className="block bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
            >
                {/* Image */}
                <div className="relative w-full h-72 md:h-80 lg:h-96">
                    {item.image ? (
                        <motion.div whileHover={{ scale: 1.1 }} className="relative w-full h-full">
                            <Image
                                loader={({ src }) => `${process.env.NEXT_PUBLIC_API_URL}${src}`}
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="/placeholder.png"
                            />
                        </motion.div>
                    ) : (
                        <div className="bg-gray-200 dark:bg-slate-700 w-full h-full flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col justify-between h-[240px] md:h-[260px] lg:h-[280px]">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2 truncate">
                        {item.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg line-clamp-3">
                        {item.description}
                    </p>
                    <p className="mt-4 text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-300">
                        ${item.price}
                    </p>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                            View Details
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="px-5 py-2 md:px-6 md:py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md transition-all duration-300"
                        >
                            Buy Now
                        </motion.button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
