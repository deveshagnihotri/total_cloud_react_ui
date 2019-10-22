import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/header';
import HomePage from './components/landingpage';
import SignUp from './components/common/auth';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route to="/home" exact component={HomePage} />
        <Route to="/auth" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
