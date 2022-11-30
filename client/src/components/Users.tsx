import React, { useState, useEffect } from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks/hooks"
import {fetchUsers} from "../redux/actions/userActions"

type User = {
  id: string;
  name: string;
  age: number;
};


export default function Users() {
  // const [users, setUsers] = useState<User[]>([]);
  const users = useAppSelector(state => state.user.users)
  const dispatch = useAppDispatch()

  const [rowCount, setRowCount] = useState<number>(0);
  const [age, setAge] = useState<number>(); //bug -> input can be a string
  const [name, setName] = useState<string>('');
  const [selected, setSelected] = useState<number>(1); //bug -> update selected after edit

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  useEffect(() => {
    getRowCount()
  },[users])

  const getRowCount = () => {
    const rows = document.getElementsByTagName('tr').length;
    setRowCount(rows);
    setSelected(rows-1)
  }

  // const getAllUsers = async () => {
  //   await fetch('http://localhost:3001/users')
  //       .then(response => response.json())
  //       .then(data => setUsers(data.data.data)); //fix response object
  //       getRowCount()
  // }

  const handleNewUser = async() => {
    const data = { id: `${rowCount}`, name: name, age: age };

    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
          dispatch(fetchUsers())

  };

  const handleEditUser = async () => {
    const data = { name: name, age: age}
    const userId = selected
    await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
      dispatch(fetchUsers())

  }

  const handleDeleteUser = async () => {
    const userId = selected
    await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
      dispatch(fetchUsers())

  }

  const createSelectItems = () => {
    let items = [];
    for (let i = 1; i < rowCount; i++) {
      items.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return items;
  };

  return (
    <div id='data-table'>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
          {users && users.map((user: User) => {
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
      <div id='form'>
        <form>
          <input
            id='name'
            placeholder={'Name'}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id='age'
            placeholder={'Age'}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
          <label htmlFor='row'>Choose a row:</label>
          <select
            name='row'
            id='row'
            onChange={(e) => setSelected(parseInt(e.target.value))}
          >
            {createSelectItems()}
          </select>
        </form>
        <button onClick={handleNewUser}>New</button>
        <button onClick={handleEditUser}>Edit</button>
        <button onClick={handleDeleteUser}>Delete</button>
      </div>
    </div>
  );
}
