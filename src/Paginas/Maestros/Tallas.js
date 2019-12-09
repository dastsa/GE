import React, { Component } from "react";
import $ from 'jquery';

class Papeleria extends Component {


    state = {
        tipoDoc: "",
   
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
                        <div className="col-4">

                        <div>
                        <div className="form-group">
                                <label htmlFor="nroDoc" className="App-subtitulo2">NUMERO DE DOCUMENTO:</label>
                                <input onChange={this.onKeyPress('nroDoc')}type="text" className="form-control Input-Style" id="nroDoc" placeholder="Numero de documento de identidad" name="nroIp" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="anio" className="App-subtitulo2">AÑO:</label>
                                <input onChange={this.onKeyPress('anio')}type="text" className="form-control Input-Style" id="anio" placeholder="Año" name="anio" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tipoDocP" className="App-subtitulo2">PRODUCTO:</label>
                                <select onChange={this.onKeyPress('tipoDoc')} id="tipoDoc" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="talla" className="App-subtitulo2">TALLA:</label>
                                <input onChange={this.onKeyPress('talla')}type="text" className="form-control Input-Style" id="talla" placeholder="Talla" name="talla" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="estatura" className="App-subtitulo2">ESTATURA:</label>
                                <input onChange={this.onKeyPress('estatura')}type="text" className="form-control Input-Style" id="estatura" placeholder="Estatura" name="estatura" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>

                            <div className="form-group">
                            <button type="button" className="Btn-aceptar" >Terminar</button>
                        </div>

                        </div>
                        </div>


                    </form>
                </div>
            </div>

        );
    }
}
export default Papeleria;