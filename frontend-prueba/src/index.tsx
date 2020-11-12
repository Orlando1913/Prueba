import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import UsuarioList from './components/Usuarios/UsuarioList';
import UsuarioForm from './components/Usuarios/UsuarioForm';
import Navbar from './components/NavBar/Navbar';


import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
        <div className="container p-4">
        <Switch>
          <Route exact path="/" component={UsuarioList} />
          <Route path="/nuevo-usuario" component={UsuarioForm} />
          <Route path="/actualizar/:id" component={UsuarioForm} />
        </Switch>
        <ToastContainer />
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
