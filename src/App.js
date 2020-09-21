import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Header from './components/shared/Header';
import Client from './components/client/Client'
import ClientService from './services/ClientService'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [ clients, setClient ] = useState([]);

  useEffect(() => {
    getClients();
  }, [])

  const getClients = () => {
    ClientService.getAll()
      .then(respone => {
        setClient(respone.data);
        console.log(respone.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  return (

    <Router>
        <Header />

        <Switch>
          <Route path="/">
            <Client clients={clients} />
          </Route>
        </Switch>
    </Router>
  );
}


export default App;

