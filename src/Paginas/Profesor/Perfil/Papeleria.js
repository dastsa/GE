import React, { Component } from "react";
import $ from 'jquery';


class PapeleriaProfesor extends Component {

    state = {
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
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">

                        <div>
                        <div className="form-group margin">
                                <label className="App-subtitulo2 " htmlFor="fotoPerfil">Papelería de Profesor.</label>
                            </div>

                        <div className="form-group margin">
                            <label className="App-subtitulo2 " htmlFor="fotoPerfil">Los campos marcados (*) son requeridos.</label>          
                        </div>

                        <div className="form-group margin">
                            <label className="App-subtitulo2 " htmlFor="fotoPerfil">FOTO DE PERFIL:</label>
                            <input onChange={this.onKeyPress('fotoPerfil')} type="file" className="form-control Input-Style margin" id="fotoPerfil" name="fotoPerfil" />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2 " htmlFor="docIdentidad">DOCUMENTO DE IDENTIDAD*:</label>
                            <input onChange={this.onKeyPress('docIdentidad')} type="file" className="form-control Input-Style margin" id="docIdentidad" name="docIdentidad" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="regCivil">REGISTRO CIVIL*:</label>
                            <input onChange={this.onKeyPress('regCivil')} type="file" className="form-control Input-Style margin" id="regCivil" name="regCivil" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="cerPro">CERTIFICADO PROFESIONAL*:</label>
                            <input onChange={this.onKeyPress('cerPro')} type="file" className="form-control Input-Style margin" id="cerPro" name="cerPro" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="expLab">EXPERIENCIA LABORAL*:</label>
                            <input onChange={this.onKeyPress('expLab')} type="file" className="form-control Input-Style margin" id="expLab" name="expLab" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="cajaComp">CAJA DE COMPENSACIÓN:</label>
                            <input onChange={this.onKeyPress('cajaComp')} type="file" className="form-control Input-Style margin" id="cajaComp" name="cajaComp" />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="eps">EPS*:</label>
                            <input onChange={this.onKeyPress('eps')} type="file" className="form-control Input-Style margin" id="eps" name="eps" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="arl">ARL*:</label>
                            <input onChange={this.onKeyPress('arl')} type="file" className="form-control Input-Style margin" id="arl" name="arl" required/>
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="rut">RUT*:</label>
                            <input onChange={this.onKeyPress('rut')} type="file" className="form-control Input-Style margin" id="rut" name="rut" required/>
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="copiaContrato">COPIA CONTRATO*:</label>
                            <input onChange={this.onKeyPress('copiaContrato')} type="file" className="form-control Input-Style margin" id="copiaContrato" name="copiaContrato" required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="Btn-aceptar" >Adjuntar</button>
                        </div>

                        </div>


                    </form>
                </div>
            </div>

        );
    }
}
export default PapeleriaProfesor;