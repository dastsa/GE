import React, { Component } from "react";
import bd from "./bd";
import Logo from '../../../imagenes/hazard.jpg';

class Categorias extends Component{
    render(){
        return(
            <div className="container-fluid">
                <select>
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