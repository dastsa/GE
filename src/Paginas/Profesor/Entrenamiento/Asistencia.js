import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import bd from '../bd.json'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


class Asistencia extends Component {

    state = {
        tipoDoc: "",
        nroDoc: "",
        lugarExp: "",
        fechaExp: "",
        fechaNac: "",
        nomPro: "",
        apePro: "",
        ciudadNac: "",
        correo: "",

    };
    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }

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
                <form className="container-contact100 " action="">



                    <div className="row">

                        <div className="form-group row col-lg-5 col-sm-12 mr-2"></div>
                        <div className="form-group row col-lg-7 col-sm-12 mr-2">
                            <label className="App-subtitulo2 " htmlFor="fotoPerfil">Asistencia a entrenamiento</label>
                        </div>

                        <h3 className="App-subtitulo2">Fecha</h3>
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

                            <Table className="table table-bordered">
                                <Thead>
                                    <Tr className="App-titulo2">
                                        {/*Encabezado de la tabla de jugadores */}


                                        <Th scope="col">Nombre del Jugador</Th>
                                        <Th scope="col">Asistencia</Th>

                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {bd.map((data) => {
                                        return (
                                            <Tr data-test="event-row" className="bg-light">
                                                <Td>{data.nombre}</Td>
                                                <Td><input type="checkbox" className="case checkstyle" /></Td>

                                            </Tr>
                                        );
                                    })
                                    }
                                </Tbody>
                            </Table>

                    </div>
                </form>
            </div>

        );
    }
}
export default Asistencia;