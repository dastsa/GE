// @packages
import React, { Component } from "react";

class Jugador extends Component {
    render() {
        const {
            onShowJpersonal,
            onShowJdeportiva,
            onShowJpapeleria,
            onShowJparteMedico,
            onShowJestadoFut,
        
        } = this.props;

        return (
            <div>
                <p>Jugador</p>

                <li className="active">
                    <a href="#perfilJugador" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Perfil</a>
                    <ul className="collapse list-unstyled" id="perfilJugador">
                        <li>
                            <a href="#info" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Información</a>
                            <ul id="info">

                                <li>
                                    <a href="#" onClick={onShowJpersonal}>Personal</a>
                                </li>
                                <li>
                                    <a href="#" onClick={onShowJdeportiva}>Deportiva</a>
                                </li>

                            </ul>

                        </li>


                        <li>
                            <a href="#" onClick={onShowJpapeleria}>Papelería</a>
                        </li>
               
                    </ul>
                </li>
                <li className="active">
                    <a href="#avanceJugador" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Avance</a>
                    <ul className="collapse list-unstyled" id="avanceJugador">
                        <li>
                            <a href="#" onClick={onShowJparteMedico}>Parte medico</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowJestadoFut}>Estado Futbolistico</a>
                        </li>
                    </ul>
                </li>
            </div>
        )
    };
}

export default Jugador;