export default function ItemDetails({ params }: any) {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Item {params.id}</h1>
            <p>Full item details here.</p>
        </div>
    );
}
