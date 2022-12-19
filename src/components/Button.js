import React, { Component } from "react";
import "../styles/Button.css";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cualquierCosa: 0,
    };
  }
  counter = () => {
    this.setState({
      cualquierCosa: this.state.cualquierCosa + 1,
    });
  };

  render() {
    return (
      <button className={`btn ${this.props.class}`} onClick={this.counter}>
        {this.props.text} - {this.state.cualquierCosa} -{" "}
        {this.state.cualquierCosa === 5 ? "Llegaste a 5" : ""}
      </button>
      //this. se refiere al propio objeto en si
      // props son propiedades
      // text es donde definimos el texto a traves de una "id" que se llama text.
    );
  }
}

export default Button;

Button.defaultProps = {
  text: "Mi botón",
  class: "solid",
};
