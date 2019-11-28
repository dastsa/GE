import React, { Component } from "react";
import logo from '../../imagenes/logo2.png'
class subAcudientes extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="container-contact100 ">
                    <div className="row">
                        <img src={logo} Style="width: 100%; height: 100%;" alt="logo" />
                    </div>
                    <div className="wrap-contact100">
                        <form className="col-" action="">
                            <div id="form-group">
                                <div className="form-group">
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre del Acudiente:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Parentezco:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" required />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>

                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Documento Madre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre madre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" disabled="disabled" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>


                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Documento padre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el nombre del acudiente" name="website" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="App-subtitulo2" for="website">Nombre padre:</label>
                                        <input type="text" className="form-control Input-Style" id="website" placeholder="Digite el parentezco" name="website" disabled="disabled" />
                                        <div className="valid-feedback">Validado.</div>
                                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="Btn-aceptar">Aceptar</button>
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
export default subAcudientes;