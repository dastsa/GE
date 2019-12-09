import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import bd from "../../Profesor/bd";
import Logo from '../../../imagenes/hazard.jpg';
//import Acudientes from "./SubAcudientes";

class ParteMedico extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">


                            <div className="row container-fluid">

                                <div className="col-12">
                                    <div className="form-group margin">
                                        <img className="rounded-circle" Style="border: 1px solid transparent;" src="https://www.juventuz.com/data/avatars/m/21/21868.jpg?1560872557" alt="" />
                                    </div>
                                    <div className="form-group margin">
                                        <p></p>
                                        <p>Cristiano Ronaldo</p>
                                    </div>
                                    <div className="form-group margin">
                                        <p></p>
                                        <p>DC/EI</p>
                                    </div>

                                </div>
                            </div>

                            <div className="row">

                                <div className="col-12">
                                    <div className="form-group margin2">
                                        <textarea className="style-0 margin Input-Style textinput" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>
                                    <div className="form-group margin2">
                                        <textarea className="style-0 margin Input-Style textinput" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group margin2">
                                        <textarea className="style-0 margin Input-Style textinput" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div className="form-group margin2">
                                        <textarea className="style-0 margin Input-Style textinput" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group margin">
                                <button type="button" className="Btn-aceptar margin">Enviar</button>
                            </div>
                        </div>



                    </form>
                </div>
            </div>

        );
    }
}
export default ParteMedico;