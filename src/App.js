import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/shared/Header';
import ClientList from './components/client/ClientList'
import Client from './components/client/Client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/api/clients">
            <ClientList />
          </Route>
          <Route path="/api/clients/:id">
            <Client />
          </Route>
        </Switch>
    </Router>
  );
}


export default App;

