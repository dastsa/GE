import React, { Component } from "react";

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
      <div class="container h-80">
        <div class="row align-items-center h-100">
          <div class="col-3 mx-auto">
            <div class="text-center">
              <p id="profile-name" class="profile-name-card"></p>
              <form class="form-signin">
              <input type="user" name="user" id="inputUser" class="form-control form-group" placeholder="user" required autofocus />
                <input type="password" name="password" id="inputPassword" class="form-control form-group" placeholder="password" required />
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">enter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Loggin;
