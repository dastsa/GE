import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import axios from "axios";


class InformacionPersonal extends React.Component {

    constructor() {
        super();
        this.state = {
            //Personal
            Nombres: "",
            Apellidos: "",
            Doc_indentidad: "",
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

            //Otros
            Institucion_educativa: "",
            Grado: "",
            Parentesco: ""
        };
        this.HandleInput = this.HandleInput.bind(this);
    }

    /*onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }*/

    HandleInput(e) {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    update = () => {
        axios.post("http://localhost:3001/Usuarios/update", {
            Id_Usuario: "1",
            Nombres: this.state.Nombres,
            Apellidos: this.state.Apellidos,
            Doc_indentidad: this.state.Doc_indentidad,
            Fecha_nacimiento: this.state.Fecha_nacimiento,
            Lugar_nacimiento: this.state.Lugar_nacimiento,
            Fecha_expedicion: this.state.Fecha_expedicion,
            Lugar_expedicion: this.state.Lugar_expedicion,
            RH: this.state.RH,
            Eps: this.state.Eps,
            Dir_residencia: this.state.Dir_residencia,
            Barrio: this.state.Barrio,
            Estrato: this.state.Estrato,
            Correo: this.state.Correo,
            Telefono: this.state.Telefono,
            Celular: this.state.Celular,

        })
            .then(res => console.log(res))
            .catch(ex => console.error(ex));
    }
    update2 = () => {
        axios.post("http://localhost:3001/Jugador/update", {
            Id_jugador: "1",
            Institucion_educativa: this.state.Institucion_educativa,
            Grado:  this.state.Grado,
            Parentesco: this.state.Parentesco

        })
            .then(res => console.log(res))
            .catch(ex => console.error(ex));
    }


    componentDidMount() {

        this.obtain(fetch);

        $('#disablebtn').click(function () {
            $('.removedisabled').removeAttr("disabled");
            //$('.removedisabled').removeAttr("readOnly", false);
            //$('#nomJug').removeAttr("disabled");

        });

    };

    obtain = async () => {
        const response = await fetch('http://localhost:3001/Usuarios/getAll');
        const response2 = await fetch('http://localhost:3001/Jugador/getAll');
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
                <form className="container-contact100" action={this.update2}>

                    <div>

                        <div className="form-group row col-lg-12 col-sm-12 mr-2">
                            <nav>
                                <div className="nav nav-tabs" Style="color:white;" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Datos personales</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Acudientes</a>
                                </div>
                            </nav>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-3 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-9 col-sm-12 mr-2">
                                <label className="App-subtitulo2 " htmlFor="fotoPerfil">Información personal de jugador</label>
                            </div>

                        </div>

                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className=" App-subtitulo2" htmlFor="Nombres">NOMBRES:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Nombres"
                                            placeholder="Nombres" onChange={this.HandleInput} value={this.state.Nombres} name="Nombres" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Apellidos">APELLIDOS:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Apellidos"
                                            placeholder="Apellidos" onChange={this.HandleInput} value={this.state.Apellidos} name="Apellidos" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>
                                <div>

                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="tipoDoc">TIPO DE DOCUMENTO:</label>

                                        <input Style="background-color:transparent;" disabled type="text"
                                            className="removedisabled form-control Input-Style" value="CC"
                                            id="tipoDoc" placeholder="Tipo documento" name="tipoDoc" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">

                                        <label className="App-subtitulo2" htmlFor="Doc_indentidad">NUMERO DOCUMENTO:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Doc_indentidad"
                                            placeholder="Doc_indentidad" onChange={this.HandleInput} value={this.state.Doc_indentidad} name="Doc_indentidad" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Fecha_nacimiento">FECHA DE NACIMIENTO:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style"
                                            placeholder="Fecha nacimiento" onChange={this.HandleInput} value={this.state.Fecha_nacimiento} id="Fecha_nacimiento" name="Fecha_nacimiento" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Lugar_nacimiento">CIUDAD DE NACIMIENTO:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Lugar_nacimiento"
                                            placeholder="" name="Lugar_nacimiento"
                                            onChange={this.HandleInput} value={this.state.Lugar_nacimiento} required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Fecha_expedicion">FECHA DE EXPEDICIÓN:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style"
                                            placeholder="Fecha expedición" onChange={this.HandleInput} value={this.state.Fecha_expedicion} id="Fecha_expedicion" name="Fecha_expedicion" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Lugar_expedicion">LUGAR DE EXPEDICIÓN:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Lugar_expedicion"
                                            placeholder="" onChange={this.HandleInput} value={this.state.Lugar_expedicion} name="Lugar_expedicion" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="RH">RH:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="RH"
                                            placeholder="" onChange={this.HandleInput} value={this.state.RH} name="RH" required />

                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Eps">EPS:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Eps"
                                            placeholder="" onChange={this.HandleInput} value={this.state.Eps} name="Eps" required />

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Dir_residencia">DIRECCIÓN:</label>

                                        <input Style="background-color:transparent;"
                                            disabled type="text" className="removedisabled form-control Input-Style" id="Dir_residencia"
                                            placeholder="" onChange={this.HandleInput} value={this.state.Dir_residencia} name="Dir_residencia" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Barrio">BARRIO:</label>

                                        <input Style="background-color:transparent;" disabled type="text"
                                            className="removedisabled form-control Input-Style" id="Barrio" placeholder=""
                                            onChange={this.HandleInput} value={this.state.Barrio} name="Barrio" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Estrato">ESTRATO:</label>

                                        <input Style="background-color:transparent;" disabled type="text"
                                            className="removedisabled form-control Input-Style" id="Estrato"
                                            placeholder=""
                                            onChange={this.HandleInput} value={this.state.Estrato}
                                            name="Estrato" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Correo">CORREO ELECTRÓNICO:</label>

                                        <input Style="background-color:transparent;" disabled type="email"
                                            className="removedisabled form-control Input-Style" id="Correo"
                                            placeholder="Correo electronico"
                                            onChange={this.HandleInput} value={this.state.Correo}
                                            name="Correo" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Telefono">TELÉFONO FIJO:</label>

                                        <input Style="background-color:transparent;" disabled type="text"
                                            className="removedisabled form-control Input-Style" id="Telefono" placeholder=""
                                            onChange={this.HandleInput} value={this.state.Telefono} name="Telefono" required />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Celular">CELULAR:</label>

                                        <input Style="background-color:transparent;" disabled type="text"
                                            className="removedisabled form-control Input-Style" id="Celular" placeholder=""
                                            name="Celular" required onChange={this.HandleInput} value={this.state.Celular} />

                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="Institucion_educativa">INSTITUCIÓN EDUCATIVA:</label>
                                        <input Style="background-color:transparent;" disabled type="text" className="removedisabled form-control Input-Style" id="Institucion_educativa"
                                            placeholder="Institución educativa" name="Institucion_educativa" required onChange={this.HandleInput} value={this.state.Institucion_educativa} />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Grado">GRADO:</label>
                                        <input Style="background-color:transparent;" onChange={this.HandleInput} value={this.state.Grado}
                                            disabled type="text" className="removedisabled form-control Input-Style"
                                            id="Grado" placeholder="Grado" name="Grado" required />

                                    </div>
                                </div>

                            </div>

                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="nomAcu">NOMBRE DEL ACUDIENTE:</label>
                                        <input Style="background-color:transparent;" disabled type="text"
                                        className="removedisabled form-control Input-Style"
                                         id="nomAcu" placeholder="Nombre del acudiente" name="nomAcu" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="Parentesco">PARENTESCO:</label>
                                        <input Style="background-color:transparent;" onChange={this.HandleInput} value={this.state.Parentesco}
                                            disabled type="text" className="removedisabled form-control Input-Style"
                                            id="Parentesco" placeholder="Parentesco" name="Parentesco" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="nomMadre">NOMBRE MADRE:</label>
                                        <input Style="background-color:transparent;" disabled type="text" className="removedisabled form-control Input-Style" id="nomMadre" placeholder="Nombre de la madre" name="nomMadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="docMadre">DOCUMENTO MADRE:</label>
                                        <input Style="background-color:transparent;" disabled type="text" className="removedisabled form-control Input-Style" id="docMadre" placeholder="Documento de la madre" name="docMadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                        <label className="App-subtitulo2" htmlFor="nomPadre">NOMBRE PADRE:</label>
                                        <input Style="background-color:transparent;" disabled type="text" className="removedisabled form-control Input-Style" id="nomPadre" placeholder="Nombre del padre" name="nomPadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group row col-lg-6 col-sm-12">
                                        <label className="App-subtitulo2" htmlFor="docPadre">DOCUMENTO PADRE:</label>
                                        <input Style="background-color:transparent;" disabled type="text" className="removedisabled form-control Input-Style" id="docPadre" placeholder="Documento del padre" name="docPadre" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                </div>




                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <button id="disablebtn" type="button" Style="margin: 20px;" className="Btn-aceptar">Editar acudientes</button>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12">
                                <button type="submit" id="enviar" Style="margin: 20px;" onClick={this.update2}  className="Btn-aceptar">Guardar</button>
                            </div>
                        </div>

                    </div>



                </form>
            </div >

        );
    }
}
export default InformacionPersonal;