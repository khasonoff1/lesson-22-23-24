
import User from "@/types/user";
import { create } from "zustand";

interface AuthState {
    isAuthenticated: boolean,
    user: User | null,
    setIsAuthenticated: (user: User) => void
}

const userJson = localStorage.getItem('user');

console.log(userJson);


const user = userJson ? JSON.parse(userJson) : null

const useAuth = create<AuthState>()((set, get) => ({
    isAuthenticated: Boolean(localStorage.getItem('token')),
    user,
    setIsAuthenticated: (user) => {
        const { isAuthenticated } = get()
        set({ isAuthenticated: !isAuthenticated, user })
    }
}))

export default useAuth