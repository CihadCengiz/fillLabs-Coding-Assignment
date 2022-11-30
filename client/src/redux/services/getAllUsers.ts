
const getAllUsers = async () => {
    return await fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(data => data.data); //fix response object
}


export default getAllUsers;