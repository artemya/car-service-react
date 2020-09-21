import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/shared/Header';
import ServiceList from './components/service/ServiceList'
import ClientList from './components/client/ClientList'
import Client from './components/client/Client'
import Service from './components/service/Service'
import ClientAdd from './components/client/ClientAdd';
import ServiceAdd from './components/service/ServiceAdd'


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
          <Route exact path="/api/clients" component={ClientList}/>
          <Route exact path="/api/clients/post" component={ClientAdd}/>
          <Route path="/api/clients/:id" component={Client} />
        </Switch>

        <Switch>
          <Route exact path="/api/services" component={ServiceList}/>
          <Route exact path="/api/services/post" component={ServiceAdd}/>
          <Route path="/api/services/:id" component={Service} />
        </Switch>
    </Router>
  );
}


export default App;

