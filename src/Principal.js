import React, { Component } from 'react';
import Inicio from './Paginas/Maestros/Escuelas';
import Jugadores from './Paginas/Maestros/Jugadores';
import Profesores from './Paginas/Maestros/Profesores';
import Acudientes from './Paginas/Maestros/Acudientes';
import './App.css';

class Principal extends Component {
    render() {
        return (
            <div className="App-header">
                <Jugadores></Jugadores>
            </div>
        );
    }
}

export default Principal;