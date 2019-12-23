// @packages
import React, { Component } from "react";

class Profesor extends Component {
    render() {
        const {
            onShowPasistencia,
            onShowPcategoria,
            onShowPgrupo,
            onShowPplanearentrenamiento,
            onShowPformacionacademica,
            onShowPinformacion,
            onShowPpapeleria,
            onShowPpartidos,
        } = this.props;

        return (
            <div>
                <p>Profesor</p>

                <li className="active">
                    <a href="#perfilProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Perfil</a>
                    <ul className="collapse list-unstyled" id="perfilProfesor">
                        <li>
                            <a href="#"onClick={onShowPinformacion}>Información </a>
                        </li>
                        <li>
                            <a href="#"onClick={onShowPformacionacademica}>Formación Academica</a>
                        </li>
                        <li>
                            <a href="#"onClick={onShowPpapeleria}>Papelería</a>
                        </li>
                    </ul>
                </li>

                <li className="active">
                    <a href="#entrenamientoProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Entrenamiento</a>
                    <ul className="collapse list-unstyled" id="entrenamientoProfesor">
                        <li>
                            <a href="#" onClick={onShowPcategoria}>Categorías</a>
                        </li>
                        <li>
                            <a href="#"onClick={onShowPplanearentrenamiento}>Planear Entrenamiento</a>
                        </li>
                        <li>
                            <a href="#"onClick={onShowPpartidos}>Partidos</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowPasistencia}>Asistencia</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowPgrupo}>Grupo</a>
                        </li>
                    </ul>
                </li>
            </div>
        )
    };
}

export default Profesor;