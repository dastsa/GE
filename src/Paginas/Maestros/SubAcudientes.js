import React, { Component } from "react";
class subAcudientes extends Component {
    render() {
        return (
            <div id="form-group">
                <div className="form-group">
                    <div className="form-group">
                        <label for="website">Nombre del Acudiente:</label>
                        <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
                        <div className="valid-feedback">Validado.</div>
                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                    </div>
                    <div className="form-group">
                        <label for="website">Parentezco:</label>
                        <input type="text" className="form-control" id="website" placeholder="URL de tu sitio web" name="website" required />
                        <div className="valid-feedback">Validado.</div>
                        <div className="invalid-feedback">Por favor rellene este campo.</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default subAcudientes;