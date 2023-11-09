import { roboto_mono } from "@/assets/fonts";
import NavLink from "../shares/NavLink";

const PublicHeader = () => {
    return (
        <header className={roboto_mono.className}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
        </header>
    );
};

export default PublicHeader;
