import userSlice from '../slices/userSlice';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import getAllUsers from '../../handlers/getAllUsers';
import handleNewUser from '../../handlers/handleNewUser';
import handleEditUser from '../../handlers/handleEditUser';
import handleDeleteUser from '../../handlers/handleDeleteUser';

export const userActions = userSlice.actions;

//Get all users
export const fetchUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response = await getAllUsers();
    dispatch(userActions.setUsers(response.data));
    if(response.data) dispatch(userActions.setSelectedId(response.data[0].id));
  };
};

//Create new user
export const fetchNewUser = (userData: {}): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    await handleNewUser(userData);
    const response = await getAllUsers();
    dispatch(userActions.setUsers(response.data));
  };
};

//Edit a user
export const fetchEditUser = (userData: {
  id: string;
  name: string;
  age: number | null;
}): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    await handleEditUser(userData);
    const response = await getAllUsers();
    dispatch(userActions.setUsers(response.data));
  };
};

//Delete a user
export const fetchDeleteUser = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    await handleDeleteUser(id);
    const response = await getAllUsers();
    dispatch(userActions.setUsers(response.data));
  };
};

//Set state.name
export const setUserName = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(userActions.setName(name));
  };
};

//Set state.age
export const setUserAge = (
  age: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(userActions.setAge(age));
  };
};

//Set selected ID to update or delete
export const setSelectedId = (
  id: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(userActions.setId(id));
  };
};
