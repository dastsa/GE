import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";

class ParteMedico extends Component {


    render() {
        return (
            <div className="container-fluid">

                <form className="container-contact100" action="">

                    <div className="row container-fluid">

                        <div className="form-group col-lg-6">
                            <div className="form-group margin">
                                <img className="rounded-circle" Style="border: 1px solid transparent;" src="https://www.juventuz.com/data/avatars/m/21/21868.jpg?1560872557" alt="" />
                            </div>
                        </div>
                        <div className="form-group margin">
                            <p Style="color:white;">Nombre:</p>
                            <p Style="color:white;">Cristiano Ronaldo</p>
                        </div>
                        <div className="form-group margin">
                            <p Style="color:white;">Posición</p>
                            <p Style="color:white;">DC/EI</p>
                        </div>

                        <div className="form-group margin">
                            <p Style="color:white;">Estado del jugador</p>
                            <p Style="color:white;">Bueno</p>
                        </div>

                    </div>


                    <div className="row">

                        <div className="form-group col-lg-12">

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Antecedentes patológicos."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Tratamientos farmacológicos."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Alergias (Medicamentos, alimentos, ácaros,etc)."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Historial de lesiones importantes."></textarea>
                        </div>

                        <div className="form-group col-lg-12">

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Problemas ortopédicos (Plantillas, columna, etc)."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Antecedentes familiares (Cardiopatías y otros)."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Auscultación, toma de tensión, análisis, etc."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Observaciónes."></textarea>

                            <textarea Style="color:white;" className="style-0 margin Input-Style textinput" placeholder="Otros controles"></textarea>

                        </div>

                    </div>

                </form>
                <div className="row">

                    <div className="form-group margin col-lg-12">
                        <button type="submit" className="Btn-aceptar margin">Enviar</button>
                    </div>


                </div>

            </div>

        );
    }
}
export default ParteMedico;