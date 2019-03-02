import React, { Component } from 'react';

import Login from './views/Login';
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Procesos from "./views/Procesos";
import AppLayout from "./components/AppLayout";
import Documentos from "./views/Documentos";
import DocumentosSubir from "./views/DocumentosSubir";
import Restablecer from './views/Restablecer';

class App extends Component {
  render() {
    return (
        <div>
            <Router className="App">
                <div>
                    <Route exact path="/" component={this.LoginView} />
                    <Route exact path="/dashboard" component={this.DashboardView} />
                    <Route exact path="/procesos" component={this.ProcesosView} />
                    <Route exact path="/estudiantes" component={this.EstudiantesView} />
                    <Route exact path="/administradores" component={this.AdministradoresView} />
                    <Route exact path="/documentos" component={this.DocumentosView} />
                    <Route exact path="/documentos/subir" component={this.DocumentosSubirView} />
                    <Route exact path="/restaurar/:token" component={this.Rest} />
                    <Route exact path="/login" component={this.LoginView} />

                </div>
            </Router>
        </div>
    );
  }

  
  Rest = ({match}) => {
    return (<Restablecer token={match.params.token}/>);
  };

  LoginView = () => {
    return (<Login/>);
  };

    DashboardView = () => {
        return (
            <AppLayout view={"0"} type={"basic"}>

            </AppLayout>
        );
    };

    AdministradoresView = () => {
        return (
            <AppLayout view={"1"} type={"basic"}>

            </AppLayout>
        );
    };


    EstudiantesView = () => {
        return (
            <AppLayout view={"2"} type={"basic"}>

            </AppLayout>
        );
    };

    ProcesosView = () => {
        return (
            <AppLayout view={"3"} type={"basic"}>
                <Procesos/>
            </AppLayout>
        );
    };


    DocumentosView = () => {
        return (
            <AppLayout view={"4"} type={"basic"}>
                <Documentos/>
            </AppLayout>
        );
    };

    DocumentosSubirView = () => {
        return (
            <AppLayout view={"4"} type={"basic"}>
                <DocumentosSubir/>
            </AppLayout>
        );
    };
}


export default App;
