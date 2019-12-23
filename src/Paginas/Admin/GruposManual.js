import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import bd from './bd.json'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


class GruposManual extends Component {


    render() {

        return (
            <div className="container-fluid">
                <form className="container-contact100 " action="">

                    <div>

                    <div className="form-group row col-lg-12 col-sm-12 mr-2">
                        <nav>
                            <div class="nav nav-tabs" Style="color:white;" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Detalle</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Grupo</a>
                            </div>
                        </nav>
                    </div>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                            <div>

                                <div className="row">
                                    <div className="form-group row col-lg-3 col-sm-12 mr-2"></div>
                                    <div className="form-group row col-lg-9 col-sm-12 mr-2">
                                        <label className="App-subtitulo2 " htmlFor="fotoPerfil">Crear grupos manuealmente</label>
                                    </div>

                                </div>
                            </div>

                            <div id="seccion1">

                                <div className="row">
                                    <div className="form-group row col-lg-9 col-sm-12 mr-2">
                                        <input Style="height: 39px;margin-top: 20px;" type="text" className="removedisabled form-control Input-Style" id="buscarJ" placeholder="Buscar un jugador" name="buscarJ" required />
                                    </div>
                                    <div className="form-group row col-lg-3 col-sm-12">
                                        <button type="button" Style="margin:20px;" className="Btn-aceptar2">Buscar</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-12 col-sm-12 mr-2">

                                        <div Style="margin-left:20px" class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="eleccion"></input>
                                            <label Style="color:white;" class="custom-control-label" for="defaultGroupExample1">Documento</label>
                                        </div>

                                        <div Style="margin-left:150px" class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="eleccion" ></input>
                                            <label Style="color:white;" class="custom-control-label" for="defaultGroupExample2">Nombre</label>
                                        </div>

                                        <div Style="margin-left:200px" class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="eleccion"></input>
                                            <label Style="color:white;" class="custom-control-label" for="defaultGroupExample3">Sede</label>
                                        </div>
                                    </div>


                                </div>


                                <div className="form-group row col-lg-12 col-sm-12 mr-2">
                                    <Table className="table table-bordered">
                                        <Thead>
                                            <Tr className="App-titulo2">
                                                {/*Encabezado de la tabla de jugadores */}

                                                <Th scope="col">Sede</Th>
                                                <Th scope="col">Nombre</Th>
                                                <Th scope="col">Dirección</Th>
                                                <Th scope="col">Jornada</Th>
                                                <Th scope="col">Seleccionar</Th>

                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {bd.map((data) => {
                                                return (
                                                    <Tr data-test="event-row" className="bg-light">
                                                        <Td>{data.id}</Td>
                                                        <Td>{data.nombre}</Td>
                                                        <Td>{data.direccion}</Td>
                                                        <Td>{data.jornada}</Td>
                                                        <Td><input type="checkbox" className="case checkstyle" /></Td>
                                                    </Tr>
                                                );
                                            })
                                            }
                                        </Tbody>
                                    </Table>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-4 col-sm-12 mr-2"></div>
                                    <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                        <button type="button" Style="margin:20px;" className="Btn-aceptar">Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                            <div className="row">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2" htmlFor="sede">SEDE:</label>
                                    <select Style="background-color:transparent; color:gray;" id="sede" className=" removedisabled form-control Input-Style">
                                        <option selected>Elige...</option>
                                    </select>
                                </div>
                                <div className="form-group row col-lg-6 col-sm-12">
                                    <label className="App-subtitulo2" htmlFor="categoria">CATEGORIA:</label>
                                    <select Style="background-color:transparent; color:gray;" id="categoria" className=" removedisabled form-control Input-Style">
                                        <option selected>Elige...</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2" htmlFor="nombreGrupro">NOMBRE DEL GRUPO:</label>
                                    <input Style="background-color:transparent;" type="text" placeholder="Nombre del grupo" className=" removedisabled form-control Input-Style" id="nombreGrupro" name="nombreGrupro" required />

                                </div>
                                <div className="form-group row col-lg-6 col-sm-12">
                                    <label className="App-subtitulo2" htmlFor="profesor">PROFESOR:</label>
                                    <input Style="background-color:transparent;" type="text" placeholder="Profesor" className=" removedisabled form-control Input-Style" id="profesor" name="profesor" required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group row col-lg-12 col-sm-12 mr-2">
                                    <label className="App-subtitulo2" htmlFor="jornada">JORNADA:</label>
                                    <select Style="background-color:transparent; color:gray;" id="jornada" className=" form-control Input-Style">
                                        <option selected>Elige...</option>
                                    </select>
                                </div>
                            </div>


                            <div className="row">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2" htmlFor="fechaDesde">FECHA DESDE:</label>
                                    <input Style="background-color:#26262C;" type="date" className="  form-control Input-Style" id="fechaDesde" name="fechaDesde" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>

                                </div>
                                <div className="form-group row col-lg-6 col-sm-12">
                                    <label className="App-subtitulo2" htmlFor="fechaHasta">FECHA HASTA:</label>
                                    <input Style="background-color:#26262C;" type="date" className="  form-control Input-Style" id="fechaHasta" name="fechaHasta" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>

                                </div>
                            </div>


                            <div className="row">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2" htmlFor="horaDesde">HORA DESDE:</label>
                                    <input type="time" className="  form-control Input-Style" id="horaDesde" name="horaDesde" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>

                                </div>
                                <div className="form-group row col-lg-6 col-sm-12">
                                    <label className="App-subtitulo2" htmlFor="horaHasta">HORA HASTA:</label>
                                    <input type="time" className="  form-control Input-Style" id="horaHasta" name="horaHasta" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
            </div>

        );
    }
}
export default GruposManual;