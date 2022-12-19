import React from "react";
import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <>
      <div>Esta es mi SecondPage</div>
      <Link to="/">Ir a home page</Link>
    </>
  );
}

export default SecondPage;
