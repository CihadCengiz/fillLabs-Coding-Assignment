//Create new user
const handleNewUser = async (data: {}) => {
  await fetch('http://localhost:3001/user', {
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
};

export default handleNewUser;
