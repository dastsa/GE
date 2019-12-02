import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Logo from '../imagenes/logo20.png';
import Acudientes from "./Maestros/Acudientes";
import Categorias from "./Maestros/Categorias";
import Escuelas from "./Maestros/Escuelas";
import InformacionPersonal from "./Jugador/Perfil/Informacion/Personal";
import Jugadores from "./Maestros/Jugadores";
import InformacionDeportiva from "./Jugador/Perfil/Informacion/Deportiva";

class Page extends Component {
    constructor() {
        super();
        this.state = {
            estAcudientes: false,
            estCategorias: false,
            estEscuelas: false
        };
    }
    showAcudientes() {
        this.setState({ estAcudientes: true, estCategorias: false, estEscuelas: false });
    }
    showCategorias() {
        this.setState({ estAcudientes: false, estCategorias: true, estEscuelas: false });
    }
    showeEscuelas() {
        this.setState({ estAcudientes: false, estCategorias: false, estEscuelas: true });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <header className="py-3 bg-image-full fondo" >
                            <img class="img-fluid d-block mx-auto" src={Logo} alt="" />
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper sticky-top">
                            <nav id="sidebar" className="sticky-top style-0" Style="overflow-y:scroll; height:600px" >
                                <div class="sidebar-header sticky-top">
                                    <h3 className="App-titulo">Gestion Deportiva</h3>
                                </div>
                                <ul class="list-unstyled components">
                                    <p>Jugador</p>

                                    <li class="active">
                                        <a href="#perfilJugador" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Perfil</a>
                                        <ul class="collapse list-unstyled" id="perfilJugador">
                                            <li>
                                                <a href="#info" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Información</a>
                                                <ul id="info">

                                                    <li>
                                                         <a href="#" onClick={this.showAcudientes.bind(this)}>Personal</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={this.showCategorias.bind(this)}>Deportiva</a>
                                                    </li>

                                                </ul>

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

                                </ul>

                                <ul class="list-unstyled components">
                                    <p>Profesor</p>

                                    <li class="active">
                                        <a href="#perfilProfesor" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Perfil</a>
                                        <ul class="collapse list-unstyled" id="perfilProfesor">
                                            <li>
                                                <a href="#">Información </a>
                                            </li>
                                            <li>
                                                <a href="#">Formación Academica</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="active">
                                        <a href="#entrenamientoProfesor" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Entrenamiento</a>
                                        <ul class="collapse list-unstyled" id="entrenamientoProfesor">
                                            <li>
                                                <a href="#">Categorías</a>
                                            </li>
                                            <li>
                                                <a href="#">Planear Entrenamiento</a>
                                            </li>
                                            <li>
                                                <a href="#">Asistencia</a>
                                            </li>
                                            <li>
                                                <a href="#">Grupo</a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                                <ul class="list-unstyled components">
                                    <p>Administrador</p>
                                    <li class="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Jugadores</a>
                                    </li>
                                    <li class="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Profesores</a>
                                    </li>
                                    <li class="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Equipos</a>
                                    </li>
                                    <li class="active">
                                        <a href="#acudientesAdministrador" data-toggle="collapse" aria-expanded="false" >Acudientes</a>
                                    </li>
                                    <li class="active">
                                        <a href="#categoriaAdministrador" data-toggle="collapse" aria-expanded="false" >Categorías</a>
                                    </li>

                                    <li class="active">
                                        <a href="#adminJugadores" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Administrar Jugador</a>
                                        <ul class="collapse list-unstyled" id="adminJugadores">
                                            <li>
                                                <a href="#" >Información</a>
                                            </li>
                                            <li>
                                                <a href="#">Papelería</a>
                                            </li>
                                            <li>
                                                <a href="#">Categoría</a>
                                            </li>
                                            <li>
                                                <a href="#">Estado Futbolístico</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="active">
                                        <a href="#adminProfesor" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Administrar Profesor</a>
                                        <ul class="collapse list-unstyled" id="adminProfesor">
                                            <li>
                                                <a href="#">Información</a>
                                            </li>
                                            <li>
                                                <a href="#">Papelería</a>
                                            </li>
                                            <li>
                                                <a href="#">Categoría</a>
                                            </li>
                                            <li>
                                                <a href="#">Grupos</a>
                                            </li>
                                            <li>
                                                <a href="#">Planear Entrenamiento</a>
                                            </li>
                                            <li>
                                                <a href="#">Asistencia</a>
                                            </li>
                                            <li>
                                                <a href="#">Grupo</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="active">
                                        <a href="#adminEscuela" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Administrar Escuela</a>
                                        <ul class="collapse list-unstyled" id="adminEscuela">
                                            <li>
                                                <a href="#">Sede</a>
                                            </li>
                                        </ul>

                                    </li>

                                </ul>
                            </nav>

                            <div id="content">
                                <nav class="navbar navbar-expand-lg sticky-top ">
                                    <div class="container-fluid">
                                        <button type="button" id="sidebarCollapse" class="navbar-btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <i class="fas fa-align-justify"></i>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="nav navbar-nav ml-auto">
                                                <li class="nav-item active">
                                                    <div className="row">
                                                        <div className="col-xs-6 col-md-4">
                                                            <img className="rounded-circle" src="https://www.juventuz.com/data/avatars/m/21/21868.jpg?1560872557" alt="" />
                                                        </div>
                                                        <div className=".col-xs-12 col-md-8 align-items-md-center" Style="text-align:center">
                                                            <p className="App-subtitulo align-items-md-center" Style="text-align:center">Cristiano Ronaldo</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="container-fluid " >
                                    <div className="row" >
                                        <div className="col-12 style-0 " Style="overflow-y:scroll; height:500px;" >
                                            {this.state.estAcudientes && <InformacionPersonal/>}
                                            {this.state.estCategorias && <InformacionDeportiva />}
                                            {this.state.estEscuelas && <Escuelas />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;