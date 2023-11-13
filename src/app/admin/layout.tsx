'use client';

import Children from "@/types/children";
import React, { Fragment } from "react";
import withAuth from "../hoc/with-auth";

const AdminLayout = ({ children }: Children) => {
    return (
        <Fragment>
            <header>AdminHeader</header>
            <main>{children}</main>
            <footer>AdminFooter</footer>
        </Fragment>
    );
};

export default withAuth(AdminLayout);
