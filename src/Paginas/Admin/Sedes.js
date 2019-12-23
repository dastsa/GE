import React, { Component } from "react";
import $ from 'jquery';
import datos from '../Maestros/selectBd';
import bd from "../Admin/bd.json";
import Logo from '../../imagenes/guarne.jpg';

class Sedes extends Component {

    componentDidMount() {
        $('#basicExampleModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        });
        $('#disablebtn').on('click', function () {
            $('.removedisabled').removeAttr("disabled");
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
                                <label className="App-subtitulo2" htmlFor="pais">PAÍS DE LA SEDE:</label>
                                <select Style="background-color:transparent;" disabled id="pais" onChange={this.onKeyPress('pais')} className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="ciudad">CIUDAD DE SEDE:</label>
                                <select Style="background-color:transparent;" disabled id="ciudad" onChange={this.onKeyPress('ciudad')} className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}<option Style="color:gray;" selected>Elige...</option>
                                    <option Style="color:gray;">...</option>
                                </select>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="pais">CATEGORÍA SEDE:</label>
                                <select Style="background-color:transparent;" disabled id="categoria" onChange={this.onKeyPress('categoria')} className="removedisabled form-control Input-Style">
                                    {datos.map((data) => {
                                        return (
                                            <option Style="color:gray;">{data.dato}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="pais">ESCUELA DE SEDE:</label>
                                <select Style="background-color:transparent;" disabled id="escuela" onChange={this.onKeyPress('escuela')} className="removedisabled form-control Input-Style">
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
                                <label className="App-subtitulo2" htmlFor="razonsocialSede">RAZÓN SOCIAL:</label>
                                <input Style="background-color:transparent;" disabled type="password" onChange={this.onKeyPress('razonS')} className="removedisabled form-control Input-Style" id="razonsocialSede" placeholder="Nombre de la Sede" name="razonsocialSede"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="dirSede">DIRECCIÓN DE LA SEDE:</label>
                                <input Style="background-color:transparent;" disabled type="text" onChange={this.onKeyPress('direccion')} className="removedisabled form-control Input-Style" id="dirSede" placeholder="Dirección" name="dirSede" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="website">SITIO WEB:</label>
                                <input Style="background-color:transparent;" disabled type="text" onChange={this.onKeyPress('website')} className="removedisabled form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
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
                                        <p Style="color:gray;">{data.nombre}</p>
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
                            <button id="enviar" type="button" className="Btn-aceptar">Guardar</button>
                        </div>
                    </div>


                </form>

            </div >
        );
    }
}
export default Sedes;