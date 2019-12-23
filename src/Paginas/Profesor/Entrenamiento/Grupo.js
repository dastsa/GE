import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import bd from "../../Profesor/bd";
import Logo from '../../../imagenes/hazard.jpg';

class Grupos extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <h1>Grupos</h1>

                    </form>
                </div>
            </div>

        );
    }
}
export default Grupos;