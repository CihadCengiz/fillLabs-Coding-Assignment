import React, { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchDeleteUser,
  fetchUsers,
  setSelectedId,
} from '../redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { User } from './Users';

export default function DeleteUser() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users); //Get users from the state
  const userId = useAppSelector((state) => state.user.id); //Get user id from the state

  //Set state.users.selectedId to input value
  const handleSelectedId = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedId(e.target.value));
  };

  //Delete user handler
  const handleDeleteUser = () => {
    dispatch(fetchDeleteUser(userId));
  };

  //Get and set users on every render
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  //Update selectedId if users array changes
  useEffect(() => {
    if(users.length > 0) {
      const selectedId = users.filter((_, index) => index === 0);
      dispatch(setSelectedId(selectedId[0]['id']));
    }
  },[users])

  return (
    <div id='form'>
      <form>
        <label htmlFor='row'>Choose an ID to delete:</label>
        <select name='row' id='row' onChange={(e) => handleSelectedId(e)}>
          {users &&
            users.map((user: User) => {
              return (
                <option value={user.id} key={user.id}>
                  {user.id}
                </option>
              );
            })}
        </select>
      </form>
      <div className='button-wrapper'>
        <Link to='/'>
          <button>Back</button>
        </Link>
        <Link to='/'>
          <button onClick={handleDeleteUser}>Delete</button>
        </Link>
      </div>
    </div>
  );
}
