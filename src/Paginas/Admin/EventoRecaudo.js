import React, { Component } from "react";
import $ from 'jquery';
import datos from '../Maestros/selectBd';
import bd from "../Admin/bd.json";
import bdj from "../Admin/bdj.json";
import Logo from '../../imagenes/guarne.jpg';

class EventoRecaudo extends Component {

    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2").hide();

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
    };
    seccion1() {
        $("#seccion2").hide();
        $("#seccion1").show();
    };
    seccion2() {
        $("#seccion1").hide();
        $("#seccion2").show();
    };

    render() {
        return (
            <div className="container-fluid">
                <form className="container-contact100" action="">

                    <div id="seccion1">

                        <div className="row">
                            <div className="form-group row col-lg-12 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="evento">EVENTO / RECAUDO:</label>
                                <input Style="background-color:transparent;" type="text" className="removedisabled  form-control Input-Style" id="evento" placeholder="Evento o recaudo" name="evento" />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="inicio">INICIO:</label>
                                <input Style="background-color:#26262C;" type="date" className="removedisabled form-control Input-Style" id="inicio" name="inicio" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="inicio">FINAL:</label>
                                <input Style="background-color:#26262C;" type="date" className="removedisabled form-control Input-Style" id="final" name="final" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-12 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="precio">PRECIO</label>
                                <input type="text" Style="background-color:transparent;" className="removedisabled form-control Input-Style" id="precio" placeholder="Precio" name="precio" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-2 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                <textarea className="style-0 margin Input-Style textinput3" placeholder="Digita la descripción del evento"></textarea>
                            </div>
                            <div className="form-group row col-lg-2 col-sm-12 mr-2"></div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-3 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-7 col-sm-12 mr-2">
                                <button onClick={this.seccion2.bind(this)} id="disablebtn" type="button" className="Btn-aceptar">Agregar Jugadores</button>
                            </div>
                        </div>
                        <div className="form-group row col-lg-2 col-sm-12 mr-2"></div>

                    </div>

                    <div id="seccion2">

                        <div className="row">
                            <div Style="margin-top: 14px;" className="form-group row col-lg-6 col-sm-12 mr-2">
                                <select id="categoria" className=" form-control Input-Style">
                                    <option value="value1">Categoria</option>
                                    <option value="value2">Sub 15</option>
                                    <option value="value3">Primera B</option>
                                </select>
                            </div>
                            <div className="form-group margin">
                                <h3 className="App-subtitulo2">Selección total</h3>
                                <input type="checkbox" id="selectall" className="bordercheck"></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-12 col-sm-12 mr-2">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="App-titulo2">
                                                {/*Encabezado de la tabla de jugadores */}


                                                <th scope="col">Nombre del Jugador</th>
                                                <th scope="col">Pago Evento</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bdj.map((data) => {
                                                return (
                                                    <tr data-test="event-row" className="bg-light">
                                                        <td>{data.nombreJ}</td>
                                                        <td><input type="checkbox" className="case checkstyle" /></td>

                                                    </tr>
                                                );
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group row col-lg-6 col-sm-12">
                                <button onClick={this.seccion1.bind(this)} type="button" className="Btn-aceptar2">Atrás</button>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12 mr-2 margin">
                                <button id="disablebtn" type="button" className="Btn-aceptar2">Guardar</button>
                            </div>
                        </div>





                    </div>

                </form>
            </div >
        );
    }
}
export default EventoRecaudo;