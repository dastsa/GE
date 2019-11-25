import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Acudientes from "./SubAcudientes";

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
            <div className=" justify-content-center pt-2">
                <div className="col">
                    <div className="card">
                        <div className="card-block">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <form action="">
                                            <div id="seccion1">
                                                <div className="form-group">
                                                    <label for="tipoDoc">Tipo de documento:</label>
                                                    <select id="tipoDoc" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="nroI">Nro de documento:</label>
                                                    <input type="text" className="form-control" id="nroI" placeholder="Numero de documento de identidad" name="nroI" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="ciudad">Lugar de expedición:</label>
                                                    <input type="text" className="form-control" id="lugarEx" placeholder="Ciudad" name="lugarEx" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="fechaEx">Fecha de expedición:</label>
                                                    <input type="date" className="form-control" id="fechaEx" name="fechaEx" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="fechaNac">Fecha de nacimiento:</label>
                                                    <input type="date" className="form-control" id="fechaNac" name="fechaNac" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn btn-primary" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:14%">14%</div>
                                                </div>
                                            </div>
                                            <div id="seccion2">
                                                <div className="form-group">
                                                    <label for="nomJug">Nombres:</label>
                                                    <input type="text" className="form-control" id="nomJug" placeholder="Nombre" name="nomJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="apeJug">Apellidos:</label>
                                                    <input type="text" className="form-control" id="apeJug" placeholder="Apellidos" name="apeJug"
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
                                                    <label for="epsJug">EPS:</label>
                                                    <input type="text" className="form-control" id="epsJug" placeholder="EPS" name="epsJug"
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
                                                    <div className="progress-bar" Style="width:28%">28%</div>
                                                </div>
                                            </div>
                                            <div id="seccion3">
                                                <div className="form-group">
                                                    <label for="direccionJug">Direccion:</label>
                                                    <input type="text" className="form-control" id="direccionJug" placeholder="Direccion" name="direccionJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="barrioJug">Barrio:</label>
                                                    <input type="text" className="form-control" id="barrioJug" placeholder="Barrio" name="barrioJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="codPostalJug">Codigo postal:</label>
                                                    <input type="number" className="form-control" id="codPostalJug" placeholder="Codigo postal" name="codPostalJug" required />
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
                                                    <div className="progress-bar" Style="width:42%">42%</div>
                                                </div>
                                            </div>
                                            <div id="seccion4">
                                                {this.state.acudientes.map((data) => {
                                                    return (
                                                        <Acudientes />
                                                    );
                                                })
                                                }
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar3.bind(this)}>Atras</button>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar4.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:56%">56%</div>
                                                </div>
                                            </div>
                                            <div id="seccion5">
                                                <div className="form-group">
                                                    <label for="institucionJug">Institución educativa:</label>
                                                    <input type="text" className="form-control" id="institucionJug" placeholder="Institución educativa" name="institucionJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="gradoJug">Grado:</label>
                                                    <select id="gradoJug" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="jornadaJug">Jornada Entrenamiento:</label>
                                                    <select id="jornadaJug" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>Diurna</option>
                                                        <option>Mixta</option>
                                                        <option>Nocturna</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="pasaporteJug">Pasaporte:</label>
                                                    <input type="text" className="form-control" id="pasaporteJug" placeholder="Pasaporte" name="pasaporteJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="libreta">Libreta Militar:</label>
                                                    <input type="text" className="form-control" id="libreta" placeholder="Libreta Militar" name="libreta" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar4.bind(this)}>Atras</button>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar5.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:70%">70%</div>
                                                </div>
                                            </div>
                                            <div id="seccion6">
                                                <div className="form-group">
                                                    <label for="fotoJug">Foto de perfil:</label>
                                                    <input type="file" className="form-control" id="fotoJug" name="fotoJug" required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="tallacJug">Talla de camisa:</label>
                                                    <select id="gradoJug" className="form-control">
                                                        <option>S</option>
                                                        <option>L</option>
                                                        <option>M</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="tallapJug">Talla de pantalón:</label>
                                                    <select id="tallapJug" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>S</option>
                                                        <option>L</option>
                                                        <option>M</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="posicionmJug">Posición principal:</label>
                                                    <input type="text" className="form-control" id="posicionmJug" placeholder="Posición en el campo" name="posicionmJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="posicionsJug">Posición secundaría:</label>
                                                    <input type="text" className="form-control" id="posicionsJug" placeholder="Posición secundaría" name="posicionsJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar5.bind(this)}>Atras</button>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar6.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:84%">84%</div>
                                                </div>
                                            </div>
                                            <div id="seccion7">
                                                <div className="form-group">
                                                    <label for="posicionmJug">Becado:</label>
                                                    <input type="number" className="form-control" id="posicionmJug" placeholder="Digite el porcentaje de la beca" name="posicionmJug" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.mostrar6.bind(this)}>Atras</button>
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
export default Jugadores;