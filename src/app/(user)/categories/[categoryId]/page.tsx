import React from "react";
import DynamicMetaData from "@/types/dynamic-metadata";
import request from "@/server";
import Category from "@/types/category";
import Image from "next/image";

import "./style.css";

export async function generateMetadata({ params: { categoryId } }: DynamicMetaData) {
    const { data } = await request.get<Category>(`category/${categoryId}`);
    return {
        title: data.name,
        description: data.name,
    };
}

const CategoryPage = async ({ params: { categoryId } }: { params: { categoryId: string } }) => {
    const { data } = await request.get<Category>(`category/${categoryId}`);
    return (
        <div>
            <div className="category-image">
                <Image src={data.image.url} alt={data.name} fill objectFit="contain" />
            </div>
            {data.name}
        </div>
    );
};

export default CategoryPage;
