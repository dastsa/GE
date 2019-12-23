// @packages
import React, { Component } from "react";
import $ from 'jquery';

class Administrador extends Component {

    componentDidMount() {
        $("#check").on("click", function () {
            $("#content").css("display", "block");
        });
    };


    render() {
        const {
            onShowAjugador,
            onShowAprofesor,
            onShowAequipos,
            onShowAescuelas,
            onShowAacudientes,
            onShowAgrupos,
            onShowAcategorias,
            onShowAeventorecaudo,
            onShowAJinformacion,
            onShowAgruposmanual,
            onShowJinformacionD,
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
            <div>


                <input type="checkbox" name="check" id="check" value="1" onchange="javascript:showContent()" />


                <p>Administrador</p>

                <li className="active" data-toggle="collapse" aria-expanded="false" id="content" Style="display: none;">
                    <a>xddddddd</a>
                </li>

                <li className="active">
                    <a href="#equiposAdministrador" onClick={onShowAjugador} data-toggle="collapse" aria-expanded="false" >Jugadores</a>
                </li>
                <li className="active">
                    <a href="#equiposAdministrador" onClick={onShowAprofesor} data-toggle="collapse" aria-expanded="false" >Profesores</a>
                </li>
                <li className="active">
                    <a href="#equiposAdministrador" onClick={onShowAeventorecaudo} data-toggle="collapse" aria-expanded="false" >Evento Recaudo</a>
                </li>
                <li className="active">
                    <a href="#equiposAdministrador" onClick={onShowAescuelas} data-toggle="collapse" aria-expanded="false" >Escuela</a>
                </li>
                <li className="active">
                    <a href="#acudientesAdministrador" onClick={onShowAacudientes} data-toggle="collapse" aria-expanded="false" >Acudientes</a>
                </li>
                <li className="active">
                    <a href="#categoriaAdministrador" onClick={onShowAcategorias} data-toggle="collapse" aria-expanded="false" >Categorías</a>
                </li>

                <li className="active">
                    <a href="#grupos" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Grupos</a>
                    <ul className="collapse list-unstyled" id="grupos">
                        <li>
                            <a href="#" onClick={onShowAgrupos}>Generar</a>
                        </li>

                        <li>
                            <a href="#grupomanual" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Manual</a>
                            <ul id="grupomanual">

                                <li>
                                    <a href="#" onClick={onShowAgruposmanual}>Editar</a>
                                </li>
                                <li>
                                    <a href="#" >Eliminar</a>
                                </li>
                                <li>
                                    <a href="#" >Reporte</a>
                                </li>

                            </ul>

                        </li>

                    </ul>
                </li>

                <li className="active">
                    <a href="#adminJugadores" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Jugador</a>
                    <ul className="collapse list-unstyled" id="adminJugadores">
                        <li>
                            <a href="#infoju" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Información</a>
                            <ul id="infoju">

                                <li>
                                    <a href="#" onClick={onShowAJinformacion}>Personal</a>
                                </li>
                                <li>
                                    <a href="#" onClick={onShowJinformacionD}>Deportiva</a>
                                </li>

                            </ul>

                        </li>
                        <li>
                            <a href="#" onClick={onShowAJpapeleria}>Papelería</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAJestadoFut}>Estado Futbolístico</a>
                        </li>
                    </ul>
                </li>

                <li className="active">
                    <a href="#adminProfesor" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Profesor</a>
                    <ul className="collapse list-unstyled" id="adminProfesor">
                        <li>
                            <a href="#" onClick={onShowAPinformacion}>Información</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPpapeleria}>Papelería</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPcategoria}>Categoría</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPgrupos}>Grupos</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPplanearEntre}>Planear Entrenamiento</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPasistencia}>Asistencia</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPgrupo}>Grupo</a>
                        </li>
                    </ul>
                </li>

                <li className="active">
                    <a href="#adminEscuela" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Administrar Escuela</a>
                    <ul className="collapse list-unstyled" id="adminEscuela">
                        <li>
                            <a href="#" onClick={onShowAequipos}>Escuelas</a>
                        </li>
                        <li>
                            <a href="#" onClick={onShowAPsede}>Sede</a>
                        </li>
                    </ul>

                </li>
            </div>
        )
    };
}

export default Administrador;