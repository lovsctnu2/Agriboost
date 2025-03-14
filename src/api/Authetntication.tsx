import axiosInstance from "./AxiosInstance";
import Cookies from "js-cookie";


interface ApiError {
    message: string;
}

interface Login {
    email: string;
    password: string;
}

type Callback = (status: boolean, res: string) => void;

export const login = async (data: Login, callback: Callback): Promise<void> => {
    try {
        const res = await axiosInstance.post("/v1/users/login", data);
        console.log(res)
        const token = res.data.payload.token;
        Cookies.set("token", token);
        callback(true, token);
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            const apiError = error as ApiError;
            callback(false, apiError.message || "Terjadi kesalahan");
        } else if (error instanceof Error) {
            callback(false, error.message || "Terjadi kesalahan");
        } else {
            callback(false, "Terjadi kesalahan");
        }
    }
};

interface SignUp {
    email: string;
    noHandphone: string;
    password: string;
}

export const SignUp = async (data: SignUp, callback: Callback): Promise<void> => {
    try {
        const res = await axiosInstance.post("/v1/users/login", data);
        const token = res.data.payload.token;
        Cookies.set("token", token);
        callback(true, token);
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
            const apiError = error as ApiError;
            callback(false, apiError.message || "Terjadi kesalahan");
        } else if (error instanceof Error) {
            callback(false, error.message || "Terjadi kesalahan");
        } else {
            callback(false, "Terjadi kesalahan");
        }
    }
};

export const logout = (): void => {
    Cookies.remove("token");
};