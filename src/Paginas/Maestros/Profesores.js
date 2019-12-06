
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Profesores extends Component {
    state = {
        tipoDoc: "",
        nroDoc: "",
        lugarExp: "",
        fechaExp: "",
        fechaNac: "",
        nomPro: "",
        apePro: "",
        ciudadNac: "",
        correo: "",
        rh: "",
        epsPro: "",
        direccionPro: "",
        barrioPro: "",
        codPostalPro: "",
        estrato: "",
        telFijo: "",
        celular: "",
        jornadaPro: "",
        pasaportePro: "",
        libreta: "",
        fotoPro: "",
        tallacPro: "",
        tallapPro: "",
    };
    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }

    constructor() {
        super();
        this.state = {
            acudientes: [1],
        }
    }
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
    };
    ocultar() {
        $("#seccion1, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion2").show();
    };
    ocultar2() {
        $("#seccion1, #seccion2, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion3").show();
    };
    ocultar3() {
        $("#seccion1, #seccion2, #seccion3, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion4").show();
    };
    mostrar() {
        $("#seccion2, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion1").show();
    };
    mostrar2() {
        $("#seccion1, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion2").show();
    };
    mostrar3() {
        $("#seccion1, #seccion2, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion3").show();
    };
    agregarAcudiente = (e) => {
        this.setState(state => {
            const list = state.acudientes.push(1);
            console.log(this.state.acudientes);
        });
    };
    render() {
        return (
            <div class="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label for="tipoDoc" className="App-subtitulo2">Tipo de documento:</label>
                                <select onChange={this.onKeyPress('tipoDoc')}id="tipoDoc" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Tarjeta de identidad</option>
                                    <option>Cédula de ciudadania</option>
                                    <option>Cédula de extranjería</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="nroDoc" className="App-subtitulo2">Nro de documento:</label>
                                <input onChange={this.onKeyPress('nroDoc')}type="text" className="form-control Input-Style" id="nroDoc" placeholder="Numero de documento de identidad" name="nroDoc" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="lugarExp" className="App-subtitulo2">Lugar de expedición:</label>
                                <input onChange={this.onKeyPress('lugarExp')}type="text" className="form-control Input-Style" id="lugarExp" placeholder="Ciudad" name="lugarExp" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="fechaExp" className="App-subtitulo2">Fecha de expedición:</label>
                                <input onChange={this.onKeyPress('fechaExp')} type="date" className="form-control Input-Style" id="fechaExp" name="fechaExp" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="fechaNac" className="App-subtitulo2">Fecha de nacimiento:</label>
                                <input onChange={this.onKeyPress('fechaNac')}type="date" className="form-control Input-Style" id="fechaNac" name="fechaNac" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                            </div>
                            <div className="progress">
                                <div className="progress-bar Input-Style" Style="width:25%">25%</div>
                            </div>
                        </div>
                        <div id="seccion2">
                            <div className="form-group">
                                <label for="nomPro" className="App-subtitulo2">Nombres:</label>
                                <input onChange={this.onKeyPress('nomPro')} type="text" className="form-control Input-Style" id="nomPro" placeholder="Nombre" name="nomPro" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="apePro" className="App-subtitulo2">Apellidos:</label>
                                <input onChange={this.onKeyPress('apePro')}type="text" className="form-control Input-Style" id="apePro" placeholder="Apellidos" name="apePro"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="ciudadNac" className="App-subtitulo2">Ciudad de nacimiento:</label>
                                <input onChange={this.onKeyPress('ciudadNac')}type="text" className="form-control Input-Style" id="ciudadNac" placeholder="Apellidos" name="ciudadNac"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="correo" className="App-subtitulo2">Correo electronico:</label>
                                <input onChange={this.onKeyPress('correo')}type="email" className="form-control Input-Style" id="correo" placeholder="Apellidos" name="correo"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="rh" className="App-subtitulo2">RH:</label>
                                <select onChange={this.onKeyPress('rh')}id="rh" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB-</option>
                                    <option>AB+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="epsPro" className="App-subtitulo2">EPS:</label>
                                <input onChange={this.onKeyPress('epsPro')}type="text" className="form-control Input-Style" id="epsPro" placeholder="EPS" name="epsPro"
                                    required />
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.ocultar2.bind(this)}>Siguiente</button>
                                    </div>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar Input-Style" Style="width:50%">50%</div>
                            </div>
                        </div>
                        <div id="seccion3">
                            <div className="form-group">
                                <label for="direccionPro" className="App-subtitulo2">Direccion:</label>
                                <input onChange={this.onKeyPress('direccionPro')}type="text" className="form-control Input-Style" id="direccionPro" placeholder="Direccion" name="direccionPro" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="barrioPro" className="App-subtitulo2">Barrio:</label>
                                <input onChange={this.onKeyPress('barrioPro')}type="text" className="form-control Input-Style" id="barrioPro" placeholder="Barrio" name="barrioPro" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="codPostalPro" className="App-subtitulo2">Codigo postal:</label>
                                <input onChange={this.onKeyPress('codPostalPro')}type="number" className="form-control Input-Style" id="codPostalPro" placeholder="Codigo postal" name="codPostalPro" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="estrato" className="App-subtitulo2">Estrato:</label>
                                <input onChange={this.onKeyPress('estrato')} type="text" className="form-control Input-Style" id="estrato" placeholder="URL de tu sitio web" name="estrato" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="telFijo" className="App-subtitulo2">Telefono fijo:</label>
                                <input onChange={this.onKeyPress('telFijo')} type="text" className="form-control Input-Style" id="telFijo" placeholder="URL de tu sitio web" name="telFijo" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="celular" className="App-subtitulo2">Celular:</label>
                                <input onChange={this.onKeyPress('celular')}type="text" className="form-control Input-Style" id="celular" placeholder="URL de tu sitio web" name="celular" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.ocultar3.bind(this)}>Siguiente</button>
                                    </div>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar Input-Style" Style="width:75%">75%</div>
                            </div>
                        </div>
                        <div id="seccion4">
                            <div className="form-group">
                                <label for="jornadaPro" className="App-subtitulo2">Jornada Entrenamiento:</label>
                                <select onChange={this.onKeyPress('jornadaPro')} id="jornadaPro" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Diurna</option>
                                    <option>Mixta</option>
                                    <option>Nocturna</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="pasaportePro" className="App-subtitulo2">Pasaporte:</label>
                                <input onChange={this.onKeyPress('pasaportePro')}type="text" className="form-control Input-Style" id="pasaportePro" placeholder="Pasaporte" name="pasaportePro" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="libreta" className="App-subtitulo2">Libreta Militar:</label>
                                <input onChange={this.onKeyPress('libreta')} type="text" className="form-control Input-Style" id="libreta" placeholder="Libreta Militar" name="libreta" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="fotoPro" className="App-subtitulo2">Foto de perfil:</label>
                                <input onChange={this.onKeyPress('fotoPro')} type="file" className="form-control Input-Style" id="fotoPro" name="fotoPro" required />
                            </div>
                            <div className="form-group">
                                <label for="tallacPro" className="App-subtitulo2">Talla de camisa:</label>
                                <select onChange={this.onKeyPress('tallacPro')} id="gradoPro" className="form-control Input-Style">
                                    <option>S</option>
                                    <option>L</option>
                                    <option>M</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="tallapPro" className="App-subtitulo2">Talla de pantalón:</label>
                                <select onChange={this.onKeyPress('tallapPro')} id="tallapPro" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>S</option>
                                    <option>L</option>
                                    <option>M</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar3.bind(this)}>Atras</button>
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
export default Profesores;