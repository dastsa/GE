import React, { Component } from "react";
import $ from 'jquery';
import Logo from '../imagenes/logo20.png';
import Escuelas from "./Maestros/Escuelas";
import InformacionPersonal from "./Jugador/Perfil/Informacion/Personal";
import InformacionDeportiva from "./Jugador/Perfil/Informacion/Deportiva";

import ProfesorAsistencia from "./Profesor/Entrenamiento/Asistencia"
import PlanearEntrenamiento from "./Profesor/Entrenamiento/PlanearEntrenamiento"
import Acudientes from "./Maestros/Acudientes";
import Jugadores from "./Maestros/Jugadores";
import Profesores from "./Maestros/Profesores";
import Asistencia from "./Profesor/Entrenamiento/Asistencia";
import Papeleria from "./Maestros/Papeleria";
import Tallas from "./Maestros/Tallas";
import Deportes from "./Maestros/Deportes";

class Page extends Component {
    constructor() {
        super();
        this.state = {
            estAcudientes: false,
            estCategorias: false,
            estEscuelas: false,
            estProfesorAsitencia: false,
        };
    }


    showAcudientes() {
        this.setState({ estAcudientes: false, estCategorias: false, estEscuelas: false, estProfesorAsitencia: false });
    }
    showCategorias() {
        this.setState({ estAcudientes: false, estCategorias: false, estEscuelas: false, estProfesorAsitencia: false });
    }
    showeEscuelas() {
        this.setState({ estAcudientes: false, estCategorias: false, estEscuelas: false, estProfesorAsitencia: false });
    }
    showProfesorAsistencia() {
        this.setState({ estAcudientes: false, estCategorias: false, estEscuelas: false, estProfesorAsitencia: false });
    }

    componentDidMount(){
        let height= window.clientHeight;
        let hn= document.getElementById("headerN").height;
        $("#sidebar").css({'height':(height-hn-100)+"px"})

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <header className="py-1 bg-image-full fondo" id="headerN" >
                            <img class="img-fluid d-block mx-auto" src={Logo} alt="" />
                        </header>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="wrapper sticky-top">
                            <aside id="sidebar" className="sticky-top style-0 calcularTamaño"  >
                                <div className="sidebar-header sticky-top">
                                    <h3 className="App-titulo">Gestion Deportiva</h3>
                                </div>
                                <ul className="list-unstyled components">
                                    <p>Jugador</p>

                                    <li className="active">
                                        <a href="#perfilJugador" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Perfil</a>
                                        <ul className="collapse list-unstyled" id="perfilJugador">
                                            <li>
                                                <a href="#info" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Información</a>
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
                                    <li className="active">
                                        <a href="#avanceJugador" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Avance</a>
                                        <ul className="collapse list-unstyled" id="avanceJugador">
                                            <li>
                                                <a href="#">Parte medico</a>
                                            </li>
                                            <li>
                                                <a href="#">Estado Futbolistico</a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                                <ul className="list-unstyled components">
                                    <p>Profesor</p>

                                    <li className="active">
                                        <a href="#perfilProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Perfil</a>
                                        <ul className="collapse list-unstyled" id="perfilProfesor">
                                            <li>
                                                <a href="#">Información </a>
                                            </li>
                                            <li>
                                                <a href="#">Formación Academica</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="active">
                                        <a href="#entrenamientoProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Entrenamiento</a>
                                        <ul className="collapse list-unstyled" id="entrenamientoProfesor">
                                            <li>
                                                <a href="#">Categorías</a>
                                            </li>
                                            <li>
                                                <a href="#">Planear Entrenamiento</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={this.showProfesorAsistencia.bind(this)}>Asistencia</a>
                                            </li>
                                            <li>
                                                <a href="#">Grupo</a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                                <ul className="list-unstyled components">
                                    <p>Administrador</p>
                                    <li className="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Jugadores</a>
                                    </li>
                                    <li className="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Profesores</a>
                                    </li>
                                    <li className="active">
                                        <a href="#equiposAdministrador" data-toggle="collapse" aria-expanded="false" >Equipos</a>
                                    </li>
                                    <li className="active">
                                        <a href="#acudientesAdministrador" data-toggle="collapse" aria-expanded="false" >Acudientes</a>
                                    </li>
                                    <li className="active">
                                        <a href="#categoriaAdministrador" data-toggle="collapse" aria-expanded="false" >Categorías</a>
                                    </li>

                                    <li className="active">
                                        <a href="#adminJugadores" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Jugador</a>
                                        <ul className="collapse list-unstyled" id="adminJugadores">
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

                                    <li className="active">
                                        <a href="#adminProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Profesor</a>
                                        <ul className="collapse list-unstyled" id="adminProfesor">
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

                                    <li className="active">
                                        <a href="#adminEscuela" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Escuela</a>
                                        <ul className="collapse list-unstyled" id="adminEscuela">
                                            <li>
                                                <a href="#">Sede</a>
                                            </li>
                                        </ul>

                                    </li>

                                </ul>
                            </aside>

                            <div id="content">
                                <nav className="navbar navbar-expand-lg sticky-top ">
                                    <div className="container-fluid">
                                        <button type="button" id="sidebarCollapse" className="navbar-btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <i className="fas fa-align-justify"></i>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="nav navbar-nav ml-auto">
                                                <li className="nav-item active">
                                                    <div className="row">
                                                        <div className="col-xs-6 col-md-4">
                                                            {/* {<img className="rounded-circle" src="https://www.juventuz.com/data/avatars/m/21/21868.jpg?1560872557" alt="" /> */}
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
                                        <div className="col-12 style-0 calcularTamañoCont" >
                                            {this.state.estAcudientes && <InformacionPersonal />}
                                            {this.state.estCategorias && <InformacionDeportiva />}
                                            {this.state.estEscuelas && <Escuelas />}
                                            {this.state.estProfesorAsitencia && <ProfesorAsistencia />}
                                            < Jugadores />
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