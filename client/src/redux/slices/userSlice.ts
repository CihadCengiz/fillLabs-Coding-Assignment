import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserModel} from "../models/userModel"

const initialUserState: UserModel = {
        users: [],
        id: '',
        name: '',
        age: null
}

const userSlice = createSlice({
    name: "user",
    initialState:initialUserState,
    reducers: {
        setUsers: (state, action: PayloadAction<[]>) => {
            state.users = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAge: (state, action: PayloadAction<number|null>) => {
            state.age = action.payload
        },
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }})

export default userSlice;