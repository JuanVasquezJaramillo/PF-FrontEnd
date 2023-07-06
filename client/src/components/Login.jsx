import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Login({ option, fnSubmit }) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: "",
    country: "",
    gender: "",
    typeUser: "",
  });
  function inputsChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    console.log(inputs);
  }
  return (
    <main>
      <form onSubmit={fnSubmit}>
        {
          option === "register"
          ? <>
            <input autoFocus autoComplete="true" type="text" name="firstName" onChange={inputsChange} placeholder="First name" />
            <input autoComplete="true" type="text" name="lastName" onChange={inputsChange} placeholder="Last name" />
            <input autoComplete="true" type="email" name="email" onChange={inputsChange} placeholder="example@example.com" />
            <input autoComplete="true" type="password" name="password" onChange={inputsChange} placeholder="********" />
            <input autoComplete="true" type="date" name="date" onChange={inputsChange} />
            <input autoComplete="true" type="text" name="country" onChange={inputsChange} placeholder="Ej: Argentina" />
            <input autoComplete="true" list="gender" name="gender" onChange={inputsChange} placeholder="Male" />
            <datalist id="gender">
              <option value="Male"></option>
              <option value="Female"></option>
              <option value="unknown"></option>
            </datalist>
            <input autoComplete="true" list="typeUser" name="typeUser" onChange={inputsChange} placeholder="Client" />
            <datalist id="typeUser">
              <option value="Client"></option>
              <option value="Trainer"></option>
            </datalist>
          </>
          : <>
            <input autoFocus autoComplete="true" type="email" name="email" onChange={inputsChange} placeholder="example@example.com" />
            <input autoComplete="true" type="password" name="password" onChange={inputsChange} placeholder="********" />
          </>
        }
        <button>{option === "register" ? "Sig up" : "Sign in"}</button>
      </form>
    </main>
  );
}