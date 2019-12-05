import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import bd from '../bd.json'


class Asistencia extends Component {

    componentDidMount() {
        $("#selectall").on("click", function () {
            $(".case").prop("checked", this.checked);
        });
        $(".case").on("click", function () {
            if ($(".case").length == $(".case:checked").length) {
                $("#selectall").prop("checked", true);
            } else {
                $("#selectall").prop("checked", false);
            }
        });

    }

    render() {

        return (
            <div className="container-fluid">
                <div className="container-contact100 ">
                    <form className="container-contact100 " action="">

                        <div className="row">

                            <input type="date" className="form-control Input-Style" id="fecha" name="fecha" required />

                            <div className="form-group margin">
                                <button type="button" className="Btn-aceptar">Asiste</button>
                            </div>
                            <div className="form-group margin">
                                <button type="button" className="Btn-aceptar">No asiste</button>
                            </div>
                            <div className="form-group margin">
                                <h3 className="App-subtitulo2">Selección total</h3>
                                <input type="checkbox" id="selectall" className="bordercheck"></input>
                            </div>


                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="App-titulo2">
                                            {/*Encabezado de la tabla de jugadores */}


                                            <th scope="col">Nombre del Jugador</th>
                                            <th scope="col">Asistencia</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bd.map((data) => {
                                            return (
                                                <tr data-test="event-row" className="bg-light">
                                                    <td>{data.nombre}</td>
                                                    <td><input type="checkbox" class="case checkstyle" /></td>

                                                </tr>
                                            );
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default Asistencia;