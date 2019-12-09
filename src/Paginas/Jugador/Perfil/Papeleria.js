import React, { Component } from "react";
import $ from 'jquery';


class PapeleriaJugador extends Component {


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
                            <label className="App-subtitulo2 " htmlFor="fotoPerfil">FOTO DE PERFIL:</label>
                            <input onChange={this.onKeyPress('fotoPerfil')} type="file" className="form-control Input-Style margin" id="fotoPerfil" name="fotoPerfil" />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2 " htmlFor="docIdentidad">DOCUMENTO DE IDENTIDAD:</label>
                            <input onChange={this.onKeyPress('docIdentidad')} type="file" className="form-control Input-Style margin" id="docIdentidad" name="docIdentidad" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="regCivil">REGISTRO CIVIL:</label>
                            <input onChange={this.onKeyPress('regCivil')} type="file" className="form-control Input-Style margin" id="regCivil" name="regCivil" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="cerEstudiantil">CERTIFICADO ESTUDIANTIL</label>
                            <input onChange={this.onKeyPress('cerEstudiantil')} type="file" className="form-control Input-Style margin" id="cerEstudiantil" name="cerEstudiantil" required />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="cerMedico">CERTIFICADO MEDICO</label>
                            <input onChange={this.onKeyPress('cerMedico')} type="file" className="form-control Input-Style margin" id="cerMedico" name="cerMedico" />
                        </div>
                        <div className="form-group margin">
                            <label className="App-subtitulo2" htmlFor="pasaporte">PASAPORTE</label>
                            <input onChange={this.onKeyPress('pasaporte')} type="file" className="form-control Input-Style margin" id="pasaporte" name="pasaporte" />
                        </div>
                        <div className="form-group">
                            <button type="button" className="Btn-aceptar" >Adjuntar</button>
                        </div>

                        </div>


                    </form>
                </div>
            </div>

        );
    }
}
export default PapeleriaJugador;