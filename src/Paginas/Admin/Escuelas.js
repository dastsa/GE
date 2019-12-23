import React, { Component } from "react";
import $ from 'jquery';
import datos from '../Maestros/selectBd';
import bd from "../Admin/bd.json";
import Logo from '../../imagenes/guarne.jpg';

class Escuelas extends Component {

    componentDidMount() {
        $('#basicExampleModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
        $('#disablebtn').on('click', function () {
            $('.removedisabled').removeAttr("disabled");
        });
        $('#enablebtn').on('click', function () {
            $('.removedisabled').attr("disabled");
        });

    }

    state = {
        pais: "",
        ciudad: "",
        deporte: "",
        nit: "",
        razonsocial: "",
        logo: "",
        dirFisica: "",
        sitioweb: "",
        planweb: "",

    };

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <form className="container-contact100" action="">

                    <div>
                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="pais">PAÍS:</label>
                                <select Style="color:gray;" disabled Style="background-color:transparent;" id="pais" className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="ciudad">CIUDAD:</label>
                                <select Style="color:gray;"
                                    disabled Style="background-color:transparent;" id="ciudad" className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="ciudad">DEPORTE:</label>
                                <select Style="color:gray;" disabled Style="background-color:transparent;" id="deporte" className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="nit">NIT:</label>
                                <input onChange={this.onKeyPress('nit')} Style="background-color:transparent;" type="text" className="removedisabled  form-control Input-Style" id="nit" placeholder="NIT de tu escuela" name="nit" disabled />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="razonsocial">RAZON SOCIAL:</label>
                                <input onChange={this.onKeyPress('razonsocial')} Style="background-color:transparent;" type="password" className="removedisabled form-control Input-Style" id="razonsocial" placeholder="Nombre de tu Escuela" disabled name="razonsocial"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="dirFisica">DIRECCIÓN FISICA:</label>
                                <input type="text" Style="background-color:transparent;" disabled className="removedisabled form-control Input-Style" id="dirFisica" placeholder="Dirección física" name="dirFisica" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="website">SITIO WEB:</label>
                                <input type="text" Style="background-color:transparent;" disabled className="removedisabled form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="deporte">DEPORTE:</label>
                                <input type="text" Style="background-color:transparent;" disabled className="removedisabled form-control Input-Style" id="deporte" placeholder="Deporte" name="deporte" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="logo">LOGO:</label>
                                <input type="text" Style="background-color:transparent;" disabled className="removedisabled form-control Input-Style" id="logo" placeholder="Acá va el logo de la escuela" name="logo" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="webplan">PLAN WEB:</label>
                                <select Style="color:gray;" id="inputState" disabled Style="background-color:transparent;" className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                    <option Style="color:gray;">1 Gratis por 6 meses</option>
                                    <option Style="color:gray;">2 Basico</option>
                                    <option Style="color:gray;">3 Medio</option>
                                    <option Style="color:gray;">4 Alto</option>
                                </select>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="file">SEDES DE LA ESCUELA:</label>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex flex-wrap">
                        {
                            bd.map((data) => {
                                return (
                                    <div>
                                        <img className="" Style="border: 30px solid transparent;" src={Logo} alt="" />
                                        <p>{data.nombre}</p>
                                    </div>
                                );
                            })
                        }
                    </div>


                    <div className="row">

                        <div className="form-group margin">
                            <button id="disablebtn" type="button" className="Btn-aceptar">Editar escuelas</button>
                        </div>

                        <div className="form-group margin">
                            <button id="enablebtn" type="button" className="Btn-aceptar">Dejar de editar escuelas</button>
                        </div>

                        <div className="form-group margin">
                            <button id="enviar" type="submit" className="Btn-aceptar">Enviar</button>
                        </div>

                    </div>


                </form>


            </div >
        );
    }
}
export default Escuelas;