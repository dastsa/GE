import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../imagenes/logo2.png';
import datos from './selectBd';

class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        generoCat: "",
        edad: "",
        dias: "",
        horaIni: "",
        horaFin: ""
    };

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }

    mostrar(){
        console.log(this.state.generoCat)
        console.log(this.state.edad)
        console.log(this.state.dias)
        console.log(this.state.horaIni)
        console.log(this.state.horaFin)

    }
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
    };
    render() {
        return (       
                    <div className="container-contact100">
                        <form className='col-' action="">
                            <div className="form-group">
                                <label for="generoCat" className="App-subtitulo2">GENERO DE LA CATEGORÍA:</label>
                                <select id="generoCat" onChange={this.onKeyPress('generoCat')} className="Input-Style form-control form-group">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="edad" className="App-subtitulo2">EDAD DE LA CATEGORÍA:</label>
                                <select id="edad" onChange={this.onKeyPress('edad')} className="Input-Style form-control form-group">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="dias" className="App-subtitulo2">DÍAS DE ENTRENAMIENTO:</label>
                                <select id="dias" onChange={this.onKeyPress('dias')} className="Input-Style form-control form-group">
                                {datos.map((data) => {
                                        return(
                                            <option>{data.dato}</option>
                                         );
                                    })}
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="horasEntre" className="App-subtitulo2">HORA DE ENTRENAMIENTO:</label>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="horaIni" className="App-subtitulo2">HORA DE INICIO:</label>
                                            <input type="time" onChange={this.onKeyPress('horaIni')} className="Input-Style form-control form-group" id="horaIni" placeholder="Hora Inicio" name="horaIni" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="horaFin" className="App-subtitulo2">HORA FINAL:</label>
                                            <input type="time" onChange={this.onKeyPress('horaFin')} className="Input-Style form-control form-group" id="horaFin" placeholder="Hora Final" name="horaFin" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="Btn-aceptar" onClick={this.mostrar()} type="submit"></button>
                            </div>
                        </form>
                    </div>
        );
    }
}
export default Categorias;