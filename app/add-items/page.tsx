"use client";

import toast from "react-hot-toast";

export default function AddItem() {
    const submit = () => {
        toast.success("Item added successfully!");
    };

    return (
        <div className="p-10">
            <button
                onClick={submit}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Add Item
            </button>
        </div>
    );
}
