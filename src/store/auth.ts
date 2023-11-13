
import User from "@/types/user";
import { create } from "zustand";

interface AuthState {
    isAuthenticated: boolean,
    user: User | null,
    setIsAuthenticated: (user?: User | null) => void
}

const userJson = typeof window !== "undefined" ? window.localStorage.getItem('user') : null;

const token = typeof window !== "undefined" ? window.localStorage.getItem('token') : false


const user = userJson ? JSON.parse(userJson) : null

const useAuth = create<AuthState>()((set, get) => ({
    isAuthenticated: Boolean(token),
    user,
    setIsAuthenticated: (user = null) => {
        const { isAuthenticated } = get()
        set({ isAuthenticated: !isAuthenticated, user })
    }
}))

export default useAuth