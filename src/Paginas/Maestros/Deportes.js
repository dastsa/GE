import React, { Component } from "react";
import $ from 'jquery';

class Deportes extends Component {


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
            <div class="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                       

                        <div>
                        <div className="form-group">
                                <label for="nombreDep" className="App-subtitulo2">NOMBRE:</label>
                                <input onChange={this.onKeyPress('nombreDep')}type="text" className="form-control Input-Style" id="nombreDep" placeholder="Nombre deporte" name="nombreDep" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>


                            <div className="form-group">
                                <label for="estado" className="App-subtitulo2">ESTADO:</label>
                                <select onChange={this.onKeyPress('tipoDoc')} id="estado" className="form-control Input-Style">
                                    <option selected>Elige...</option>
                                    <option>Visible</option>
                                    <option>No visible</option>
                                </select>
                            </div>


                            <div className="form-group">
                            <button type="button" className="Btn-aceptar" >Terminar</button>
                        </div>

                        </div>
                        


                    </form>
                </div>
            </div>

        );
    }
}
export default Deportes;