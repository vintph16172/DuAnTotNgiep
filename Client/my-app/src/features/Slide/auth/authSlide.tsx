import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../../api/user";

export const signIn:any = createAsyncThunk(
    "user/login",
    async (user:any) => {
        const {data} = await login(user);
        return data
    }
)

const authSlide = createSlice({
    name:"user",
    initialState:{
        value:[]
    },
    reducers:{},
    extraReducers: (builer) => {
        
    }
})