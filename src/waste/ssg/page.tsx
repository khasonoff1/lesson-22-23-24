// import request from "@/server";
// import Category from "@/types/category";
// import Link from "next/link";
// import React from "react";

// const SSG = ({ data }: { data: Category[] }) => {
//     return (
//         <div>
//             {data.map((pr) => (
//                 <div key={pr._id}>
//                     <Link href={`/categories/${pr._id}`}>{pr.name}</Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export async function getStaticProps() {
//     const { data } = await request.get<Category[]>("category");
//     return {
//         props: {
//             data,
//         },
//         revalidate: 60,
//     };
// }

// export default SSG;
