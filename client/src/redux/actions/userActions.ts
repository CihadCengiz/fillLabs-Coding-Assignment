import userSlice from "../slices/userSlice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "../store";
import getAllUsers from "../services/getAllUsers";

export const userActions = userSlice.actions

export const fetchUsers = ():ThunkAction<void,RootState,unknown,AnyAction> => {
    return async (dispatch) => {
            const response = await getAllUsers();
            dispatch(userActions.setUsers(response.data))
    }
}
