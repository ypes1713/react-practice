import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component = {ListEmployeeComponent} />
                <Route path="/employees" component = {ListEmployeeComponent} />
                <Route path="/add-employee" component = {CreateEmployeeComponent} />
                <Route path="/update-employee/:id" component = {UpdateEmployeeComponent} />
                <Route path="/view-employee/:id" component = {ViewEmployeeComponent} />
              </Switch>  
            </div>
          <FooterComponent />
        </div>
      </Router>   
    </div>

  );
}

export default App;
