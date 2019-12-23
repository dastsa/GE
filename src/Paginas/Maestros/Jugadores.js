import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";
import logo from '../../imagenes/cuadros logo.png';
import datos from './selectBd';
import axios from 'axios'

class Jugadores extends Component {


    constructor() {
        super();
        this.state = {
            Id_Usuario: '',
            Doc_indentidad: '',
            Id_escuela: '',
            Usuario: '',
            Clave: '',
            Fecha_ingreso: '',
            Ultima_modificacion: '',
            Estado: '',
            Lugar_expedicion: '',
            Fecha_expedicion: '',
            Nombres: '',
            Apellidos: '',
            Fecha_nacimiento: '',
            Lugar_nacimiento: '',
            RH: '',
            Genero: '',
            Eps: '',
            Dir_residencia: '',
            Coordenadas: '',
            Barrio: '',
            Codigo_postal: '',
            Estrato: '',
            Telefono: '',
            Celular: '',
            Correo: '',
            Libreta_militar: '',
            Pasaporte: '',
            Foto_perfil: '',
            Fecha_inscripcion: '',
        };
        this.HandleInput = this.HandleInput.bind(this);
    }

    crearUsuario = () => {
        axios.post("http://localhost:3001/Usuarios/insert", {
            Id_Usuario: this.state.Id_Usuario,
            Doc_indentidad: this.state.Doc_indentidad,
            Id_escuela:  this.state.Id_escuela,
            Usuario:  this.state.Usuario,
            Clave:  this.state.Clave,
            Fecha_ingreso:  this.state.Fecha_ingreso,
            Ultima_modificacion:  this.state.Ultima_modificacion,
            Estado:  this.state.Estado,
            Lugar_expedicion:  this.state.Lugar_expedicion,
            Fecha_expedicion:  this.state.Fecha_expedicion,
            Nombres:  this.state.Nombres,
            Apellidos:  this.state.Apellidos,
            Fecha_nacimiento:  this.state.Fecha_nacimiento,
            Lugar_nacimiento:  this.state.Lugar_nacimiento,
            RH:  this.state.RH,
            Genero:  this.state.Genero,
            Eps:  this.state.Eps,
            Dir_residencia:  this.state.Dir_residencia,
            Coordenadas:  this.state.Coordenadas,
            Barrio:  this.state.Barrio,
            Codigo_postal:  this.state.Codigo_postal,
            Estrato:  this.state.Estrato,
            Telefono:  this.state.Telefono,
            Celular:  this.state.Celular,
            Correo:  this.state.Correo,
            Libreta_militar:  this.state.Libreta_militar,
            Pasaporte:  this.state.Pasaporte,
            Foto_perfil:  this.state.Foto_perfil,
            Fecha_inscripcion:  this.state.Fecha_inscripcion,

        })
            .then(res => console.log(res))
            .catch(ex => console.error(ex));
    }
    HandleInput(e) {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }


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
        $("#seccion2 , #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        this.crearUsuario(fetch);
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

  
    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100 ">
                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tipoDoc">TIPO DE DOCUMENTO:</label>
                                <select onChange={this.onKeyPress('tipoDoc')} id="tipoDoc" className="form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option>{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Doc_indentidad">NÚMERO DE DOCUMENTO:</label>
                                <input onChange={this.onKeyPress('Doc_indentidad')} type="text"
                                className="form-control Input-Style" id="Doc_indentidad"
                                 placeholder="Numero de documento de identidad" name="nroDoc" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>|
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Lugar_expedicion">LUGAR DE EXPEDICIÓN:</label>
                                <input onChange={this.onKeyPress('Lugar_expedicion')} type="text" className="form-control Input-Style" id="Lugar_expedicion" placeholder="Ciudad" name="Lugar_expedicion" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Fecha_expedicion">FECHA DE EXPEDICIÓN:</label>
                                <input onChange={this.onKeyPress('fechaEx')} type="date" className="form-control Input-Style" id="Fecha_expedicion" name="Fecha_expedicion" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Fecha_nacimiento">FECHA DE NACIMIENTO:</label>
                                <input onChange={this.onKeyPress('fechaNac')} type="date" className="form-control Input-Style" id="Fecha_nacimiento" name="Fecha_nacimiento" required />
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
                                <label className="App-subtitulo2" htmlFor="Nombres">NOMBRES:</label>
                                <input onChange={this.onKeyPress('nomJug')} type="text" className="form-control Input-Style" id="Nombres" placeholder="Nombre" name="Nombres" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Apellidos">APELLIDOS:</label>
                                <input onChange={this.onKeyPress('apeJug')} type="text" className="form-control Input-Style" id="Apellidos" placeholder="Apellidos" name="Apellidos"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Lugar_nacimiento">CIUDAD DE NACIMIENTO:</label>
                                <input onChange={this.onKeyPress('ciudadNac')} ype="text" className="form-control Input-Style" id="Lugar_nacimiento" placeholder="Ciudad de nacimiento" name="Lugar_nacimiento"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Correo">CORREO ELECTRÓNICO:</label>
                                <input onChange={this.onKeyPress('correo')} type="email" className="form-control Input-Style" id="Correo" placeholder="Correo electronico" name="Correo"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="RH">RH:</label>
                                <select onChange={this.onKeyPress('rh')} id="RH" name="RH" className="form-control Input-Style">
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
                                <label className="App-subtitulo2" htmlFor="Eps">EPS:</label>
                                <input onChange={this.onKeyPress('epsJug')} type="text" className="form-control Input-Style" id="Eps" placeholder="EPS" name="Eps"
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
                                <label className="App-subtitulo2" htmlFor="Direccion">DIRECCIÓN:</label>
                                <input onChange={this.onKeyPress('direccionJug')} type="text" className="form-control Input-Style" id="Direccion" placeholder="Direccion" name="Direccion" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Barrio">BARRIO:</label>
                                <input onChange={this.onKeyPress('barrioJug')} type="text" className="form-control Input-Style" id="Barrio" placeholder="Barrio" name="Barrio" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Codigo_postal">CODIGO POSTAL:</label>
                                <input onChange={this.onKeyPress('codPostalJug')} type="number" className="form-control Input-Style" id="Codigo_postal" placeholder="Codigo postal" name="Codigo_postal" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Estrato">ESTRATO:</label>
                                <input onChange={this.onKeyPress('estrato')} type="text" className="form-control Input-Style" id="Estrato" placeholder="Digite su estrato" name="Estrato" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Telefono">TELÉFONO FIJO:</label>
                                <input onChange={this.onKeyPress('telFijo')} type="text" className="form-control Input-Style" id="Telefono" placeholder="Digite su telefono fijo" name="Telefono" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Celular">CELULAR:</label>
                                <input onChange={this.onKeyPress('celular')} type="text" className="form-control Input-Style" id="Celular" placeholder="Número de celular" name="Celular" required />
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
                                <input onChange={this.onKeyPress('nomAcudiente')} type="text" className="form-control Input-Style" id="nomAcudiente" placeholder="Digite el nombre del acudiente" name="nomAcudiente" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="parentesco">Parentesco:</label>
                                <select onChange={this.onKeyPress('parentesco')} id="parentesco" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Familiar</option>
                                    <option>Conocido</option>
                                    <option>...</option>


                                </select>
                            </div>

                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="docMadre">Documento Madre:</label>
                                <input onChange={this.onKeyPress('docMadre')} type="text" className="form-control Input-Style" id="docMadre" placeholder="Digite el documento de la madre" name="docMadre" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="nomMadre">Nombre madre:</label>
                                <input onChange={this.onKeyPress('nomMadre')} type="text" className="form-control Input-Style" id="nomMadre" placeholder="Digite el nombre de la madre" name="nomMadre" disabled="disabled" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>


                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="DocPadre">Documento padre:</label>
                                <input onChange={this.onKeyPress('DocPadre')} type="text" className="form-control Input-Style" id="DocPadre" placeholder="Digite el documento del padre" name="DocPadre" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="nomPadre">Nombre padre:</label>
                                <input onChange={this.onKeyPress('nomPadre')} type="text" className="form-control Input-Style" id="nomPadre" placeholder="Digite el nombre del padre" name="nomPadre" disabled="disabled" />
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
                                <input onChange={this.onKeyPress('institucionJug')} type="text" className="form-control Input-Style" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="gradoJug">GRADO:</label>
                                <select onChange={this.onKeyPress('gradoJug')} id="gradoJug" className="form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option>{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="jornadaJug">JORNADA ENTRENAMIENTO:</label>
                                <select onChange={this.onKeyPress('jornadaJug')} id="jornadaJug" className="form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option>{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Pasaporte">PASAPORTE:</label>
                                <input onChange={this.onKeyPress('pasaporteJug')} type="text" className="form-control Input-Style" id="Pasaporte" placeholder="Pasaporte" name="Pasaporte" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="Libreta_militar">LIBRETA MILITAR:</label>
                                <input onChange={this.onKeyPress('libreta')} type="text" className="form-control Input-Style" id="Libreta_militar" placeholder="Libreta Militar" name="Libreta_militar" required />
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
                                <input onChange={this.onKeyPress('fotoJug')} type="file" className="form-control Input-Style" id="fotoJug" name="fotoJug" required />
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tallacJug">TALLA DE CAMISA:</label>
                                <select onChange={this.onKeyPress('tallacJug')} id="gradoJug" className="form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option>{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="tallapJug">TALLA DE PANTALÓN:</label>
                                <select onChange={this.onKeyPress('tallapJug')} id="tallapJug" className="form-control Input-Style">

                                    {datos.map((data) => {
                                        return (
                                            <option>{data.dato}</option>
                                        );
                                    })}
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
                                <input onChange={this.onKeyPress('posicionS')} type="text" className="form-control Input-Style" id="posicionS" placeholder="Posición secundaría" name="posicionS" required />
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
                                <input onChange={this.onKeyPress('becado')} type="number" className="form-control Input-Style" id="becado" placeholder="Digite el porcentaje de la beca" name="becado" required />
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