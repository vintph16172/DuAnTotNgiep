import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, editUser, getListUser, login, register, removeUser } from "../../../api/user";
import { UserType } from "../../../types/category";

export const getUserList:any = createAsyncThunk(
    "user/getListUser",
    async () => {
        const {data} = await getListUser();
        return data
    }
)

export const addUserSlide:any = createAsyncThunk(
    "user/addUser",
    async (user:UserType) => {
        const {data} = await addUser(user);
        return data
    }
)



export const editUserSlide:any = createAsyncThunk(
    "user/editUser",
    async (user:UserType) => {
        const {data} = await editUser(user);
        return data
    }
)

export const removeUserSlide:any = createAsyncThunk(
    "user/removeUser",
    async (id:string) => {
        const {data} = await removeUser(id);
        return data
    }
)

export const signIn:any = createAsyncThunk(
    "user/login",
    async (user:any) => {
        const {data} = await login(user);
        return data
    }
)

export const signUp:any = createAsyncThunk(
    "user/register",
    async (user:any, { rejectWithValue } ) => {
        try {
            const {data} = await register(user);
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)




const authSlide = createSlice({
    name:"user",
   
    initialState:{
        value:[],
        isAuthticated: false
    },
    reducers:{

        logout(){
            // state.value =[];
            localStorage.removeItem("user");
        }
    },
    extraReducers: (builer) => {
        builer.addCase(getUserList.fulfilled, (state, action) => {
            state.value = action.payload;
            // console.log(state.value);
            
        })

        builer.addCase(addUserSlide.fulfilled, (state:any, action) => {
            state.value.push(action.payload)
        })

        builer.addCase(editUserSlide.fulfilled, (state:any, action) => {
            console.log(state.value);
            state.value = state.value.map((item: { _id: any; }) => item._id === action.payload._id ? action.payload : item)
            console.log("edit state:"+ state.value);
            
        })
        builer.addCase(removeUserSlide.fulfilled,  (state:any, action:any) => {
            state.value = state.value.filter((arrow:any) => arrow._id !== action.payload._id);   
        })

        builer.addCase(signUp.fulfilled,  (state:any, action:any) => {
            state.value = action.payload 
        })

        builer.addCase(signIn.fulfilled,  (state:any, action:any) => {
            state.isAuthticated = true;
        })

        
    }
})
export const { logout } = authSlide.actions
export default authSlide.reducer;
