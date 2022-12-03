# Fill-Labs Technical Assignment

User management system built using -> GO | React.js | Typescript | Redux | MongoDB | Gin Web Framework

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install dependencies.

```bash
npm install
```

## Available Scripts

```bash
# Front End
npm start

# Back End
go run main.go
```

## API's

```typescript
# /users -> GET -> getAllUsers = async () => { returns all users from database }

# /user -> POST -> handleNewUser = async (data: { name, age }) => { adds new user to database }

# /user -> PUT -> handleEditUser = async (userData: { id, name, age }) => { updates the specified user from database }

# /user -> DELETE -> handleDeleteUser = async (userId) => { deletes the specified user from database }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)