import { Metadata } from "next";
import Image from "next/image";

import "./style.css";

export const metadata: Metadata = {
    title: "Vodiy Parfum | Contact",
    description: "Vodiy Parfum | Contact - e-commerce website",
};

const ContactPage = () => {
    return (
        <section>
            <h1>ContactPage</h1>
            <div className="contact-image">
                <Image src="/contact.webp" alt="contact" fill objectFit="contain" />
            </div>
        </section>
    );
};

export default ContactPage;
