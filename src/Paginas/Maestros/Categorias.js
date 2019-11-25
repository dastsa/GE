import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Categorias extends Component {
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
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
                                                    <label for="generoCat">Genero de la Categoria:</label>
                                                    <select id="generoCat" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>Masculino</option>
                                                        <option>Femenino</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="ciudad">Edad de la Categoria:</label>
                                                    <select id="ciudad" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label for="nit">Dias de Entrenamiento:</label>
                                                    <select id="ciudad" className="form-control">
                                                        <option selected>Elige...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                <label for="horasEntre">Hora de Entrenamiento:</label>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label for="horaIni">Hora de Inicio:</label>
                                                                <input type="time" className="form-control" id="horaIni" placeholder="Hora Inicio" name="horaIni" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label for="horaFin">Hora Final:</label>
                                                                <input type="time" className="form-control" id="horaFin" placeholder="Hora Final" name="horaFin" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary">Enviar</button>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" Style="width:100%">100%</div>
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
export default Categorias;