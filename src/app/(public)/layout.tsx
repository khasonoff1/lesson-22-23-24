import { roboto_mono } from "@/assets/fonts";
import PublicHeader from "@/components/layout/PublicHeader";
import Children from "@/types/children";
import React, { Fragment } from "react";

const PublicLayout = ({ children }: Children) => {
    return (
        <Fragment>
            <PublicHeader />
            <main className={roboto_mono.className}>{children}</main>
            <footer className={roboto_mono.className}>PublicFooter</footer>
        </Fragment>
    );
};

export default PublicLayout;
