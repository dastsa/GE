import React, { Component } from "react";
import $ from 'jquery';
import datos from '../Maestros/selectBd';
import bd from "../Admin/bd.json";
import bdj from "../Admin/bdj.json";
import Logo from '../../imagenes/guarne.jpg';

class Grupos extends Component {

    render() {
        return (
            <div className="container-fluid">
                <form className="container-contact100" action="">

                    <div>

                        <div className="row">

                            <div className="form-group row col-lg-6 col-sm-12 mr-2" Style="margin-top: 14px;" >
                                <label className="App-subtitulo2" htmlFor="inicio">CATEGORIA:</label>
                                <select id="categoria" className=" form-control Input-Style">
                                    <option value="value1">Seleccione</option>
                                    <option value="value2">Sub 15</option>
                                    <option value="value3">Primera B</option>
                                </select>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="cantJugadores" Style="margin-top: 25px;">CANT. JUGADORES:</label>
                                <input Style="background-color:transparent;  height: 39px; " type="text" className="removedisabled form-control Input-Style" id="cantJugadores" name="cantJugadores" disabled/>
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-12 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="jugxgrupo">JUGADORES POR GRUPO:</label>
                                <input Style="background-color:transparent;" type="text" className="removedisabled form-control Input-Style" id="jugxgrupo" name="jugxgrupo" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="inicio">FECHA INICIO:</label>
                                <input Style="background-color:#26262C;" type="date" className="removedisabled form-control Input-Style" id="inicio" name="inicio" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="inicio">FECHA FINAL:</label>
                                <input Style="background-color:#26262C;" type="date" className="removedisabled form-control Input-Style" id="final" name="final" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>


                        <div className="row">
                            <div className="form-group row col-lg-4 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                <button id="disablebtn" type="button" className="Btn-aceptar">Guardar</button>
                            </div>
                        </div>


                    </div>

                </form>
            </div >
        );
    }
}
export default Grupos;