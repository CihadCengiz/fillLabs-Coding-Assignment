//Delete a user
const handleDeleteUser = async (id: string) => {
  await fetch(`http://localhost:3001/user/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default handleDeleteUser;
