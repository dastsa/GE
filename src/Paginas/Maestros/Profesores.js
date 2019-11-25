
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Profesores extends Component {
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
                                                    <label for="fechaNacp">Fecha de nacimiento:</label>
                                                    <input type="date" className="form-control" id="fechaNacp" name="fechaNacp" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn btn-primary" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:25%">25%</div>
                                                </div>
                                            </div>
                                            <div id="seccion2">
                                                <div className="form-group">
                                                    <label for="nomPro">Nombres:</label>
                                                    <input type="text" className="form-control" id="nomPro" placeholder="Nombre" name="nomPro" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="apePro">Apellidos:</label>
                                                    <input type="text" className="form-control" id="apePro" placeholder="Apellidos" name="apePro"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="ciudadNac">Ciudad de nacimiento:</label>
                                                    <input type="text" className="form-control" id="ciudadNac" placeholder="Apellidos" name="ciudadNac"
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
                                                <div className="form-group">
                                                    <label for="rh">RH:</label>
                                                    <select id="rh" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="epsPro">EPS:</label>
                                                    <input type="text" className="form-control" id="epsPro" placeholder="EPS" name="epsPro"
                                                        required />
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
                                                    <div className="progress-bar" Style="width:50%">50%</div>
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
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar3.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:75%">75%</div>
                                                </div>
                                            </div>
                                            <div id="seccion4">
                                                <div className="form-group">
                                                    <label for="jornadaPro">Jornada Entrenamiento:</label>
                                                    <select id="jornadaPro" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>Diurna</option>
                                                        <option>Mixta</option>
                                                        <option>Nocturna</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="pasaportePro">Pasaporte:</label>
                                                    <input type="text" className="form-control" id="pasaportePro" placeholder="Pasaporte" name="pasaportePro" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="libreta">Libreta Militar:</label>
                                                    <input type="text" className="form-control" id="libreta" placeholder="Libreta Militar" name="libreta" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="fotoPro">Foto de perfil:</label>
                                                    <input type="file" className="form-control" id="fotoPro" name="fotoPro" required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="tallacPro">Talla de camisa:</label>
                                                    <select id="gradoPro" className="form-control">
                                                        <option>S</option>
                                                        <option>L</option>
                                                        <option>M</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="tallapPro">Talla de pantalón:</label>
                                                    <select id="tallapPro" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>S</option>
                                                        <option>L</option>
                                                        <option>M</option>
                                                    </select>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar3.bind(this)}>Atras</button>
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
export default Profesores;