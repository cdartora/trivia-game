import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <div className="App">
        <header className="App-header">
          {/* <img src={ logo } className="App-logo" alt="logo" /> */}
          <Route exatc path="/" component={ Login } />
        </header>
      </div>
    </Switch>
  );
}
