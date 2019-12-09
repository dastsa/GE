import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
//import Acudientes from "./SubAcudientes";

class InformacionDeportiva extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">


                            <div className="row">

                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="fotoJug">FOTO DE PERFIL:</label>
                                    <input type="text" className="form-control Input-Style" id="fotoJug" name="fotoJug" required />
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="nroDeportivo">NÚMERO DEPORTIVO:</label>
                                    <input type="text" className="form-control Input-Style" id="nroDeportivo" name="nroDeportivo" required />
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="fechaInscripcion">FECHA DE INSCRIPCIÓN:</label>
                                    <input type="date" className="form-control Input-Style" id="fechaInscripcion" name="fechaInscripcion" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                            </div>



                            <div className="row">
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="posicionmJug">POSICIÓN PRINCIPAL:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionmJug" placeholder="Posición en el campo" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="posicionsJug">POSICIÓN SECUNDARIA:</label>
                                    <input type="text" className="form-control Input-Style" id="posicionsJug" placeholder="Posición secundaría" name="posicionsJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="piernaHabil">PIERNA HABIL:</label>
                                    <input type="text" className="form-control Input-Style" id="piernaHabil" name="piernaHabil" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="tallacJug">TALLA DE CAMISA:</label>
                                    <input type="text" className="form-control Input-Style" id="tallaCamisa" name="tallaCamisa" required />
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="tallapJug">TALLA DE PANTALÓN:</label>
                                    <input type="text" className="form-control Input-Style" id="tallaPantalon" name="tallaPantalon" required />
                                </div>
                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="estatura">ESTATURA:</label>
                                    <input type="text" className="form-control Input-Style" id="esatura" name="estatura" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>


                            </div>

                            <div className="row">

                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="peso">PESO:</label>
                                    <input type="text" className="form-control Input-Style" id="peso" name="peso" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>


                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="posicionmJug">BECADO:</label>
                                    <input type="number" className="form-control Input-Style" id="posicionmJug" placeholder="Porcentaje de la beca" name="posicionmJug" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group margin">
                                    <label className="App-subtitulo2" htmlFor="jornadaJug">JORNADA ENTRENAMIENTO:</label>
                                    <select id="jornadaJug" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>Diurna</option>
                                        <option>Mixta</option>
                                        <option>Nocturna</option>
                                    </select>
                                </div>


                            </div>
                           
                        </div>
                        <div className="row container-fluid">
                                <div className="form-group margin">
                                    <button type="button" className="Btn-aceptar margin">Editar información</button>
                                </div>
                            </div>



                    </form>
                </div>
            </div>

        );
    }
}
export default InformacionDeportiva;