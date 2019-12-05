import React, { Component } from "react";
import $ from 'jquery';
import Calendar from 'react-calendar';

class PlanearEntrenamiento extends Component {
    constructor() {
        super();
        this.date = new Date();
        this.fechaF = "";
    }
    state = {
        date: new Date(),
    }

    onChange = date => {

        this.date = date;
        var cut = this.date.toDateString()
        var sep = " ";
        var cut2= cut.split(sep,4)
        var dat = cut2[2] + "/" + cut2[1] + "/" + cut2[3]
        //console.log(dat)
        var m = 0;
        var mesl = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var mesn =["01","02","03","04","05","06","07","08","09","10","11","12"];

        for (let i = 0; i < mesl.length; i++) {
            var m = mesl[i];

            if(m==cut2[1]){
                cut2[1] = mesn[i]
                var fechafinal = cut2[1]
                this.fechaF = cut2[2] + "/" + fechafinal + "/" + cut2[3]
            }
        } 
    }

    insertar() {

    }
    split() {
        const date = this.date;
        var fecha = date.toDateString().split(" ");
        var fechaR = fecha[2] + "/" + date.getMonth() + "/" + fecha[3];
    }
    render() {
        return (
            <div className="container-fluid">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">
                            <div className="row">
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group margin">
                                        <textarea rows="10" cols="32" className="style-0 margin Input-Style" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" Style="margin: 20px;" className="Btn-aceptar">Planear</button>
                                        <h1>{this.fechaF}</h1>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </form>
                
            </div>
        )
    };
}


export default PlanearEntrenamiento;