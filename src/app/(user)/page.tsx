import { Metadata } from "next";
import LatestProducts from "@/components/list/LatestProducts";
import CategoriesList from "@/components/list/CategoriesList";

export const metadata: Metadata = {
    title: "Vodiy Parfum | Home",
    description: "Vodiy Parfum | Home - e-commerce website",
};

export default function Home() {
    return (
        <main>
            <LatestProducts />
            <CategoriesList />
        </main>
    );
}
