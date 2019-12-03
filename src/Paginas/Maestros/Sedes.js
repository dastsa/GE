import React, { Component } from "react";
import $ from 'jquery';
import logo from '../../imagenes/logo2.png'

class Sedes extends Component {
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
            <div class="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label className="App-subtitulo2" for="pais">PAÍS DE LA SEDE:</label>
                                <select id="pais" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" for="ciudad">CIUDAD DE LA SEDE:</label>
                                <select id="ciudad" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" for="pais">ESCUELA A LA QUE PERTENECE:</label>
                                <select id="pais" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" for="pais">CATEGORÍA:</label>
                                <select id="pais" className="form-control Input-Style">
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
                                <div className="progress-bar Input-Style" Style="width:50%">50%</div>
                            </div>
                        </div>
                        <div id="seccion2">
                            <div className="form-group">
                                <label className="App-subtitulo2" for="razonsocialSede">RAZÓN SOCIAL:</label>
                                <input type="password" className="form-control Input-Style" id="razonsocialSede" placeholder="Nombre de la Sede" name="razonsocialSede"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" for="dirSede">DIRECCIÓN DE LA SEDE:</label>
                                <input type="text" className="form-control Input-Style" id="dirSede" placeholder="Dirección" name="dirSede" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" for="website">SITIO WEB:</label>
                                <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atras</button>
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

        );
    }
}
export default Sedes;