import React, { Component } from 'react';
import Inicio from './Paginas/Maestros/Acudientes';

//import Jugadores from './Paginas/Maestros/Jugadores';
//import Profesores from './Paginas/Maestros/Profesores';
//import Acudientes from './Paginas/Maestros/Acudientes';
import './App.css';

class Principal extends Component {
    render() {
        return (
            <div className="App-header">
                <Inicio></Inicio>
            </div>
        );
    }
}

export default Principal;