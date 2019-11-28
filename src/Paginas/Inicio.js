import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import '../App.css';

class Inicio extends Component {

    render() {
        return (
            <div className="">
                <div className='blurred-container'>
                    <div className="motto">
                        <div>
                            <div className="col">
                                <h3 className="App-titulo">G E S T I Ó N &nbsp;&nbsp;D E P O R T I V A </h3>
                            </div>
                            <div className="col">
                                <h5 className="App-subtitulo">S o f t w a r e</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qwerty blurred-container">
                    <div className="motto">
                        <div>
                            <div className="col">
                                <div className="justify-content-center align-items-center">
                                    <img src={logo} className="rounded mx-auto d-block" Style="width: 200px; height: 100px;" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blurred-container'>
                    <div className="motto">
                        <div className="card-body">
                            <div class="row">
                                <button className="App-button"> E N T R A R</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inicio;