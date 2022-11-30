import React from 'react';
import './App.css';
import Users from './components/Users';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={<Users />} />
          <Route path="/edit" element={<Users />} />
          {/* <Route path="/delete" element={<DeleteComponent  />} /> */}
          <Route path="/new" element={<Users />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
