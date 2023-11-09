import DynamicMetaData from "@/types/dynamic-metadata";

export function generateMetadata({ params: { productId }, searchParams }: DynamicMetaData) {
    return {
        title: `Product | ${productId}`,
        description: `Lflkdsajfkldas lflkjf dslfjdskj fkdsjf kdsdffdf`,
    };
}

const ProductPage = () => {
    return <div>ProductPage</div>;
};

export default ProductPage;
