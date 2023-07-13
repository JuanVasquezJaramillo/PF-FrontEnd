import React from "react";
import style from "../modules/loginUsers.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../global/userSlice/postUsers";

const LoginUsers = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function inputsChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    validate(
      {
        ...inputs,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  }
  const [errors, setErrors] = useState({
    email: "Campo Requerido",
    password: "Campo Requerido",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Esta funcion no permite que el formulario se  resetee cuando se hace el submit
    dispatch(postUsers(inputs));
    console.log("inputs login", inputs);
    setInputs({
      email: "",
      password: "",
    });
    console.log(inputs);
  };

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          autoFocus
          autoComplete="true"
          type="email"
          name="email"
          onChange={inputsChange}
          placeholder="example@example.com"
          className={style.input}
        />
        <input
          autoComplete="true"
          type="password"
          name="password"
          onChange={inputsChange}
          placeholder="********"
          className={style.input}
        />
        <button className={style.button}>sign in</button>
      </form>
    </div>
  );
};

export default LoginUsers;
