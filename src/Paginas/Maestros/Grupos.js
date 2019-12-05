import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import datos from './selectBd';

class Grupos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        año: "",
        jugador: ""
    }

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
                
                <div className="wrap-contact100">
                
                    <form className="col-" action="">
                        <div id="seccion1">
                            <div className="form-group">
                                <label for="anioG" className="App-subtitulo2">AÑO :</label>
                                <input type="number" onChange={this.onKeyPress('año')} className="form-control Input-Style" id="anioG" placeholder="Año" name="anioG" required />
                                <div className="valid-feedback">Validado.</div>
                                <div className="invalid-feedback">Por favor rellene este campo.</div>
                            </div>
                            <div className="form-group">
                                <label for="jugador" className="App-subtitulo2">JUGADOR:</label>
                                <select id="jugador" onChange={this.onKeyPress('jugador')} className="form-control Input-Style">
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
        </div>
        );
    }
}
export default Grupos;