"use client";

import request from "@/server";
import useAuth from "@/store/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            const userData = { username: e.currentTarget.username.value, password: e.currentTarget.password.value };
            const {
                data: { accesstoken, user },
            } = await request.post(`auth/login`, userData);
            setIsAuthenticated(user);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", accesstoken);
            router.push("/");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={login}>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
