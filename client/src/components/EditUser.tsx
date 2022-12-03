import React, { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchEditUser,
  fetchUsers,
  setSelectedId,
  setUserAge,
  setUserName,
} from '../redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { User } from './Users';

export default function EditUser() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const name = useAppSelector((state) => state.user.name);
  const age = useAppSelector((state) => state.user.age); //bug -> input can be a string
  const userId = useAppSelector((state) => state.user.id);
  const data = { id: userId, name, age };

  //Set state.user.age to input value
  const handleNewAge = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserAge(parseInt(e.target.value)));
  };

  //Set state.user.name to input value
  const handleNewName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  //Set state.user.selectedId to input value
  const handleSelectedId = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedId(e.target.value));
  };

  //Edit selected user handler
  const handleEditUser = () => {
    dispatch(fetchEditUser(data));
  };

  //Get and set users on every render
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //Update selectedId if users array changes
  useEffect(() => {
    if (users.length > 0) {
      const selectedId = users.filter((_, index) => index === 0);
      dispatch(setSelectedId(selectedId[0]['id']));
    }
  }, [users]);

  return (
    <div>
      <form>
        <input
          id='name'
          placeholder={'Name'}
          onChange={(e) => handleNewName(e)}
        />
        <input id='age' placeholder={'Age'} onChange={(e) => handleNewAge(e)} />
        <label htmlFor='row'>Choose an ID to update:</label>
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
          <button onClick={handleEditUser}>Save</button>
        </Link>
      </div>
    </div>
  );
}
