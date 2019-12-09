import React, { Component } from "react";
import $ from 'jquery';
import logo from '../../imagenes/logo2.png';
import datos from './selectBd';

class Sedes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        pais: "",
        ciudad: "",
        escuela: "",
        categoria: "",
        razonS: "",
        direccion: "",
        website: ""
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
            <div className="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="pais">PAÍS DE LA SEDE:</label>
                                <select id="pais" onChange={this.onKeyPress('pais')} className="form-control Input-Style">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="ciudad">CIUDAD DE LA SEDE:</label>
                                <select id="ciudad" onChange={this.onKeyPress('ciudad')} className="form-control Input-Style">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}<option selected>Elige...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="pais">ESCUELA A LA QUE PERTENECE:</label>
                                <select id="escuela" onChange={this.onKeyPress('escuela')} className="form-control Input-Style">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="pais">CATEGORÍA:</label>
                                <select id="categoria" onChange={this.onKeyPress('categoria')} className="form-control Input-Style">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                    </div>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar Input-Style" Style="width:50%">50%</div>
                            </div>
                        </div>
                        <div id="seccion2">
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="razonsocialSede">RAZÓN SOCIAL:</label>
                                <input type="password" onChange={this.onKeyPress('razonS')} className="form-control Input-Style" id="razonsocialSede" placeholder="Nombre de la Sede" name="razonsocialSede"
                                    required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="dirSede">DIRECCIÓN DE LA SEDE:</label>
                                <input type="text" onChange={this.onKeyPress('direccion')} className="form-control Input-Style" id="dirSede" placeholder="Dirección" name="dirSede" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label className="App-subtitulo2" htmlFor="website">SITIO WEB:</label>
                                <input type="text" onChange={this.onKeyPress('website')} className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atras</button>
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
                </div>
            </div>

        );
    }
}
export default Sedes;