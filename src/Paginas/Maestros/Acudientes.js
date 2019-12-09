import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Logo from '../../imagenes/logo20.png';
import datos from './selectBd';

class Acudientes extends Component {

    state = {
        tipoDoc: "",
        nroDoc: "",
        lugarExp: "",
        fechaExp: "",
        nomAcu: "",
        apeAcu: "",
        profesionAcu: "",
        correoAcu: "",
        direccionAcu: "",
        barrioAcu: "",
        codPostalAcu: "",
        estratoAcu: "",
        celularAcu: "",
        telFijoAcu: "",
    };
    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }


    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
    };
    ocultar() {
        $("#seccion1, #seccion3").hide();
        $("#seccion2").show();
    };
    ocultar2() {
        $("#seccion1, #seccion2").hide();
        $("#seccion3").show();
    };

    mostrar() {
        $("#seccion2, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion1").show();
    };
    mostrar2() {
        $("#seccion1, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion2").show();
    };
    render() {
        return (
            <div class="container-fluid">
                <div className="container-contact100 ">
                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label for="tipoDocP" className="App-subtitulo2">TIPO DE DOCUMENTO:</label>
                                <select onChange={this.onKeyPress('tipoDoc')} id="tipoDoc" className="form-control Input-Style">
                                {datos.map((data) => {
                                            return (
                                                <option>{data.dato}</option>
                                            );
                                        })}
                                </select>
                                    <div className="form-group">
                                        <label for="nroDoc" className="App-subtitulo2">NUMERO DE DOCUMENTO:</label>
                                        <input onChange={this.onKeyPress('nroDoc')} type="text" className="form-control Input-Style" id="nroDoc" placeholder="Numero de documento de identidad" name="nroIp" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="lugarExp" className="App-subtitulo2">LUGAR DE EXPEDICION:</label>
                                        <input onChange={this.onKeyPress('lugarExp')} type="text" className="form-control Input-Style" id="lugarExp" placeholder="Ciudad" name="lugarExp" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="fechaExp" className="App-subtitulo2">FECHA DE EXPEDICION:</label>
                                        <input onChange={this.onKeyPress('fechaExp')} type="date" className="form-control Input-Style" id="fechaExp" name="fechaExp" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar Input-Style" Style="width:33%">33%</div>
                                    </div>
                                </div>
                                </div>
                                <div id="seccion2">
                                    <div className="form-group">
                                        <label for="nomAcu" className="App-subtitulo2">NOMBRES:</label>
                                        <input onChange={this.onKeyPress('nomAcu')} type="text" className="form-control Input-Style" id="nomAcu" placeholder="Nombre" name="nomAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="apeAcu" className="App-subtitulo2">APELLIDOS:</label>
                                        <input onChange={this.onKeyPress('apeAcu')} type="text" className="form-control Input-Style" id="apeAcu" placeholder="Apellidos" name="apeAcu"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="profesionAcu " className="App-subtitulo2">PROFESION:</label>
                                        <input onChange={this.onKeyPress('profesionAcu')} type="text" className="form-control Input-Style" id="profesionAcu" placeholder="Profesión" name="profesionAcu"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="ciudadNac" className="App-subtitulo2">CORREO ELECTRONICO:</label>
                                        <input onChange={this.onKeyPress('ciudadNac')} type="email" className="form-control Input-Style" id="correoAcu" placeholder="Apellidos" name="correoAcu"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div className="form-group">
                                                <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atrás</button>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div className="form-group">
                                                <button type="button" className="Btn-aceptar" onClick={this.ocultar2.bind(this)}>Siguiente</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar Input-Style" Style="width:66%">66%</div>
                                    </div>
                                </div>
                                <div id="seccion3">
                                    <div className="form-group">
                                        <label for="direccionAcu" className="App-subtitulo2">DIRECCION:</label>
                                        <input onChange={this.onKeyPress('direccionAcu')} type="text" className="form-control Input-Style" id="direccionAcu" placeholder="Direccion" name="direccionAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="barrioAcu" className="App-subtitulo2">BARRIO:</label>
                                        <input onChange={this.onKeyPress('barrioAcu')} type="text" className="form-control Input-Style" id="barrioAcu" placeholder="Barrio" name="barrioAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="codPostalAcu" className="App-subtitulo2">CODIGO POSTAL:</label>
                                        <input onChange={this.onKeyPress('codPostalAcu')} type="number" className="form-control Input-Style" id="codPostalAcu" placeholder="Codigo postal" name="codPostalPro" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="estratoAcu" className="App-subtitulo2">ESTRATO:</label>
                                        <input type="text" className="form-control Input-Style" id="estratoAcu" placeholder="URL de tu sitio web" name="estratoAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="telFijoAcu" className="App-subtitulo2">TELEFONO FIJO:</label>
                                        <input onChange={this.onKeyPress('telFijoAcu')} type="text" className="form-control Input-Style" id="telFijoAcu" placeholder="URL de tu sitio web" name="telFijoAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label for="celularAcu" className="App-subtitulo2">CELULAR:</label>
                                        <input onChange={this.onKeyPress('celularAcu')} type="text" className="form-control Input-Style" id="celularAcu" placeholder="URL de tu sitio web" name="celularAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div className="form-group">
                                                <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atrás</button>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div className="form-group">
                                                <button type="submit" className="Btn-aceptar">Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar Input-Style" Style="width:100%">100%</div>
                                    </div>
                                </div>
                               
                            </form>
                            </div>
                            </div>
                       
                    );
                }
            }

export default Acudientes;