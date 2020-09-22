import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/shared/Header';
import ServiceList from './components/service/ServiceList'
import ClientList from './components/client/ClientList'
import MaterialList from './components/material/MaterialList'
import Client from './components/client/Client'
import Service from './components/service/Service'
import Material from './components/material/Material';
import ClientAdd from './components/client/ClientAdd';
import ServiceAdd from './components/service/ServiceAdd'
import MaterialAdd from './components/material/MaterialAdd';


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

          <Route exact path="/api/services" component={ServiceList}/>
          <Route exact path="/api/services/post" component={ServiceAdd}/>
          <Route path="/api/services/:id" component={Service} />

          <Route exact path="/api/materials" component={MaterialList}/>
          <Route exact path="/api/materials/post" component={MaterialAdd}/>
          <Route exact path="/api/materials/:id" component={Material}/>
        </Switch>
    </Router>
  );
}


export default App;

