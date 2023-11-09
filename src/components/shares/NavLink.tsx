"use client";

import Children from "@/types/children";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string } & Children) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={pathname === href ? "active" : ""}>
            {children}
        </Link>
    );
};

export default NavLink;
