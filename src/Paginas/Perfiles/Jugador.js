import React, { Component } from "react";

class Jugador extends Component{
    constructor() {
        super();
        this.state = {
            estAcudientes: false,
            estCategorias: false,
            estEscuelas: false,
            estP:true
        };
    }
    showAcudientes() {
        this.setState({ estAcudientes: true, estCategorias: false, estEscuelas: false});
    }
    render(){
        return(
            <div>
                <p>Jugador</p>

                <li class="active">
                    <a href="#perfilJugador" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Perfil</a>
                    <ul class="collapse list-unstyled" id="perfilJugador">
                        <li>
                            <a href="#" onClick={this.showAcudientes.bind(this)}>Información</a>
                        </li>
                        <li>
                            <a href="#">Papelería</a>
                        </li>
                        <li>
                            <a href="#">Categoría</a>
                        </li>
                    </ul>
                </li>
                <li class="active">
                    <a href="#avanceJugador" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Avance</a>
                    <ul class="collapse list-unstyled" id="avanceJugador">
                        <li>
                            <a href="#">Parte medico</a>
                        </li>
                        <li>
                            <a href="#">Estado Futbolistico</a>
                        </li>
                    </ul>
                </li>
            </div>
        )
    };
}

export default Jugador;