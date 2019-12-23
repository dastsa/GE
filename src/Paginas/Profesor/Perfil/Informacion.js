import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';


class InformacionProfesor extends Component {

    constructor() {
        super();
        this.state = {
            //Personal
            Id_Usuario: "",
            Nombres: "",
            Apellidos: "",
            Id_tipo_documento: "",
            Doc_identidad: "",
            Fecha_nacimiento: "",
            Lugar_nacimiento: "",
            Fecha_expedicion: "",
            Lugar_expedicion: "",
            RH: "",
            Eps: "",
            Dir_residencia: "",
            Barrio: "",
            Estrato: "",
            Correo: "",
            Telefono: "",
            Celular: "",


        };
        this.HandleInput = this.HandleInput.bind(this);
    }

    HandleInput(e) {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }


    componentDidMount() {
        this.obtain(fetch);

        $('#disablebtn').on('click', function () {
            $('.removedisabled').removeAttr("disabled");
        });
    }


    obtain = async () => {
        const response = await fetch('http://localhost:3001/Usuarios/getAll');
        const response2 = await fetch('http://localhost:3001/Profesores/getAll');
        const data = await response.json();
        const data2 = await response2.json();
        this.setState(data[0]);
        console.log(data[0]);
        this.setState(data2[0]);
        console.log(data2[0]);
    }

    render() {
        return (

            <div className="container-fluid">
                <form className="container-contact100" action="">

                    <div>
                        <div className="row">
                            <div className="form-group row col-lg-4 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                <label className="App-subtitulo2 " htmlFor="fotoPerfil">Información de Profesor</label>
                            </div>

                        </div>


                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Nombres">NOMBRES:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Nombres" placeholder="Nombre"
                                    name="Nombres" required
                                    onChange={this.HandleInput} value={this.state.Nombres} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Apellidos">APELLIDOS:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Apellidos"
                                    onChange={this.HandleInput} value={this.state.Apellidos} placeholder="Apellidos" name="Apellidos"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Id_tipo_documento">TIPO DE DOCUMENTO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Id_tipo_documento"
                                    onChange={this.HandleInput} value={this.state.Id_tipo_documento} placeholder="Tipo documento" name="Id_tipo_documento" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Doc_identidad">NUMERO DOCUMENTO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Doc_identidad"
                                    placeholder="Número documento" name="nroDoc" required
                                    onChange={this.HandleInput} value={this.state.Doc_identidad} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Fecha_nacimiento">FECHA DE NACIMIENTO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Fecha_nacimiento"
                                    onChange={this.HandleInput} value={this.state.Fecha_nacimiento} name="Fecha_nacimiento" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Lugar_nacimiento">CIUDAD NACIMIENTO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Lugar_nacimiento"
                                    placeholder="Ciudad de nacimiento" name="Lugar_nacimiento"
                                    onChange={this.HandleInput} value={this.state.Lugar_nacimiento}
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>


                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Fecha_expedicion">FECHA DE EXPEDICIÓN:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Fecha_expedicion"
                                    onChange={this.HandleInput} value={this.state.Fecha_expedicion} name="Fecha_expedicion" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Lugar_expedicion">LUGAR DE EXPEDICIÓN:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Lugar_expedicion"
                                    onChange={this.HandleInput} value={this.state.Lugar_expedicion} placeholder="Ciudad" name="Lugar_expedicion" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="RH">RH:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="RH"
                                    onChange={this.HandleInput} value={this.state.RH} placeholder="RH" name="RH" required />


                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="Eps">EPS:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Eps"
                                    onChange={this.HandleInput} value={this.state.Eps} placeholder="EPS" name="Eps"
                                    required />

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Dir_residencia">DIRECCIÓN:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Dir_residencia"
                                    onChange={this.HandleInput} value={this.state.Dir_residencia} placeholder="Dir_residencia" name="Dir_residencia" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Barrio">BARRIO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Barrio"
                                    placeholder="Barrio" name="Barrio" required
                                    onChange={this.HandleInput} value={this.state.Barrio} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Estrato">ESTRATO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Estrato"
                                    placeholder="Estrato" name="Estrato" required
                                    onChange={this.HandleInput} value={this.state.Estrato} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Correo">CORREO ELECTRÓNICO:</label>
                                <input Style="background-color:transparent;" disabled type="email"
                                    className="removedisabled form-control Input-Style" id="Correo"
                                    placeholder="Correo electronico" name="Correo"
                                    onChange={this.HandleInput} value={this.state.Correo}
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Telefono">TELÉFONO FIJO:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Telefono"
                                    placeholder="Telefono fijo" name="Telefono" required
                                    onChange={this.HandleInput} value={this.state.Telefono} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Celular">CELULAR:</label>
                                <input Style="background-color:transparent;" disabled type="text"
                                    className="removedisabled form-control Input-Style" id="Celular"
                                    placeholder="Número de celular" name="Celular" required
                                    onChange={this.HandleInput} value={this.state.Celular} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <button id="disablebtn" type="button" Style="margin: 20px;" className="Btn-aceptar">Editar personales</button>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12">
                                <button id="guardar" type="submit" Style="margin: 20px;" className="Btn-aceptar">Guardar</button>
                            </div>

                        </div>

                    </div>




                </form>
            </div >




        );
    }
}
export default InformacionProfesor;