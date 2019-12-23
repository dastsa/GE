import React, { Component } from "react";
import datos from '../Maestros/selectBd';
import $ from 'jquery';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import bd from '../Profesor/Entrenamiento/bd.json'


class Partido extends Component {

    state = {
        categoria: "",
        torneo: "",
        rival: "",
        fecha: "",
        cancha: "",
        direccion: "",
        dt: "",
        at: "",
        pf: "",
        md: "",
        ut: "",
        jugador: ""
    };


    seccion1() {
        $("#seccion3").hide();
        $("#seccion2").hide();
        $("#seccion1").show();
    };
    seccion2() {
        $("#seccion3").hide();
        $("#seccion1").hide();
        $("#seccion2").show();
    };
    seccion3() {
        $("#seccion3").show();
        $("#seccion1").hide();
        $("#seccion2").hide();
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
        $("#seccion3").hide();
        $("#seccion2").hide();
        $("#seccion1").show();
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
                <form className="container-contact100" action="">
                    <div>

                        <ul class="nav nav-tabs" Style="color:white;" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Agregar Partido</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Agregar cuerpo técnico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Agregar jugadores</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2">Partido</label>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">CATEGORIA:</label>
                                        <select onChange={this.onKeyPress('categoria')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">TORNEO:</label>
                                        <input onChange={this.onKeyPress('torneo')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="Torneo" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="ciudad">RIVAL:</label>
                                        <input onChange={this.onKeyPress('rival')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="Rival" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="fechaEx">FECHA:</label>
                                        <input onChange={this.onKeyPress('fecha')} type="date" className="form-control Input-Style" id="fechaEx" name="fechaEx" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="razonsocial">CANCHA:</label>
                                        <input onChange={this.onKeyPress('cancha')} Style="background-color:transparent;" type="password" className=" form-control Input-Style" id="razonsocial" placeholder="Cancha" name="razonsocial"
                                            required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="dirFisica">DIRECCION:</label>
                                        <input type="text" onChange={this.onKeyPress('direccion')} Style="background-color:transparent;" className=" form-control Input-Style" id="dirFisica" placeholder="Direccion" name="dirFisica" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-4 col-sm-12 mr-2"></div>
                                    <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                        <button id="enablebtn" type="button" className="Btn-aceptar">Guardar</button>
                                    </div>
                                </div>


                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2">Cuerpo Tecnico</label>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">SELECCIONAR DT:</label>
                                        <select onChange={this.onKeyPress('dt')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">DT:</label>
                                        <input onChange={this.onKeyPress('dt')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">SELECCIONAR AT:</label>
                                        <select onChange={this.onKeyPress('at')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">AT:</label>
                                        <input onChange={this.onKeyPress('at')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">SELECCIONAR PF:</label>
                                        <select onChange={this.onKeyPress('pf')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">PF:</label>
                                        <input onChange={this.onKeyPress('pf')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">SELECCIONAR MD:</label>
                                        <select onChange={this.onKeyPress('md')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">MD:</label>
                                        <input onChange={this.onKeyPress('md')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="pais">SELECCIONAR UT:</label>
                                        <select onChange={this.onKeyPress('ut')} Style="background-color:transparent;" id="pais" className=" form-control Input-Style">
                                            {datos.map((data) => {
                                                return (
                                                    <option Style="color: gray;">{data.dato}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="ciudad">UT:</label>
                                        <input onChange={this.onKeyPress('ut')} Style="background-color:transparent;" type="text" className="  form-control Input-Style" id="nit" placeholder="" name="nit" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                    <label className="App-subtitulo2">Jugadores</label>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-9 col-sm-12 mr-2">
                                        <input Style="height: 39px;margin-top: 20px;" type="text" className="removedisabled form-control Input-Style" id="buscarJ" placeholder="Buscar un jugador" name="buscarJ" required />
                                    </div>
                                    <div className="form-group row col-lg-3 col-sm-12">
                                        <button type="submit" Style="margin:20px;" className="Btn-aceptar2">Buscar</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <h3 Style="margin-left:50px;" className="App-subtitulo2">Selección total</h3>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <input Style="margin-top:20px" type="checkbox" id="selectall" className="bordercheck"></input>
                                    </div>



                                </div>
                                <div>
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

                            </div>
                        </div>

                    </div>
                </form>
            </div >
        );
    }
}

export default Partido;