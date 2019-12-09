import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";
import logo from '../../../../imagenes/logo2.png'

class InformacionPersonal extends Component {

    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2").hide();
    };
    seccion1() {
        $("#seccion2").hide();
        $("#seccion1").show();
    };
    seccion2() {
        $("#seccion1").hide();
        $("#seccion2").show();
    };

    render() {
        return (

            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">

                            <div className="form-group">
                                <button type="button" Style="margin: 20px;" className="Btn-aceptar" onClick={this.seccion1.bind(this)}>Datos personales</button>
                            </div>
                            <div className="form-group">
                                <button type="button" Style="margin:20px;" className="Btn-aceptar" onClick={this.seccion2.bind(this)}>Acudientes</button>
                            </div>


                            <div id="seccion1">


                                <div className="row">
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="nomJug">NOMBRES:</label>
                                        <input type="text" className="form-control Input-Style" id="nomJug" placeholder="Nombre" name="nomJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="apeJug">APELLIDOS:</label>
                                        <input type="text" className="form-control Input-Style" id="apeJug" placeholder="Apellidos" name="apeJug"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="fechaNac">FECHA DE NACIMIENTO:</label>
                                        <input type="date" className="form-control Input-Style" id="fechaNac" name="fechaNac" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="tipoDoc">TIPO DE DOCUMENTO:</label>
                                        <input type="text" className="form-control Input-Style" id="tipoDoc" placeholder="Tipo documento" name="tipoDoc" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="nroDoc">NUMERO DOCUMENTO:</label>
                                        <input type="text" className="form-control Input-Style" id="nroDoc" placeholder="Número documento" name="nroDoc" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="fechaEx">FECHA DE EXPEDICIÓN:</label>
                                        <input type="date" className="form-control Input-Style" id="fechaEx" name="fechaEx" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="ciudadNac">CIUDAD DE NACIMIENTO:</label>
                                        <input type="text" className="form-control Input-Style" id="ciudadNac" placeholder="Ciudad de nacimiento" name="ciudadNac"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="lugarEx">LUGAR DE EXPEDICIÓN:</label>
                                        <input type="text" className="form-control Input-Style" id="lugarEx" placeholder="Ciudad" name="lugarEx" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="rh">RH:</label>
                                        <input type="text" className="form-control Input-Style" id="rh" placeholder="RH" name="rh" required />
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="epsJug">EPS:</label>
                                        <input type="text" className="form-control Input-Style" id="epsJug" placeholder="EPS" name="epsJug"
                                            required />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="direccionJug">DIRECCIÓN:</label>
                                        <input type="text" className="form-control Input-Style" id="direccionJug" placeholder="Direccion" name="direccionJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="barrioJug">BARRIO:</label>
                                        <input type="text" className="form-control Input-Style" id="barrioJug" placeholder="Barrio" name="barrioJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="estrato">ESTRATO:</label>
                                        <input type="text" className="form-control Input-Style" id="estrato" placeholder="Estrato" name="estrato" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="correoJug">CORREO ELECTRÓNICO:</label>
                                        <input type="email" className="form-control Input-Style" id="correoJug" placeholder="Correo electronico" name="correoJug"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group margin ">
                                        <label className="App-subtitulo2" htmlFor="telJug">TELÉFONO FIJO:</label>
                                        <input type="text" className="form-control Input-Style" id="telJug" placeholder="Telefono fijo" name="telJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="celJug">CELULAR:</label>
                                        <input type="text" className="form-control Input-Style" id="celJug" placeholder="Número de celular" name="celJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="institucionJug">INSTITUCIÓN EDUCATIVA:</label>
                                        <input type="text" className="form-control Input-Style" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="gradoJug">GRADO:</label>
                                        <input type="text" className="form-control Input-Style" id="grado" placeholder="Grado" name="grado" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <button type="button" Style="margin: 20px;" className="Btn-aceptar">Editar datos personales</button>
                                    </div>
                                </div>
                            </div>





                            <div id="seccion2">

                                <div className="row">

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="nomAcu">NOMBRE DEL ACUDIENTE:</label>
                                        <input type="text" className="form-control Input-Style" id="nomAcu" placeholder="Nombre del acudiente" name="nomAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="parentesco">PARENTESCO:</label>
                                        <input type="text" className="form-control Input-Style" id="parentesco" placeholder="Parentesco" name="parentesco" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="docMadre">DOCUMENTO MADRE:</label>
                                        <input type="text" className="form-control Input-Style" id="docMadre" placeholder="Documento de la madre" name="docMadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="nomMadre">NOMBRE MADRE:</label>
                                        <input type="text" className="form-control Input-Style" id="nomMadre" placeholder="Nombre de la madre" name="nomMadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="docPadre">DOCUMENTO PADRE:</label>
                                        <input type="text" className="form-control Input-Style" id="docPadre" placeholder="Documento del padre" name="docPadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group margin">
                                        <label className="App-subtitulo2" htmlFor="nomPadre">NOMBRE PADRE:</label>
                                        <input type="text" className="form-control Input-Style" id="nomPadre" placeholder="Nombre del padre" name="nomPadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <button type="button" Style="margin: 20px;" className="Btn-aceptar">Editar acudientes</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </form>
                </div>
            </div>




        );
    }
}
export default InformacionPersonal;