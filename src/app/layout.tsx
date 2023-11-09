import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

import Children from "@/types/children";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Vodiy Parfum",
    description: "Vodiy Parfum - e-commerce website",
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
