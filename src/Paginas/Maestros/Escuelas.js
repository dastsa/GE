import React, { Component } from "react";
import $ from 'jquery';
import logo from '../../imagenes/logo2.png';
import datos from './selectBd';

class Escuelas extends Component {

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
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
    };
    ocultar() {
        $("#seccion1, #seccion3").hide();
        $("#seccion2").show();
    };
    ocultar2() {
        $("#seccion1, #seccion2").hide();
        $("#seccion3").show();
    };
    mostrar() {
        $("#seccion2, #seccion3").hide();
        $("#seccion1").show();
    };
    mostrar2() {
        $("#seccion1, #seccion3").hide();
        $("#seccion2").show();
    };
    render() {
        return (
            <div className="container-contact100">
                <form className='col-' action="">

                    <div id="seccion1">
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="pais">PAÍS:</label>
                            <select id="pais" className="form-control Input-Style">
                                {datos.map((data) => {
                                    return (
                                        <option>{data.dato}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="ciudad">CIUDAD:</label>
                            <select id="ciudad" className="form-control Input-Style">
                                {datos.map((data) => {
                                    return (
                                        <option>{data.dato}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="ciudad">DEPORTE:</label>
                            <select id="deporte" className="form-control Input-Style">
                                {datos.map((data) => {
                                    return (
                                        <option>{data.dato}</option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar Input-Style" Style="width:33%">33%</div>
                        </div>
                    </div>


                    <div id="seccion2">
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="nit">NIT:</label>
                            <input onChange={this.onKeyPress('nit')} type="text" className="form-control Input-Style" id="nit" placeholder="NIT de tu escuela" name="nit" required />
                            <div className="valid-feedback">Validado.</div>
                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                        </div>
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="razonsocial">RAZON SOCIAL:</label>
                            <input onChange={this.onKeyPress('razonsocial')} type="password" className="form-control Input-Style" id="razonsocial" placeholder="Nombre de tu Escuela" name="razonsocial"
                                required />
                            <div className="valid-feedback">Validado.</div>
                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                        </div>

                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="razonsocial">LOGO:</label>
                            <button type="button" className="form-control Input-Style" data-toggle="modal"
                                data-target="#Modal">Añadir logo de escuela</button>

                            <div className="modal fade" data-backdrop="false" data-dismiss="modal" id="Modal" role="dialog" aria-labelledby="ModalLabel"
                                aria-hidden="false">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content" Style="background: #26262C;">

                                        <div className="modal-header">
                                            <h5 className="modal-title" Style="color: white;" id="ModalLabel">Añadir logo de la empresa</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="form-group margin">
                                                <label className="App-subtitulo2" htmlFor="file">IMPORTAR LOGO</label>
                                                <input onChange={this.onKeyPress('logo')} type="file" className="form-control Input-Style" id="logo" name="logo" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="Btn-aceptar" data-dismiss="modal">Cerrar</button>
                                            <button type="button" className="Btn-aceptar   ">Guardar cambios</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atrás</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <button type="button" className="Btn-aceptar" onClick={this.ocultar2.bind(this)}>Siguiente</button>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar Input-Style" Style="width:66%">66%</div>
                        </div>


                    </div>
                    <div id="seccion3">
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="dirFisica">DIRECCIÓN FISICA:</label>
                            <input type="text" className="form-control Input-Style" id="dirFisica" placeholder="Dirección física" name="dirFisica" required />
                            <div className="valid-feedback">Validado.</div>
                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                        </div>
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="website">SITIO WEB:</label>
                            <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                            <div className="valid-feedback">Validado.</div>
                            <div className="invalid-feedback">Por favor rellene este campo.</div>
                        </div>
                        <div className="form-group">
                            <label className="App-subtitulo2" htmlFor="webplan">PLAN WEB:</label>
                            <select id="inputState" className="form-control Input-Style">
                                {datos.map((data) => {
                                    return (
                                        <option>{data.dato}</option>
                                    );
                                })}
                                <option>1 Gratis por 6 meses</option>
                                <option>2 Basico</option>
                                <option>3 Medio</option>
                                <option>4 Alto</option>
                            </select>
                        </div>
                        <div className="row">

                            <div className="col">
                                <div className="form-group">
                                    <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atras</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <button type="submit" className="Btn-aceptar">Enviar</button>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar Input-Style" Style="width:100%">100%</div>

                        </div>
                    </div>
                </form>

            </div >
        );
    }
}
export default Escuelas;