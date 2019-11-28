import React, { Component } from "react";
import $ from 'jquery';
import logo from '../../imagenes/logo2.png'

class Escuelas extends Component {
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
        $("#seccion2, #seccion3").hide();
        $("#seccion1").show();
    };
    mostrar2() {
        $("#seccion1, #seccion3").hide();
        $("#seccion2").show();
    };
    render() {
        return (
            <div className="App-header">
                <div className="container-contact100 ">
                    <div className="row">
                        <img src={logo} Style="width: 100%; height: 100%;" alt="logo" />
                    </div>
                    <div className="wrap-contact100">
                        <form className="col-" action="">
                                            <div id="seccion1">
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="pais">PAÍS:</label>
                                                    <select id="pais" className="form-control Input-Style">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="ciudad">CIUDAD:</label>
                                                    <select id="ciudad" className="form-control Input-Style">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar Input-Style" Style="width:33%">33%</div>
                                                </div>
                                            </div>
                                            <div id="seccion2">
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="nit">NIT:</label>
                                                    <input type="text" className="form-control Input-Style" id="nit" placeholder="NIT de tu escuela" name="nit" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="razonsocial">RAZON SOCIAL:</label>
                                                    <input type="password" className="form-control Input-Style" id="razonsocial" placeholder="Nombre de tu Escuela" name="razonsocial"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="file">IMPORTAR LOGO</label>
                                                    <input type="file" className="form-control Input-Style" id="file" name="file" />
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
                                                    <div className="progress-bar Input-Style" Style="width:66%">66%</div>
                                                </div>
                                            </div>
                                            <div id="seccion3">
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="website">SITIO WEB:</label>
                                                    <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="App-subtitulo2" for="webplan">PLAN WEB:</label>
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Elige un plan...</option>
                                                        <option>1 Gratis por 6 meses</option>
                                                        <option>2 Basico</option>
                                                        <option>3 Medio</option>
                                                        <option>4 Alto</option>
                                                    </select>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atras</button>
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
export default Escuelas;