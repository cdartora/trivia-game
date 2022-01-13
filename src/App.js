import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import NotFound from './pages/NotFound';
import GambeBody from './pages/GambeBody';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/player" component={ GambeBody } />
      <Route component={ NotFound } />
    </Switch>
  );
}
