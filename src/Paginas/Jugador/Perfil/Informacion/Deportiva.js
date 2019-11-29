import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";
import logo from '../../../../imagenes/logo2.png'

class InformacionDeportiva extends Component {

    render() {
        return (
            <div className="App-header">
                <div className="container-contact100 ">
                    <div className="wrap-contact100">
                        <form className="col-" action="">

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="fotoJug">FOTO DE PERFIL:</label>
                                    <input type="file" className="form-control Input-Style" id="fotoJug" name="fotoJug" required />
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="nroDeportivo">NÚMERO DEPORTIVO:</label>
                                    <input type="file" className="form-control Input-Style" id="nroDeportivo" name="nroDeportivo" required />
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="fechaInscripcion">FECHA DE INSCRIPCIÓN:</label>
                                    <input type="date" className="form-control Input-Style" id="fechaInscripcion" name="fechaInscripcion" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionmJug">POSICIÓN PRINCIPALl:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionmJug" placeholder="Posición en el campo" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionsJug">POSICIÓN SECUNDARIA:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionsJug" placeholder="Posición secundaría" name="posicionsJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="piernaHabil">PIERNA HABIL:</label>
                                    <input type="text" className="form-control Input-Style" id="piernaHabil" name="piernaHabil" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="tallacJug">TALLA DE CAMISA:</label>
                                    <select id="gradoJug" className="form-control Input-Style">
                                        <option>S</option>
                                        <option>L</option>
                                        <option>M</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="tallapJug">TALLA DE PANTALÓN:</label>
                                    <select id="tallapJug" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>M</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="estatura">ESTATURA:</label>
                                    <input type="text" className="form-control Input-Style" id="esatura"  name="estatura" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group">
                                    <label className="App-subtitulo2" for="peso">PESO:</label>
                                    <input type="text" className="form-control Input-Style" id="peso"  name="peso" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                
                                <div className="form-group">
                                    <label className="App-subtitulo2" for="posicionmJug">BECADO:</label>
                                    <input type="number" className="form-control Input-Style" id="posicionmJug" placeholder="Digite el porcentaje de la beca" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>


                                <div class="row">
                                  
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="submit" className="Btn-aceptar">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                              
                           
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
export default InformacionDeportiva;