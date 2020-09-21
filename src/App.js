import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/shared/Header';
import ClientList from './components/client/ClientList'
import Client from './components/client/Client'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ClientAdd from './components/client/ClientAdd';



function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path="/api/clients" component={ClientList}/>
          <Route exact path="/api/clients/post" component={ClientAdd}/>
          <Route path="/api/clients/:id" component={Client} />
        </Switch>
    </Router>
  );
}


export default App;

