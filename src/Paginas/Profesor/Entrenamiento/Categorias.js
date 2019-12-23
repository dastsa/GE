import React, { Component } from "react";
import bd from "./bd";
import Logo from '../../../imagenes/hazard.jpg';

class Categorias extends Component {
    render() {
        return (

            <div className="container-fluid">

                <div className="row">
                    <div className="form-group row col-lg-5 col-sm-12 mr-2"></div>
                    <div className="form-group row col-lg-7 col-sm-12 mr-2">
                        <label className="App-subtitulo2 " htmlFor="fotoPerfil">Categoria de jugadores</label>
                    </div>
                </div>


                <select id="categoria" className=" form-control Input-Style">
                    <option value="value1">Seleccione una categoria</option>
                    <option value="value2">Sub 15</option>
                    <option value="value3">Primera B</option>
                </select>
                <div className="d-flex flex-wrap">
                    {
                        bd.map((data) => {
                            return (
                                <div>

                                    <img className="" Style="border: 30px solid transparent;" src={Logo} alt="" />
                                    <p>{data.nombre}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    };
}

export default Categorias;