import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Acudientes extends Component {
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
            <div className="row justify-content-center pt-2">
                <div className="col-xl-6 col-sm-6 push-sm-6">
                    <div className="card">
                        <div className="card-block">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <form action="">
                                            <div id="seccion1">
                                                <div className="form-group">
                                                    <label for="tipoDocP">Tipo de documento:</label>
                                                    <select id="tipoDoc" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="nroIp">Nro de documento:</label>
                                                    <input type="text" className="form-control" id="nroIp" placeholder="Numero de documento de identidad" name="nroIp" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="lugarExp">Lugar de expedición:</label>
                                                    <input type="text" className="form-control" id="lugarExp" placeholder="Ciudad" name="lugarExp" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="fechaExp">Fecha de expedición:</label>
                                                    <input type="date" className="form-control" id="fechaExp" name="fechaExp" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn btn-primary" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:33%">33%</div>
                                                </div>
                                            </div>
                                            <div id="seccion2">
                                                <div className="form-group">
                                                    <label for="nomAcu">Nombres:</label>
                                                    <input type="text" className="form-control" id="nomAcu" placeholder="Nombre" name="nomAcu" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="apeAcu">Apellidos:</label>
                                                    <input type="text" className="form-control" id="apeAcu" placeholder="Apellidos" name="apeAcu"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="profesionAcu">Profesión:</label>
                                                    <input type="text" className="form-control" id="profesionAcu" placeholder="Profesión" name="profesionAcu"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="ciudadNac">Correo electronico:</label>
                                                    <input type="email" className="form-control" id="ciudadNac" placeholder="Apellidos" name="ciudadNac"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar.bind(this)}>Atras</button>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar2.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:66%">66%</div>
                                                </div>
                                            </div>
                                            <div id="seccion3">
                                                <div className="form-group">
                                                    <label for="direccionPro">Direccion:</label>
                                                    <input type="text" className="form-control" id="direccionPro" placeholder="Direccion" name="direccionPro" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="barrioPro">Barrio:</label>
                                                    <input type="text" className="form-control" id="barrioPro" placeholder="Barrio" name="barrioPro" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="codPostalPro">Codigo postal:</label>
                                                    <input type="number" className="form-control" id="codPostalPro" placeholder="Codigo postal" name="codPostalPro" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="website">Estrato:</label>
                                                    <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="website">Telefono fijo:</label>
                                                    <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="website">Celular:</label>
                                                    <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar2.bind(this)}>Atras</button>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary">Enviar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:100%">100%</div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Acudientes;