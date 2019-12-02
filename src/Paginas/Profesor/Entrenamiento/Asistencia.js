import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';


class Asistencia extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100 ">
                    <form className="container-contact100 " action="">



                        <div className="row">

                            <input type="date" className="form-control Input-Style" id="fechaInscripcion" name="fechaInscripcion" required />

                            <div className="form-group margin">
                                <button type="submit" className="Btn-aceptar">Asiste</button>
                            </div>
                            <div className="form-group margin">
                                <button type="submit" className="Btn-aceptar">No asiste</button>
                            </div>
                            <div className="form-group margin">
                                <button type="submit" className="Btn-aceptar">Asistencia completa</button>
                            </div>
                            </div>

                        <div className="row">
                            <table class="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Jugador</th>
                                        <th>Asistencia</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Angel Gabriel Ortega</td>
                                        <td>Carlos Alberto Rodriguez</td>
                                        <td>Cristian Fernando Ruiz</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td></td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                 
                                </tbody>
                            </table>

                        </div>







                    </form>
                </div>
            </div>

        );
    }
}
export default Asistencia;