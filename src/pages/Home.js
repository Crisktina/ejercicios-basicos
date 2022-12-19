import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import "../styles/App.css";
import Button from "../components/Button";
import FunctionButton from "../components/FunctionButton";
import Input from "../components/Input";

function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello FemCoders!</h1>
      <p>
        Mi primer <code>src/App.js</code>
      </p>
      <Button text="First button component" />
      <Button class="frame" text="Second button component" />
      <Button />
      <FunctionButton text="funcional class default" />
      <FunctionButton class="frameF" text="funcional class personal" />
      <FunctionButton />
      <Input />
      <Link to="/pagina2">Ir a la second page</Link>
    </>
  );
}

export default Home;
