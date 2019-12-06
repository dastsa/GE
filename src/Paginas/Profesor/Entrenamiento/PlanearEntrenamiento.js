import React, { Component } from "react";
import $ from 'jquery';
import Calendar from 'react-calendar';

class PlanearEntrenamiento extends Component {
    constructor() {
        super();
        this.date = new Date();
        this.fechaF=" ";
    }
    state = {
        date: new Date(),
    }

    onChange = date => {

        this.date = date;
        console.log(this.date.toDateString())
        var cut = this.date.toDateString()
        var sep = " ";
        var cut2= cut.split(sep,4)


        var mesl = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var mesn =["01","02","03","04","05","06","07","08","09","10","11","12"];

        for (let i = 0; i < mesl.length; i++) {
            var m = mesl[i];

            if(m===cut2[1]){
                cut2[1] = mesn[i]
                var fechafinal = cut2[1]
                this.fechaF = cut2[2] + "/" + fechafinal + "/" + cut2[3]
            }
            console.log(this.fechaF)
        }


    }


    split() {
        const date = this.date;
        //date.toLocaleString("es-CO", {timezone:"America/New_York"})
        //console.log(date.toDateString())

        var fecha = date.toDateString().split(" ");

        var fechaR = fecha[2] + "/" + date.getMonth() + "/" + fecha[3];


        //console.log(fechaR);

    }

    render() {
        return (


            <div className="container-fluid">
                <div className="container-contact100">
                    <form className="container-contact100" action="">
                        <div className="d-flex flex-wrap">

                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group margin">
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-12">

                                    <div className="form-group margin">
                                        <textarea className="style-0 margin Input-Style textinput" placeholder="Digita la planeación de tu entrenamiento en este apartado"></textarea>
                                    </div>


                                    <div className="form-group">
                                        <button type="button" Style="margin: 20px;" className="Btn-aceptar">Planear</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    };
}


export default PlanearEntrenamiento;