import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";
import logo from '../../../../imagenes/logo2.png'

class InformacionPersonal extends Component {

    render() {
        return (

            <div className="container-fluid">
                <div className="container-contact100 ">
                    <form className="container-contact100" action="">

                                    <div className="row">

                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="nomJug">NOMBRES:</label>
                                            <input type="text" className="form-control Input-Style" id="nomJug" placeholder="Nombre" name="nomJug" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="apeJug">APELLIDOS:</label>
                                            <input type="text" className="form-control Input-Style" id="apeJug" placeholder="Apellidos" name="apeJug"
                                                required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="fechaNac">FECHA DE NACIMIENTO:</label>
                                            <input type="date" className="form-control Input-Style" id="fechaNac" name="fechaNac" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="ciudadNac">CIUDAD DE NACIMIENTO:</label>
                                            <input type="text" className="form-control Input-Style" id="ciudadNac" placeholder="Ciudad de nacimiento" name="ciudadNac"
                                                required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="ciudad">TIPO DE DOCUMENTO:</label>
                                            <input type="text" className="form-control Input-Style" id="tipoDocumento" placeholder="Tipo documento" name="tipoDoc" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>

                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="ciudad">NUMERO DOCUMENTO:</label>
                                            <input type="text" className="form-control Input-Style" id="nroDocumento" placeholder="Número documento" name="nroDoc" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>

                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="fechaEx">FECHA DE EXPEDICIÓN:</label>
                                            <input type="date" className="form-control Input-Style" id="fechaEx" name="fechaEx" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>

                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="ciudad">LUGAR DE EXPEDICIÓN:</label>
                                            <input type="text" className="form-control Input-Style" id="lugarEx" placeholder="Ciudad" name="lugarEx" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>

                                    </div>



                                    <div className="row">
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="rh">RH:</label>
                                            <input type="text" className="form-control Input-Style" id="rh" placeholder="RH" name="RH" required />
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="epsJug">EPS:</label>
                                            <input type="text" className="form-control Input-Style" id="epsJug" placeholder="EPS" name="epsJug"
                                                required />
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="direccionJug">DIRECCIÓN:</label>
                                            <input type="text" className="form-control Input-Style" id="direccionJug" placeholder="Direccion" name="direccionJug" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="barrioJug">BARRIO:</label>
                                            <input type="text" className="form-control Input-Style" id="barrioJug" placeholder="Barrio" name="barrioJug" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">ESTRATO:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite su estrato" name="website" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="ciudadNac">CORREO ELECTRÓNICO:</label>
                                            <input type="email" className="form-control Input-Style" id="ciudadNac" placeholder="Correo electronico" name="ciudadNac"
                                                required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin ">
                                            <label className="App-subtitulo2" for="website">TELÉFONO FIJO:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite su telefono fijo" name="website" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">CELULAR:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Número de celular" name="website" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="jornadaJug">JORNADA ENTRENAMIENTO:</label>
                                            <select id="jornadaJug" className="form-control Input-Style">
                                                <option selected>Elige...</option>
                                                <option>Diurna</option>
                                                <option>Mixta</option>
                                                <option>Nocturna</option>
                                            </select>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="institucionJug">INSTITUCIÓN EDUCATIVA:</label>
                                            <input type="text" className="form-control Input-Style" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="gradoJug">GRADO:</label>
                                            <input type="text" className="form-control Input-Style" id="grado" placeholder="Grado" name="grado" required />
                                        </div>
                                  
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">NOMBRE DEL ACUDIENTE:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">PARENTEZCO:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" required />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        </div>

                                        <div className="row">

                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">DOCUMENTO MADRE:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">NOMBRE MADRE:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website"  />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                    
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">DOCUMENTO PADRE:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                        <div className="form-group margin">
                                            <label className="App-subtitulo2" for="website">NOMBRE PADRE:</label>
                                            <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website"  />
                                            <div className="valid-feedback">Validado.</div>
                                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        



                        );
                    }
                }
export default InformacionPersonal;