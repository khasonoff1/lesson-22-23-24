import { Metadata } from "next";
import Image from "next/image";
import about from "@/assets/images/about.jpg";

export const metadata: Metadata = {
    title: "Vodiy Parfum | About",
    description: "Vodiy Parfum | About - e-commerce website",
};

const AboutPage = () => {
    return (
        <section>
            <h1>AboutPage</h1>
            <Image src={about} alt="About" style={{ width: "100%" }} />
        </section>
    );
};

export default AboutPage;
