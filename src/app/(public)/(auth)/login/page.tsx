import Image from "next/image";
import LoginForm from "@/components/form/LoginForm";
import "./style.css";

const LoginPage = () => {
    return (
        <div>
            <h1>LoginPage</h1>
            <div className="login-img">
                <Image src="https://img.lovepik.com/element/45009/8997.png_860.png" alt="Login" fill objectFit="contain" />
            </div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
