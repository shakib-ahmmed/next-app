// app/items/[id]/page.tsx
import Image from "next/image";

interface Item {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Props {
  params: { id: string };
}

export default async function ItemDetailPage({ params }: Props) {
  const { id } = params;

  // Fetch the item from your backend (SSR)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Item not found");
  }

  const item: Item = await res.json();

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-96 relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded shadow"
            unoptimized 
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-6">${item.price}</p>
        </div>
      </div>
    </div>
  );
}
