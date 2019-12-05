import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import logo from '../imagenes/logo200.png';
import LogoK from '../imagenes/LOGOK.png';
import '../App.css';

class Inicio extends Component {

    render() {
        return (
            <div className="container-fluid fondo1">
                <div className="row justify-content-center align-items-center" Style="border: 50px solid transparent;">
                    <div className="motto">
                        <div className="col">
                            <h3 className="App-titulo">G E S T I Ó N &nbsp;&nbsp;D E P O R T I V A </h3>
                        </div>
                        <div className="col">
                            <h5 className="App-subtitulo2">S o f t w a r e</h5>
                        </div>
                    </div>
                </div>
                <div className="row"  Style="border: 40px solid transparent;">
                    <div className="col">
                        <div className="justify-content-center align-items-center">
                            <img src={logo} className="rounded mx-auto d-block" alt="logo" />
                        </div>
                    </div>
                    </div>
                <div className="row justify-content-center align-items-center"  Style="border: 20px solid transparent;">
                    <div className="col-">
                        <div className="card-body">
                                <button className="App-button"> E N T R A R</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inicio;