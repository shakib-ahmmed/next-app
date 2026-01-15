import ItemCard from "@/components/ItemCard";

const items = [
    { id: "1", name: "Item One", price: "$20" },
    { id: "2", name: "Item Two", price: "$40" },
    { id: "3", name: "Item Three", price: "$60" },
];

export default function ItemsPage() {
    return (
        <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}
