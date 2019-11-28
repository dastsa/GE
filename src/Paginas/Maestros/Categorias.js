import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../imagenes/logo2.png'

class Categorias extends Component {
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
    };
    render() {
        return (       
                    <div className="container-contact100">
                        <form className='col-' action="">
                            <div className="form-group">
                                <label for="generoCat" className="App-subtitulo2">GENERO DE LA CATEGORÍA:</label>
                                <select id="generoCat" className="Input-Style form-control form-group">
                                    <option selected>Elige...</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="ciudad" className="App-subtitulo2">EDAD DE LA CATEGORÍA:</label>
                                <select id="ciudad" className="Input-Style form-control form-group">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="nit" className="App-subtitulo2">DÍAS DE ENTRENAMIENTO:</label>
                                <select id="ciudad" className="Input-Style form-control form-group">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="horasEntre" className="App-subtitulo2">HORA DE ENTRENAMIENTO:</label>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="horaIni" className="App-subtitulo2">HORA DE INICIO:</label>
                                            <input type="time" className="Input-Style form-control form-group" id="horaIni" placeholder="Hora Inicio" name="horaIni" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="horaFin" className="App-subtitulo2">HORA FINAL:</label>
                                            <input type="time" className="Input-Style form-control form-group" id="horaFin" placeholder="Hora Final" name="horaFin" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="Btn-aceptar" type="submit"></button>
                            </div>
                        </form>
                    </div>
        );
    }
}
export default Categorias;