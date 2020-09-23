import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/shared/Header';
import ServiceList from './components/service/ServiceList'
import ClientList from './components/client/ClientList'
import MaterialList from './components/material/MaterialList'
import Client from './components/client/Client'
import Check from './components/check/Check';
import ClientAdd from './components/client/ClientAdd';
import ServiceAdd from './components/service/ServiceAdd'
import MaterialAdd from './components/material/MaterialAdd';
import CheckAdd from './components/check/CheckAdd';
import AddInCheck from './components/check/AddInCheck';


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
          <Route exact path="/api/clients/:id/checks/post" component={CheckAdd} />
          <Route exact path="/api/clients/:id/checks/:checkId" component={Check} />
          <Route exact path="/api/clients/:id/checks/:checkId/post" component={AddInCheck} />
          <Route path="/api/clients/:id/checks" component={Client} />
       
          <Route exact path="/api/services" component={ServiceList}/>
          <Route exact path="/api/services/post" component={ServiceAdd}/>

          <Route exact path="/api/materials" component={MaterialList}/>
          <Route exact path="/api/materials/post" component={MaterialAdd}/>
        </Switch>
    </Router>
  );
}


export default App;

