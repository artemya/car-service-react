import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Client from './components/client/Client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Header />

        <Switch>
          <Route path="/">
            <Client />
          </Route>
        </Switch>
    </Router>
  );
}

