import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Grupos extends Component {
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
                                                    <label for="anioG">Año :</label>
                                                    <input type="number" className="form-control" id="anioG" placeholder="Año" name="anioG" required />
                                                    <div className="valid-feedback">Validado.</div>
                                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="webplan">Jugador:</label>
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Elige un Jugador...</option>
                                                        <option>Elige...</option>
                                                        
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">Enviar</button>
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
export default Grupos;