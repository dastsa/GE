import React, { Component } from "react";
import $ from 'jquery';

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
                                                    <label for="pais">País de la Sede:</label>
                                                    <select id="pais" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="ciudad">Ciudad de la Sede:</label>
                                                    <select id="ciudad" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="pais">Escuela a la que pertenece:</label>
                                                    <select id="pais" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="pais">Categoría:</label>
                                                    <select id="pais" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div className="form-group">
                                                            <button type="button" className="btn btn-primary" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" Style="width:50%">50%</div>
                                                </div>
                                            </div>
                                            <div id="seccion2">
                                                <div className="form-group">
                                                    <label for="razonsocialSede">Razón Social:</label>
                                                    <input type="password" className="form-control" id="razonsocialSede" placeholder="Nombre de la Sede" name="razonsocialSede"
                                                        required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="dirSede">Dirección de la Sede:</label>
                                                    <input type="text" className="form-control" id="dirSede" placeholder="Dirección" name="dirSede" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="website">Sitio web:</label>
                                                    <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
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
export default Sedes;