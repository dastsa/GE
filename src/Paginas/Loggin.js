import React, { Component } from "react";
import logo from '../imagenes/cuadros logo.png'

class Loggin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    nombre: "",
    categoria: "",
    fecha: "",
    hora: "",
    lugar: "",
    cantidad: "",
    detalle: ""
  };
  onKeyPress = field => {
    return evt => {
      const val = evt.target.value;
      const newState = { ...this.state }
      newState[field] = val;
      this.setState(newState);
    }
  }

  render() {
    return (

      <div className="App-header">
        <div className="container-contact100">

          <div className="row">
            <img src={logo} Style="width: 100%; height: 100%;" alt="img" />
          </div>




          <div className="wrap-contact100">
            <form className="col-" action="">

              <div className="form-group">
                <h3 className="App-subtitulo2">USUARIO</h3>
                <input type="user" name="user" id="inputUser" className="Input-Style form-control form-group" placeholder="Digite su nombre de usuario" required autofocus />
              </div>

              <div className="form-group">
                <h3 className="App-subtitulo2">PASSWORD</h3>
                <input className="Input-Style form-control form-group" type="password" name="password" id="inputPassword" placeholder="Digite su contraseña" required />
              </div>

              <div className="form-group">
                <button className="Btn-aceptar" type="submit"></button>
              </div>
            </form>
          </div>
        </div>
      </div>

       


    );
  }
}
export default Loggin;
