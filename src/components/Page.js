// @packages
import React, { Component } from 'react';

// @scripts
//Jugadores
import FormJpersonal from '../Paginas/Jugador/Perfil/Informacion/Personal';
import FormJdeportiva from '../Paginas/Jugador/Perfil/Informacion/Deportiva';
import FormJpapeleria from '../Paginas/Jugador/Perfil/Papeleria';

import FormJparteMedico from '../Paginas/Jugador/Avance/ParteMedico';
import FormJestadoFut from '../Paginas/Jugador/Avance/EstadoFutbolistico';

//Profesores
import FormPasistencia from '../Paginas/Profesor/Entrenamiento/Asistencia';
import FormPcategoria from '../Paginas/Profesor/Entrenamiento/Categorias';
import FormPgrupo from '../Paginas/Profesor/Entrenamiento/Grupo';
import FormPplanearentrenamiento from '../Paginas/Profesor/Entrenamiento/PlanearEntrenamiento';
import FormPformacionacademica from '../Paginas/Profesor/Perfil/FormacionAcademica';
import FormPinformacion from '../Paginas/Profesor/Perfil/Informacion';
import FormPpapeleria from '../Paginas/Profesor/Perfil/Papeleria';


//Admin
import Acudientes from "../Paginas/Maestros/Acudientes";
import Jugadores from "../Paginas/Maestros/Jugadores";
import Profesores from "../Paginas/Maestros/Profesores";
import Categorias from "../Paginas/Maestros/Categorias";
import CEscuela from "../Paginas/Maestros/Escuelas";
import Escuelas from '../Paginas/Admin/Escuelas';
import Sedes from '../Paginas/Admin/Sedes';
import EventoRecaudo from '../Paginas/Admin/EventoRecaudo';
import Grupos from '../Paginas/Admin/Grupos';
import GruposManual from '../Paginas/Admin/GruposManual';


import Partido from "../Paginas/Partidos/Partido";
import Logo from '../imagenes/logo20.png';
import Jugador from '../Paginas/Perfiles/Jugador';
import Administrador from '../Paginas/Perfiles/Administrador';
import Profesor from '../Paginas/Perfiles/Profesor';

export default class Counter extends Component {
    render() {
        const {
            //Jugador
            Jpersonal,
            Jdeportiva,
            Jpapeleria,
            JparteMedico,
            JestadoFut,


            onShowJestadoFut,
            onShowJparteMedico,
            onShowJpapeleria,
            onShowJdeportiva,
            onShowJpersonal,

            //Profesor
            Pasistencia,
            Pcategoria,
            Pgrupo,
            Pplanearentrenamiento,
            Pformacionacademica,
            Pinformacion,
            Ppapeleria,
            Ppartidos,
            onShowPpartidos,
            onShowPasistencia,
            onShowPcategoria,
            onShowPgrupo,
            onShowPplanearentrenamiento,
            onShowPformacionacademica,
            onShowPinformacion,
            onShowPpapeleria,

            //Administrador
            Ajugador,
            Aprofesor,
            Aequipos,
            Aacudientes,
            Aescuelas,
            Agruposmanual,
            Agrupos,
            Aeventorecaudo,
            Acategorias,
            AJinformacion,
            AJinformacionD,
            AJpapeleria,

            AJestadoFut,
            APinformacion,
            APpapeleria,
            APcategoria,
            APgrupos,
            APplanearEntre,
            APasistencia,
            APgrupo,
            APsede,
            onShowAjugador,
            onShowAprofesor,
            onShowAequipos,
            onShowAgruposmanual,
            onShowAgrupos,
            onShowAescuelas,
            onShowAeventorecaudo,
            onShowAacudientes,
            onShowAcategorias,
            onShowAJinformacion,
            onShowAJinformacionD,
            onShowAJpapeleria,

            onShowAJestadoFut,
            onShowAPinformacion,
            onShowAPpapeleria,
            onShowAPcategoria,
            onShowAPgrupos,
            onShowAPplanearEntre,
            onShowAPasistencia,
            onShowAPgrupo,
            onShowAPsede

        } = this.props;

        return (
            <div className="App-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <header className="py-1 bg-image-full fondo" Style="width:auto; height:100px" id="headerN" >
                                <img className="img-fluid d-block mx-auto" Style="width:auto; height:100px" src={Logo} alt="" />
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
                                        <Jugador
                                            onShowJpersonal={onShowJpersonal}
                                            onShowJdeportiva={onShowJdeportiva}
                                            onShowJpapeleria={onShowJpapeleria}
                                            onShowJparteMedico={onShowJparteMedico}
                                            onShowJestadoFut={onShowJestadoFut}

                                        />

                                    </ul>
                                    <ul className="list-unstyled components">
                                        <Profesor
                                            onShowPasistencia={onShowPasistencia}
                                            onShowPcategoria={onShowPcategoria}
                                            onShowPgrupo={onShowPgrupo}
                                            onShowPplanearentrenamiento={onShowPplanearentrenamiento}
                                            onShowPformacionacademica={onShowPformacionacademica}
                                            onShowPinformacion={onShowPinformacion}
                                            onShowPpapeleria={onShowPpapeleria}
                                            onShowPpartidos={onShowPpartidos}

                                        />
                                    </ul>
                                    <ul className="list-unstyled components">
                                        <Administrador
                                            onShowAjugador={onShowAjugador}
                                            onShowAprofesor={onShowAprofesor}
                                            onShowAequipos={onShowAequipos}
                                            onShowAescuelas={onShowAescuelas}
                                            onShowAgruposmanual={onShowAgruposmanual}
                                            onShowAgrupos={onShowAgrupos}
                                            onShowAacudientes={onShowAacudientes}
                                            onShowAeventorecaudo={onShowAeventorecaudo}
                                            onShowAcategorias={onShowAcategorias}
                                            onShowAJinformacion={onShowAJinformacion}
                                            onShowAJinformacionD={onShowAJinformacionD}
                                            onShowAJpapeleria={onShowAJpapeleria}

                                            onShowAJestadoFut={onShowAJestadoFut}
                                            onShowAPinformacion={onShowAPinformacion}
                                            onShowAPpapeleria={onShowAPpapeleria}
                                            onShowAPcategoria={onShowAPcategoria}
                                            onShowAPgrupos={onShowAPgrupos}
                                            onShowAPplanearEntre={onShowAPplanearEntre}
                                            onShowAPasistencia={onShowAPasistencia}
                                            onShowAPgrupo={onShowAPgrupo}
                                            onShowAPsede={onShowAPsede}
                                        />
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
                                                            <div className="col-xs-6 col-md-1">
                                                                <img className="rounded-circle" Style="width:60px;height:60px;margin-right:8px" src="https://www.juventuz.com/data/avatars/m/21/21868.jpg?1560872557" alt="" />
                                                            </div>
                                                            <div className=".col-xs-12 col-md-11 align-items-md-center" >
                                                                <p className="App-subtitulo2" onClick={this.props.increment} Style="text-align:center">Cristiano Ronaldo Dos Santos </p>
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
                                                {Jpersonal && <FormJpersonal />}
                                                {Jdeportiva && <FormJdeportiva />}
                                                {Jpapeleria && <FormJpapeleria />}
                                                {JparteMedico && <FormJparteMedico />}
                                                {JestadoFut && <FormJestadoFut />}

                                            </div>

                                            <div className="col-12 style-0 calcularTamañoCont" >
                                                {Pasistencia && <FormPasistencia />}
                                                {Pcategoria && <FormPcategoria />}
                                                {Pgrupo && <FormPgrupo />}
                                                {Pplanearentrenamiento && <FormPplanearentrenamiento />}
                                                {Pformacionacademica && <FormPformacionacademica />}
                                                {Pinformacion && <FormPinformacion />}
                                                {Ppapeleria && <FormPpapeleria />}
                                                {Ppartidos && <Partido />}
                                            </div>

                                            <div className="col-12 style-0 calcularTamañoCont" >
                                                {Ajugador && <Jugadores />}
                                                {Aprofesor && <Profesores />}
                                                {Aequipos && <Escuelas />}
                                                {Agruposmanual && <GruposManual />}
                                                {Agrupos && <Grupos />}
                                                {Aescuelas && <CEscuela />}
                                                {Aeventorecaudo && <EventoRecaudo />}
                                                {Aacudientes && <Acudientes />}
                                                {Acategorias && <Categorias />}
                                                {AJinformacion && <FormJpersonal />}
                                                {AJinformacionD && <FormJdeportiva />}
                                                {AJpapeleria && <FormJpapeleria />}

                                                {AJestadoFut && <FormJestadoFut />}
                                                {APinformacion && <FormPinformacion />}
                                                {APpapeleria && <FormPpapeleria />}
                                                {APcategoria && <FormPcategoria />}
                                                {APgrupos && <FormPgrupo />}
                                                {APplanearEntre && <FormPplanearentrenamiento />}
                                                {APasistencia && <FormPasistencia />}
                                                {APgrupo && <FormPgrupo />}
                                                {APsede && <Sedes />}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}