import React from 'react';
import { Provider } from 'react-redux';
// import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import store from './Redux/store';

export default function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          {/* <img src={ logo } className="App-logo" alt="logo" /> */}
          <Login />
        </header>
      </div>
    </Provider>
  );
}
