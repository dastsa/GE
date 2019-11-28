import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../imagenes/logo2.png'

class Acudientes extends Component {
    componentDidMount() {
        $("#seccion1").show();
        $("#seccion2 , #seccion3").hide();
    };
    ocultar() {
        $("#seccion1, #seccion3").hide();
        $("#seccion2").show();
    };
    ocultar2() {
        $("#seccion1, #seccion2").hide();
        $("#seccion3").show();
    };

    mostrar() {
        $("#seccion2, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion1").show();
    };
    mostrar2() {
        $("#seccion1, #seccion3, #seccion4, #seccion5, #seccion6, #seccion7").hide();
        $("#seccion2").show();
    };
    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <header className="py-5 bg-image-full" Style="background-image: url('https://unsplash.it/1900/1080?image=1076');" >
                            <img class="img-fluid d-block mx-auto" src="http://www.aprocom.com.co/img/imgInicio/90x50%20pxl.png" alt="" />
                        </header>
                    </div>
                </div>


                <div class="wrapper">
       
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Gestion Deportiva</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>

        
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div class="container-fluid ">
                    <div className="row bg-dark">
                        <form className="container-contact100 " action="">
                            <div id="seccion1">
                                <div className="form-group ">
                                    <label for="tipoDocP" className="App-subtitulo2">TIPO DE DOCUMENTO:</label>
                                    <select id="tipoDoc" className="form-control Input-Style">
                                        <option selected>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="nroIp" className="App-subtitulo2">NUMERO DE DOCUMENTO:</label>
                                    <input type="text" className="form-control Input-Style" id="nroIp" placeholder="Numero de documento de identidad" name="nroIp" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="lugarExp" className="App-subtitulo2">LUGAR DE EXPEDICION:</label>
                                    <input type="text" className="form-control Input-Style" id="lugarExp" placeholder="Ciudad" name="lugarExp" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="fechaExp" className="App-subtitulo2">FECHA DE EXPEDICION:</label>
                                    <input type="date" className="form-control Input-Style" id="fechaExp" name="fechaExp" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>

                                <div className="form-group">
                                    <button type="button" className="Btn-aceptar" onClick={this.ocultar.bind(this)}>Siguiente</button>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:33%">33%</div>
                                </div>
                            </div>
                            <div id="seccion2">
                                <div className="form-group">
                                    <label for="nomAcu" className="App-subtitulo2">NOMBRES:</label>
                                    <input type="text" className="form-control Input-Style" id="nomAcu" placeholder="Nombre" name="nomAcu" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="apeAcu" className="App-subtitulo2">APELLIDOS:</label>
                                    <input type="text" className="form-control Input-Style" id="apeAcu" placeholder="Apellidos" name="apeAcu"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="profesionAcu " className="App-subtitulo2">PROFESION:</label>
                                    <input type="text" className="form-control Input-Style" id="profesionAcu" placeholder="Profesión" name="profesionAcu"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="ciudadNac" className="App-subtitulo2">CORREO ELECTRONICO:</label>
                                    <input type="email" className="form-control Input-Style" id="ciudadNac" placeholder="Apellidos" name="ciudadNac"
                                        required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar.bind(this)}>Atrás</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.ocultar2.bind(this)}>Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:66%">66%</div>
                                </div>
                            </div>
                            <div id="seccion3">
                                <div className="form-group">
                                    <label for="direccionPro" className="App-subtitulo2">DIRECCION:</label>
                                    <input type="text" className="form-control Input-Style" id="direccionPro" placeholder="Direccion" name="direccionPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="barrioPro" className="App-subtitulo2">BARRIO:</label>
                                    <input type="text" className="form-control Input-Style" id="barrioPro" placeholder="Barrio" name="barrioPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="codPostalPro" className="App-subtitulo2">CODIGO POSTAL:</label>
                                    <input type="number" className="form-control Input-Style" id="codPostalPro" placeholder="Codigo postal" name="codPostalPro" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="website" className="App-subtitulo2">ESTRATO:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="website" className="App-subtitulo2">TELEFONO FIJO:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div className="form-group">
                                    <label for="website" className="App-subtitulo2">CELULAR:</label>
                                    <input type="text" className="form-control Input-Style" id="website" placeholder="URL de tu sitio web" name="website" required />
                                    <div className="valid-feedback">Validado.</div>
                                    <div className="invalid-feedback">Por favor rellene este campo.</div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="button" className="Btn-aceptar" onClick={this.mostrar2.bind(this)}>Atrás</button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <button type="submit" className="Btn-aceptar">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar Input-Style" Style="width:100%">100%</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

        </div>
    </div>

                
                    
            </div>

        );
    }
}
export default Acudientes;