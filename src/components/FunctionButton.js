import React, { useState } from "react";
import "../styles/FunctionalButton.css";

function FunctionButton(props) {
  const [cualquierCosa, setNumber] = useState(0);

  const counter = () => {
    setNumber(cualquierCosa + 1);
  };

  return (
    <>
      <button className={`btn ${props.class}`} onClick={counter}>
        {props.text} - {cualquierCosa} -{" "}
        {cualquierCosa === 5 ? "Llegaste a 5" : ""}
      </button>
    </>
  );
}

export default FunctionButton;

FunctionButton.defaultProps = {
  text: "Boton funcional por default",
  class: "solidF",
};
