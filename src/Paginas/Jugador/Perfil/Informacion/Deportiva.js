import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";

class InformacionDeportiva extends Component {

    constructor() {
        super();
        this.state = {
            //Personal
            Foto_perfil: "",
            Fecha_inscripcion: "",
            Numero_deportivo: "",
            Jornada_entrenamiento: "",
            Posicion_principal: "",
            Posicion_secundaria: "",
            Id_talla: "",
            Estatura: "",
            Peso: "",
            Pierna_habil: "",
            Becado_porcenaje: "",

        };
        this.HandleInput = this.HandleInput.bind(this);
    }



    HandleInput(e) {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

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


    componentDidMount() {

        this.obtain(fetch);
        $('#disablebtn').on('click', function () {
            $('.removedisabled').removeAttr("disabled");
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <form className="container-contact100" action="">


                    <div>

                        <div className="row">
                            <div className="form-group row col-lg-4 col-sm-12 mr-2"></div>
                            <div className="form-group row col-lg-8 col-sm-12 mr-2">
                                <label className="App-subtitulo2 " htmlFor="fotoPerfil">Información deportiva de jugador</label>
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Foto_perfil">FOTO DE PERFIL:</label>
                                <input disabled Style="background-color:transparent;" type="text" placeholder="Foto de perfil"
                                    onChange={this.HandleInput} value={this.state.Foto_perfil}
                                    className=" removedisabled form-control Input-Style" id="Foto_perfil" name="Foto_perfil" required />

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Fecha_inscripcion">FECHA DE INSCRIPCIÓN:</label>
                                <input disabled Style="background-color:transparent;" type="text"
                                 onChange={this.HandleInput} value={this.state.Fecha_inscripcion}
                                    className=" removedisabled form-control Input-Style" id="Fecha_inscripcion" name="Fecha_inscripcion"
                                    required />
                            </div>
                        </div>


                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Numero_deportivo">NÚMERO DEPORTIVO:</label>
                                <input disabled Style="background-color:transparent;" type="text"
                                    placeholder="Número de jugador" className=" removedisabled form-control Input-Style"
                                    onChange={this.HandleInput} value={this.state.Numero_deportivo} id="Numero_deportivo" name="Numero_deportivo" required />

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">
                                <label className="App-subtitulo2" htmlFor="Jornada_entrenamiento">JORNADA ENTRENAMIENTO:</label>

                                <input disabled Style="background-color:transparent;" type="text" placeholder="Jornada entrenamiento"
                                    onChange={this.HandleInput} value={this.state.Jornada_entrenamiento} id="Jornada_entrenamiento"
                                    className=" removedisabled form-control Input-Style">

                                </input>


                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Posicion_principal">POSICIÓN PRINCIPAL:</label>
                                <input disabled Style="background-color:transparent;" type="text"
                                    className=" removedisabled form-control Input-Style" id="Posicion_principal"
                                    onChange={this.HandleInput} value={this.state.Posicion_principal}
                                    placeholder="Posición en el campo" name="Posicion_principal" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="Posicion_secundaria">POSICIÓN SECUNDARIA:</label>
                                <input disabled Style="background-color:transparent;" type="text"
                                    className=" removedisabled form-control Input-Style" id="Posicion_secundaria" placeholder="Posición secundaría"
                                    onChange={this.HandleInput} value={this.state.Posicion_secundaria} name="Posicion_secundaria" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Id_talla">TALLA DE CAMISA:</label>
                                <input disabled Style="background-color:transparent;" placeholder="Talla de camisa" type="text"
                                    onChange={this.HandleInput} value={this.state.Id_talla}
                                    className=" removedisabled form-control Input-Style" id="Id_talla" name="Id_talla" required />

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="Id_talla">TALLA DE PANTALÓN:</label>
                                <input disabled Style="background-color:transparent;" type="text" placeholder="Talla de pantalón"
                                    onChange={this.HandleInput} value={this.state.Id_talla}
                                    className=" removedisabled form-control Input-Style"
                                    id="tallaPantalon" name="tallaPantalon" required />

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <label className="App-subtitulo2" htmlFor="Estatura">ESTATURA:</label>
                                <input disabled Style="background-color:transparent;" type="text" placeholder="Estatura"
                                    className=" removedisabled form-control Input-Style" id="esatura" name="Estatura" required
                                    onChange={this.HandleInput} value={this.state.Estatura} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="Peso">PESO:</label>
                                <input disabled Style="background-color:transparent;" type="text" placeholder="Peso"
                                    className=" removedisabled form-control Input-Style" id="Peso" name="Peso" required
                                    onChange={this.HandleInput} value={this.state.Peso} />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group row col-lg-6 col-sm-12 mr-2">

                                <label className="App-subtitulo2" htmlFor="Pierna_habil">PIERNA HABIL:</label>
                                <input disabled Style="background-color:transparent;" type="text" placeholder="Pierna habil"
                                    onChange={this.HandleInput} value={this.state.Pierna_habil} className=" removedisabled form-control Input-Style"
                                    id="Pierna_habil" name="Pierna_habil" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>


                            </div>
                            <div className="form-group row col-lg-6 col-sm-12">

                                <label className="App-subtitulo2" htmlFor="Becado_porcenaje">BECADO:</label>
                                <input disabled Style="background-color:transparent;" type="number"
                                    onChange={this.HandleInput} value={this.state.Foto_perfil} className=" removedisabled form-control Input-Style"
                                    id="Becado_porcenaje" placeholder="Porcentaje de la beca" name="Becado_porcenaje" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>

                            </div>
                        </div>


                        <div className="row">

                            <div className="form-group row col-lg-6 col-sm-12 mr-2">
                                <button id="disablebtn" type="button" className="Btn-aceptar margin">Editar información</button>
                            </div>

                            <div className="form-group row col-lg-6 col-sm-12">
                                <button type="submit" id="enviar" Style="margin: 20px;" className="Btn-aceptar">Guardar</button>
                            </div>

                        </div>

                    </div>
                </form>
            </div>


        );
    }
}
export default InformacionDeportiva;