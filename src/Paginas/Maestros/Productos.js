import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Productos extends Component {
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
    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100 ">

                    <div className="wrap-contact100">

                        <form className="col-" action="">

                            <div id="seccion1">

                                <div className="form-group">
                                    <label for="pais" className="App-subtitulo2">PAIS:</label>
                                    <select id="pais" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="ciudad" className="App-subtitulo2">CIUDAD:</label>
                                    <select id="ciudad" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="button" className="App-button" onClick={this.ocultar.bind(this)}>siguiente</button>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:33%">33%</div>
                                </div>
                            </div>
                            <div id="seccion2">

                                <div className="form-group">
                                    <label for="nit" className="App-subtitulo2">NIT:</label>
                                    <input type="text" className="form-control Input-Style" id="nit" placeholder="NIT de tu escuela" name="nit" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="razonsocial" className="App-subtitulo2">RAZON SOCIAL:</label>
                                    <input type="password" className="form-control Input-Style" id="razonsocial" placeholder="Nombre de tu Escuela" name="razonsocial"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="file" className="App-subtitulo2">IMPORTAR LOGO</label>
                                    <input type="file" className="form-control Input-Style" id="file" name="file" />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="App-button" onClick={this.ocultar2.bind(this)}>siguiente</button>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:66%">66%</div>
                                </div>
                            </div>
                            <div id="seccion3">


                                <div className="form-group">
                                    <label for="website" className="App-subtitulo2">SITIO WEB:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="webplan" className="App-subtitulo2">PLAN WEB:</label>
                                    <select id="inputState" className="form-control Input-Style">
                                        <option selected>Elige un plan...</option>
                                        <option>1 Gratis por 6 meses</option>
                                        <option>2 Basico</option>
                                        <option>3 Medio</option>
                                        <option>4 Alto</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="App-button">enviar</button>
                                </div>
                                <br />
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
export default Productos;