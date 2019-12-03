import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Grupos extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div className="container-contact100 ">

                    <form className="container-contact100 " action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label for="anioG" className="App-subtitulo2">AÑO :</label>
                                <input type="number" className="form-control Input-Style" id="anioG" placeholder="Año" name="anioG" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="webplan" className="App-subtitulo2">JUGADOR:</label>
                                <select id="inputState" className="form-control Input-Style">
                                    <option selected>Elige un Jugador...</option>
                                    <option>Elige...</option>

                                </select>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="App-button">enviar</button>
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
export default Grupos;