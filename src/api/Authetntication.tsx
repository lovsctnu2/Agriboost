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
        const payload = res.data.payload;
        if (res.status ==200){
            callback(true, payload);
        } 
       
        
    } catch (error) {
        console.log(error)
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
    phone: string;
    password: string;
}

export const signUp = async (data: SignUp, callback: Callback): Promise<void> => {
    try {
        const res = await axiosInstance.post("/v1/users/register", data);
        console.log(res)
        const payload = res.data.payload;
        if (res.status ==200){
            callback(true, payload);
        } 
        
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