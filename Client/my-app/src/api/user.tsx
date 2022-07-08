import instance from "./instance";


export const login = (user:any) => {
    const url = "/signin";
    return instance.post(url, user);
} 

