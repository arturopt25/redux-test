import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Register from './Components/Register'
import Recarga from './Components/Recarga'
import Billetera from './Components/Billetera'
import Pagar from './Components/Pagar'
import Confirmar from './Components/Confirmar'
import Consultar from './Components/Consultar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Billetera />
          </Route>

          <Route path="/confirmar">
            <Confirmar />
          </Route>

          <Route path="/consultar">
            <Consultar />
          </Route>

          <Route path="/pagar">
            <Pagar />
          </Route>

          <Route path="/recarga">
            <Recarga />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

        </Switch>
        
      </Router> 
    </div>
  );
}

export default App;
