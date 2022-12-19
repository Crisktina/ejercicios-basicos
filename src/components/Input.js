import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <input type="text" placeholder="hola..." onChange={handleChange} />
      <p>{value}</p>
    </>
  );
}

export default Input;
