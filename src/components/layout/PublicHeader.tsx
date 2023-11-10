"use client";

import { roboto_mono } from "@/assets/fonts";
import NavLink from "../shares/NavLink";
import useAuth from "@/store/auth";

const PublicHeader = () => {
    const { user } = useAuth();
    return (
        <header className={roboto_mono.className}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            {user ? <NavLink href="/account">{user?.username}</NavLink> : <NavLink href="/login">Login</NavLink>}
            <NavLink href="/register">Register</NavLink>
        </header>
    );
};

export default PublicHeader;
