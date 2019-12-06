import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';


class Jugadores extends Component {
    state = {
        tipoDoc: "",
        nroDoc: "",
        lugarEx: "",
        fechaEx: "",
        fechaNac: "",
        nomJug: "",
        apeJug: "",
        ciudadNac: "",
        correo: "",
        rh: "",
        epsJug: "",
        direccionJug: "",
        barrioJug: "",
        codPostalJug: "",
        estrato: "",
        telFijo: "",
        celular: "",
        nomAcudiente: "",
        parentesco: "",
        docMadre: "",
        nomMadre: "",
        DocPadre: "",
        nomPadre: "",
        institucionJug: "",
        gradoJug: "",
        jornadaJug: "",
        pasaporteJug: "",
        libreta: "",
        tallacJug: "",
        tallapJug: "",
        posicionPP: "",
        posicionS: "",
        becado: "",



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
            <div className="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tipoDoc">TIPO DE DOCUMENTO:</label>
                                <select onChange={this.onKeyPress('tipoDoc')} id="tipoDoc" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Tarjeta de identidad</option>
                                    <option>Cédula de ciudadania</option>
                                    <option>Cédula de extranjería</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="nroDoc">NÚMERO DE DOCUMENTO:</label>
                                <input onChange={this.onKeyPress('nroDoc')}type="text" className="form-control Input-Style" id="nroDoc" placeholder="Numero de documento de identidad" name="nroDoc" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>|
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="lugarEx">LUGAR DE EXPEDICIÓN:</label>
                                <input onChange={this.onKeyPress('lugarEx')}type="text" className="form-control Input-Style" id="lugarEx" placeholder="Ciudad" name="lugarEx" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="fechaEx">FECHA DE EXPEDICIÓN:</label>
                                <input  onChange={this.onKeyPress('fechaEx')}type="date" className="form-control Input-Style" id="fechaEx" name="fechaEx" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="fechaNac">FECHA DE NACIMIENTO:</label>
                                <input  onChange={this.onKeyPress('fechaNac')}type="date" className="form-control Input-Style" id="fechaNac" name="fechaNac" required />
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
                                <label className="App-subtitulo2" htmlFor="nomJug">NOMBRES:</label>
                                <input  onChange={this.onKeyPress('nomJug')}type="text" className="form-control Input-Style" id="nomJug" placeholder="Nombre" name="nomJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="apeJug">APELLIDOS:</label>
                                <input  onChange={this.onKeyPress('apeJug')}type="text" className="form-control Input-Style" id="apeJug" placeholder="Apellidos" name="apeJug"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="ciudadNac">CIUDAD DE NACIMIENTO:</label>
                                <input onChange={this.onKeyPress('ciudadNac')}ype="text" className="form-control Input-Style" id="ciudadNac" placeholder="Ciudad de nacimiento" name="ciudadNac"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="correo">CORREO ELECTRÓNICO:</label>
                                <input  onChange={this.onKeyPress('correo')}type="email" className="form-control Input-Style" id="ciudadNac" placeholder="Correo electronico" name="correo"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="rh">RH:</label>
                                <select  onChange={this.onKeyPress('rh')}id="rh" className="form-control Input-Style">
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
                                <label className="App-subtitulo2" htmlFor="epsJug">EPS:</label>
                                <input  onChange={this.onKeyPress('epsJug')}type="text" className="form-control Input-Style" id="epsJug" placeholder="EPS" name="epsJug"
                                    required />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
                                <label className="App-subtitulo2" htmlFor="direccionJug">DIRECCIÓN:</label>
                                <input  onChange={this.onKeyPress('direccionJug')}type="text" className="form-control Input-Style" id="direccionJug" placeholder="Direccion" name="direccionJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="barrioJug">BARRIO:</label>
                                <input  onChange={this.onKeyPress('barrioJug')} type="text" className="form-control Input-Style" id="barrioJug" placeholder="Barrio" name="barrioJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="codPostalJug">CODIGO POSTAL:</label>
                                <input  onChange={this.onKeyPress('codPostalJug')}type="number" className="form-control Input-Style" id="codPostalJug" placeholder="Codigo postal" name="codPostalJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="estrato">ESTRATO:</label>
                                <input  onChange={this.onKeyPress('estrato')}type="text" className="form-control Input-Style" id="estrato" placeholder="Digite su estrato" name="estrato" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="telFijo">TELÉFONO FIJO:</label>
                                <input  onChange={this.onKeyPress('telFijo')} type="text" className="form-control Input-Style" id="telFijo" placeholder="Digite su telefono fijo" name="telFijo" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="celular">CELULAR:</label>
                                <input  onChange={this.onKeyPress('celular')}type="text" className="form-control Input-Style" id="celular" placeholder="Número de celular" name="celular" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
                                <label className="App-subtitulo2" htmlFor="nomAcudiente">Nombre del Acudiente:</label>
                                <input  onChange={this.onKeyPress('nomAcudiente')}type="text" className="form-control Input-Style" id="nomAcudiente" placeholder="Digite el nombre del acudiente" name="nomAcudiente" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="parentesco">Parentesco:</label>
                                <select  onChange={this.onKeyPress('parentesco')}id="parentesco" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Familiar</option>
                                    <option>Conocido</option>
                                    <option>...</option>


                                </select>
                            </div>

                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="docMadre">Documento Madre:</label>
                                <input  onChange={this.onKeyPress('docMadre')}type="text" className="form-control Input-Style" id="docMadre" placeholder="Digite el documento de la madre" name="docMadre" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="nomMadre">Nombre madre:</label>
                                <input  onChange={this.onKeyPress('nomMadre')}type="text" className="form-control Input-Style" id="nomMadre" placeholder="Digite el nombre de la madre" name="nomMadre" disabled="disabled" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>


                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="DocPadre">Documento padre:</label>
                                <input  onChange={this.onKeyPress('DocPadre')}type="text" className="form-control Input-Style" id="DocPadre" placeholder="Digite el documento del padre" name="DocPadre" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="nomPadre">Nombre padre:</label>
                                <input  onChange={this.onKeyPress('nomPadre')}type="text" className="form-control Input-Style" id="nomPadre" placeholder="Digite el nombre del padre" name="nomPadre" disabled="disabled" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>



                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar3.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
                                <label className="App-subtitulo2" htmlFor="institucionJug">INSTITUCIÓN EDUCATIVA:</label>
                                <input  onChange={this.onKeyPress('institucionJug')}type="text" className="form-control Input-Style" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="gradoJug">GRADO:</label>
                                <select  onChange={this.onKeyPress('gradoJug')}id="gradoJug" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="jornadaJug">JORNADA ENTRENAMIENTO:</label>
                                <select  onChange={this.onKeyPress('jornadaJug')}id="jornadaJug" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Diurna</option>
                                    <option>Mixta</option>
                                    <option>Nocturna</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="pasaporteJug">PASAPORTE:</label>
                                <input  onChange={this.onKeyPress('pasaporteJug')}type="text" className="form-control Input-Style" id="pasaporteJug" placeholder="Pasaporte" name="pasaporteJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="libreta">LIBRETA MILITAR:</label>
                                <input  onChange={this.onKeyPress('libreta')}type="text" className="form-control Input-Style" id="libreta" placeholder="Libreta Militar" name="libreta" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar4.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
                                <label className="App-subtitulo2" htmlFor="fotoJug">FOTO DE PERFIL:</label>
                                <input  onChange={this.onKeyPress('fotoJug')}type="file" className="form-control Input-Style" id="fotoJug" name="fotoJug" required />
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tallacJug">TALLA DE CAMISA:</label>
                                <select  onChange={this.onKeyPress('tallacJug')} id="gradoJug" className="form-control Input-Style">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>L</option>
                                    <option>M</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tallapJug">TALLA DE PANTALÓN:</label>
                                <select  onChange={this.onKeyPress('tallapJug')}id="tallapJug" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>S</option>
                                    <option>L</option>
                                    <option>M</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="posicionPP">POSICIÓN PRINCIPALl:</label>
                                <input onChange={this.onKeyPress('posicionPP')} type="text" className="form-control Input-Style" id="posicionPP" placeholder="Posición en el campo" name="posicionPP" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="posicionS">POSICIÓN SECUNDARIA:</label>
                                <input  onChange={this.onKeyPress('posicionS')} type="text" className="form-control Input-Style" id="posicionS" placeholder="Posición secundaría" name="posicionS" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar5.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
                                <label className="App-subtitulo2" htmlFor="becado">BECADO:</label>
                                <input  onChange={this.onKeyPress('becado')} type="number" className="form-control Input-Style" id="becado" placeholder="Digite el porcentaje de la beca" name="becado" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar6.bind(this)}>Atras</button>
                                    </div>
                                </div>
                                <div className="col">
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
export default Jugadores;