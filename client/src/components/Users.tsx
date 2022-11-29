import React, { useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  age: number;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: 'jacob', age: 5 },
    { id: "2", name: 'kaan', age: 13 },
  ]);
  const [rowCount, setRowCount] = useState<number>(0)
  const [age, setAge] = useState<number>() //bug -> input can be a string
  const [name, setName] = useState<string>('')
  const [selected, setSelected] = useState<number>(1)

  useEffect(() => {
    const rows = document.getElementsByTagName('tr').length;
    setRowCount(rows)
  }, []);

  const handleNewUser = () => {
    fetch('localhost:8080/')
  };

  const createSelectItems = () => {
    let items = [];         
    for (let i = 1; i < rowCount; i++) {             
         items.push(<option key={i} value={i}>{i}</option>);   
    }
    return items;
}

  return (
    <div id='data-table'>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
          {users.map((user: User) => {
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
          <input id='name' placeholder={'Name'} onChange={(e) => setName(e.target.value)} />
          <input id='age' placeholder={'Age'} onChange={(e) => setAge(parseInt(e.target.value))} />
          <label htmlFor='row'>Choose a row:</label>
          <select name='row' id='row' onChange={(e) => setSelected(parseInt(e.target.value))}>
           {createSelectItems()}
          </select>
        </form>
        <button onClick={handleNewUser}>New</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
