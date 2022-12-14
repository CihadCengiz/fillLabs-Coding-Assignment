import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import {
  fetchNewUser,
  setUserName,
  setUserAge,
} from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { uniqueId } from 'lodash';

export default function NewUser() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.user.name); //Get user name from the state
  const age = useAppSelector((state) => state.user.age); //Get user age from the state - bug -> input can be a string

  const data = { id: uniqueId(), name, age }; //Data for creating new user

  //Set input value to state.user.age
  const handleNewAge = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserAge(parseInt(e.target.value)));
  };

  //Set input value to state.user.name
  const handleNewName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  //Create new user handler
  const handleNewUser = () => {
    dispatch(fetchNewUser(data));
  };

  return (
    <div>
      <form data-testid="form">
        <input
          id='name'
          data-testid="input-1"
          placeholder={'Name'}
          onChange={(e) => handleNewName(e)}
        />
        <input id='age' data-testid="input-2" placeholder={'Age'} type="number" onChange={(e) => handleNewAge(e)} />
      </form>
      <div className="button-wrapper" role="button">
        <Link to='/'>
          <button data-testid="button-1">Back</button>
        </Link>
        <Link to='/'>
          <button data-testid="button-2" onClick={handleNewUser}>Create</button>
        </Link>
      </div>
    </div>
  );
}
