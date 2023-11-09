import Children from "@/types/children";
import React, { Fragment } from "react";

const AdminLayout = ({ children }: Children) => {
    return (
        <Fragment>
            <header>AdminHeader</header>
            <main>{children}</main>
            <footer>AdminFooter</footer>
        </Fragment>
    );
};

export default AdminLayout;
