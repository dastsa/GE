import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";
import logo from '../../imagenes/cuadros logo.png'

class Jugadores extends Component {
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
    ocultar4() {
        $("#seccion1, #seccion2, #seccion3, #seccion4, #seccion6, #seccion7").hide();
        $("#seccion5").show();
    };
    ocultar5() {
        $("#seccion1, #seccion2, #seccion3, #seccion5, #seccion4, #seccion7").hide();
        $("#seccion6").show();
    };
    ocultar6() {
        $("#seccion1, #seccion2, #seccion3, #seccion5, #seccion6, #seccion4").hide();
        $("#seccion7").show();
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
    mostrar4() {
        $("#seccion1, #seccion2, #seccion3, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion4").show();
    };
    mostrar5() {
        $("#seccion1, #seccion2, #seccion3, #seccion6, #seccion4, #seccion7").hide();
        $("#seccion5").show();
    };
    mostrar6() {
        $("#seccion1, #seccion2, #seccion3, #seccion5, #seccion7, #seccion4").hide();;
        $("#seccion6").show();
    };
    agregarAcudiente = (e) => {
        this.setState(state => {
            const list = state.acudientes.push(1);
            console.log(this.state.acudientes)
        });
    };
    render() {
        return (
            <div className="App-header">
                <div className="container-contact100 ">
                    <div className="wrap-contact100">
                        <form className="col-" action="">
                            <div id="seccion1">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="tipoDoc">TIPO DE DOCUMENTO:</label>
                                    <select id="tipoDoc" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="nroI">NÚMERO DE DOCUMENTO:</label>
                                    <input type="text" className="form-control Input-Style" id="nroI" placeholder="Numero de documento de identidad" name="nroI" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="ciudad">LUGAR DE EXPEDICIÓN:</label>
                                    <input type="text" className="form-control Input-Style" id="lugarEx" placeholder="Ciudad" name="lugarEx" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="fechaEx">FECHA DE EXPEDICIÓN:</label>
                                    <input type="date" className="form-control Input-Style" id="fechaEx" name="fechaEx" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="fechaNac">FECHA DE NACIMIENTO:</label>
                                    <input type="date" className="form-control Input-Style" id="fechaNac" name="fechaNac" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:14%">14%</div>
                                </div>
                            </div>
                            <div id="seccion2">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="nomJug">NOMBRES:</label>
                                    <input type="text" className="form-control Input-Style" id="nomJug" placeholder="Nombre" name="nomJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="apeJug">APELLIDOS:</label>
                                    <input type="text" className="form-control Input-Style" id="apeJug" placeholder="Apellidos" name="apeJug"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="ciudadNac">CIUDAD DE NACIMIENTO:</label>
                                    <input type="text" className="form-control Input-Style" id="ciudadNac" placeholder="Ciudad de nacimiento" name="ciudadNac"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="ciudadNac">CORREO ELECTRÓNICO:</label>
                                    <input type="email" className="form-control Input-Style" id="ciudadNac" placeholder="Correo electronico" name="ciudadNac"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="rh">RH:</label>
                                    <select id="rh" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="epsJug">EPS:</label>
                                    <input type="text" className="form-control Input-Style" id="epsJug" placeholder="EPS" name="epsJug"
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
                                    <div className="progress-bar Input-Style" Style="width:28%">28%</div>
                                </div>
                            </div>
                            <div id="seccion3">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="direccionJug">DIRECCIÓN:</label>
                                    <input type="text" className="form-control Input-Style" id="direccionJug" placeholder="Direccion" name="direccionJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="barrioJug">BARRIO:</label>
                                    <input type="text" className="form-control Input-Style" id="barrioJug" placeholder="Barrio" name="barrioJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="codPostalJug">CODIGO POSTAL:</label>
                                    <input type="number" className="form-control Input-Style" id="codPostalJug" placeholder="Codigo postal" name="codPostalJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="website">ESTRATO:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="Digite su estrato" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="website">TELÉFONO FIJO:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="Digite su telefono fijo" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="website">CELULAR:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="Número de celular" name="website" required />
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
                                    <div className="progress-bar Input-Style" Style="width:42%">42%</div>
                                </div>
                            </div>
                            <div id="seccion4">
                             <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre del Acudiente:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Parentezco:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Documento Madre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website"  />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre madre:</label>
                                        <input type="text" className="form-control Input-Style" id="website"  placeholder="Digite el parentezco" name="website"  disabled="disabled"/>
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                       

                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Documento padre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website"  />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre padre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" disabled="disabled" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                       
                       

                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar3.bind(this)}>Atras</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.ocultar4.bind(this)}>Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:56%">56%</div>
                                </div>
                            </div>
                            <div id="seccion5">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="institucionJug">INSTITUCIÓN EDUCATIVA:</label>
                                    <input type="text" className="form-control Input-Style" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="gradoJug">GRADO:</label>
                                    <select id="gradoJug" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="jornadaJug">JORNADA ENTRENAMIENTO:</label>
                                    <select id="jornadaJug" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>Diurna</option>
                                        <option>Mixta</option>
                                        <option>Nocturna</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="pasaporteJug">PASAPORTE:</label>
                                    <input type="text" className="form-control Input-Style" id="pasaporteJug" placeholder="Pasaporte" name="pasaporteJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="libreta">LIBRETA MILITAR:</label>
                                    <input type="text" className="form-control Input-Style" id="libreta" placeholder="Libreta Militar" name="libreta" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar4.bind(this)}>Atras</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.ocultar5.bind(this)}>Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:70%">70%</div>
                                </div>
                            </div>
                            <div id="seccion6">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="fotoJug">FOTO DE PERFIL:</label>
                                    <input type="file" className="form-control Input-Style" id="fotoJug" name="fotoJug" required />
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="tallacJug">TALLA DE CAMISA:</label>
                                    <select id="gradoJug" className="form-control Input-Style">
                                        <option>S</option>
                                        <option>L</option>
                                        <option>M</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="tallapJug">TALLA DE PANTALÓN:</label>
                                    <select id="tallapJug" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>M</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionmJug">POSICIÓN PRINCIPALl:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionmJug" placeholder="Posición en el campo" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionsJug">POSICIÓN SECUNDARIA:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionsJug" placeholder="Posición secundaría" name="posicionsJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar5.bind(this)}>Atras</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.ocultar6.bind(this)}>Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:84%">84%</div>
                                </div>
                            </div>
                            <div id="seccion7">
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionmJug">BECADO:</label>
                                    <input type="number" className="form-control Input-Style" id="posicionmJug" placeholder="Digite el porcentaje de la beca" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar6.bind(this)}>Atras</button>
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
            </div>

        );
    }
}
export default Jugadores;