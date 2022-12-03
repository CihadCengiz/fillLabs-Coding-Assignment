import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks/hooks';
// import { fetchRowCount, fetchUsers } from '../redux/actions/userActions';
import { fetchUsers } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

//User type
export type User = {
  id: string;
  name: string;
  age: number;
};

export default function Users() {
  const dispatch = useAppDispatch(); //Define dispatch hook
  const users = useAppSelector((state) => state.user.users); //Get all users from the state
  
  //Get and Update users array on every render
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  return (
    <div id='data-table'>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
          {users &&
            users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td id={user.id}>{user.id}</td>
                  <td id={user.id}>{user.name}</td>
                  <td id={user.id}>{user.age}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div id='buttons'>
        <Link to='/new'>
          <button>New</button>
        </Link>
        <Link to='/edit'>
          <button>Edit</button>
        </Link>
        <Link to='/delete'>
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
}
