import React, {useState, useEffect} from 'react'

type Props = {
    params: {};
}

type User = {
    id: string;
    name: string;
    age: number;
  };

export default function useGetUsers({params}: Props) {
    const [selected, setSelected] = useState<number>(1);
    const [users, setUsers] = useState<User[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);

    const getAllUsers = async () => {
        await fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => setUsers(data.data.data)); //fix response object
            getRowCount()
      }

      const getRowCount = () => {
        const rows = document.getElementsByTagName('tr').length;
        setRowCount(rows);
        setSelected(rows-1)
      }

      useEffect(() => {
        getAllUsers()
      }, []);
    
      useEffect(() => {
        getRowCount()
      },[users])
  return (
    <div>

    </div>
  )
}