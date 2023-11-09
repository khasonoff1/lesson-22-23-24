"use client";

import request from "@/server";
import Category from "@/types/category";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesList = () => {
    const params = useSearchParams();
    const [products, setProducts] = useState([] as Category[]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const { data } = await request.get<Category[]>("category");
                setProducts(data);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    return (
        <div>
            {loading
                ? "Loading..."
                : products.map((pr) => (
                      <div key={pr._id}>
                          <Link href={`/categories/${pr._id}`}>{pr.name}</Link>
                      </div>
                  ))}
        </div>
    );
};

export default CategoriesList;
