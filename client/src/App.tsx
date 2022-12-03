import React from 'react';
import './App.css';
import Users from './components/Users';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import DeleteUser from './components/DeleteUser';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' element={<Users />} />
          <Route path='/edit' element={<EditUser />} />
          <Route path='/delete' element={<DeleteUser />} />
          <Route path='/new' element={<NewUser />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
