"use client";

import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    console.log(router);

    return (
        <form>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
        </form>
    );
};

export default LoginForm;
