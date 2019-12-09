import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';


class InformacionProfesor extends Component {

    render() {
        return (

            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">

                            <div className="row">
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="nomPro">NOMBRES:</label>
                                    <input type="text" className="form-control Input-Style" id="nomPro" placeholder="Nombre" name="nomPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="apePro">APELLIDOS:</label>
                                    <input type="text" className="form-control Input-Style" id="apePro" placeholder="Apellidos" name="apePro"
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
                                    <label className="App-subtitulo2" htmlFor="nroDocumento">NUMERO DOCUMENTO:</label>
                                    <input type="text" className="form-control Input-Style" id="nroDocumento" placeholder="Número documento" name="nroDoc" required />
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
                                    <input type="text" className="form-control Input-Style" id="rh" placeholder="RH" name="RH" required />
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="epsPro">EPS:</label>
                                    <input type="text" className="form-control Input-Style" id="epsPro" placeholder="EPS" name="epsPro"
                                        required />
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="direccionPro">DIRECCIÓN:</label>
                                    <input type="text" className="form-control Input-Style" id="direccionPro" placeholder="Direccion" name="direccionPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="barrioPro">BARRIO:</label>
                                    <input type="text" className="form-control Input-Style" id="barrioPro" placeholder="Barrio" name="barrioPro" required />
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
                                    <label className="App-subtitulo2" htmlFor="correoPro">CORREO ELECTRÓNICO:</label>
                                    <input type="email" className="form-control Input-Style" id="correoPro" placeholder="Correo electronico" name="correoPro"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group margin ">
                                    <label className="App-subtitulo2" htmlFor="telPro">TELÉFONO FIJO:</label>
                                    <input type="text" className="form-control Input-Style" id="telPro" placeholder="Telefono fijo" name="telPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="celPro">CELULAR:</label>
                                    <input type="text" className="form-control Input-Style" id="celPro" placeholder="Número de celular" name="celPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <button type="button" Style="margin: 20px;" className="Btn-aceptar">Editar datos personales</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>




        );
    }
}
export default InformacionProfesor;