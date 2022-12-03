//Edit a user
const handleEditUser = async (data: {
  id: string;
  name: string;
  age: number | null;
}) => {
  await fetch(`http://localhost:3001/user/${data.id}`, {
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
};

export default handleEditUser;
