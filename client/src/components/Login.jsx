import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../global/userSlice/postUsers";
import style from "./Login.module.css";
export default function Login() {
  const dispatch = useDispatch();

  const validate = (inputs, name) => {
    if (name === "userName") {
      if (inputs.userName !== "") setErrors({ ...errors, userName: "" });
      else setErrors({ ...errors, userName: "campo requerido" });
    }
    if (name === "firstName") {
      if (inputs.firstName !== "") setErrors({ ...errors, firstName: "" });
      else setErrors({ ...errors, firstName: "campo requerido" });
    }
    if (name === "lastName") {
      if (inputs.lastName !== "") setErrors({ ...errors, lastName: "" });
      else setErrors({ ...errors, lastName: "campo requerido" });
    }

    if (name === "email") {
      const regexRating =
        /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
      if (inputs.email !== "") setErrors({ ...errors, email: "" });
      else {
        setErrors({ ...errors, email: "Digite un correo" });
        return;
      }
      if (regexRating.test(inputs.email)) setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Digite un correo valido" });
    }
    if (name === "password") {
      if (inputs.password !== "") setErrors({ ...errors, password: "" });
      else setErrors({ ...errors, password: "Campo requerido" });
    }
    if (name === "Birthdate") {
      if (inputs.Birthdate !== "") setErrors({ ...errors, Birthdate: "" });
      else setErrors({ ...errors, Birthdate: "campo requedido" });
    }
    if (name === "nationality") {
      if (inputs.nationality !== "") setErrors({ ...errors, nationality: "" });
      else setErrors({ ...errors, nationality: "campo requerido" });
    }
    if (name === "sex") {
      if (inputs.sex !== "") setErrors({ ...errors, sex: "" });
      else setErrors({ ...errors, sex: "campo requerido" });
    }
    if (name === "typeUser") {
      if (inputs.typeUser !== "") setErrors({ ...errors, typeUser: "" });
      else setErrors({ ...errors, typeUser: "campo requerido" });
    }
  };
  const [inputs, setInputs] = useState({
    userName: "", // falta usuario
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Birthdate: "",
    nationality: "",
    sex: "",
    typeUser: "",
  });
  const [errors, setErrors] = useState({
    userName: "Campo Requerido", // falta usuario
    firstName: "Campo Requerido",
    lastName: "Campo Requerido",
    email: "Campo Requerido",
    password: "Campo Requerido",
    Birthdate: "Campo Requerido",
    nationality: "Campo Requerido",
    sex: "Campo Requerido",
    typeUser: "Campo Requerido",
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
  const handleSubmit = (event) => {
    event.preventDefault(); // Esta funcion no permite que el formulario se  resetee cuando se hace el submit
    dispatch(postUsers(inputs));
    console.log("inputs login", inputs);
    setInputs({
      userName: "", // falta usuario
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Birthdate: "",
      nationality: "",
      sex: "",
      typeUser: "",
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
      <h1 className={style.h1}>Register Users</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <>
          <input
            className={style.input}
            autoFocus
            autoComplete="true"
            type="text"
            name="userName"
            onChange={inputsChange}
            placeholder="userName"
          />
          <span className={style.span}> {errors.userName}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="text"
            name="firstName"
            onChange={inputsChange}
            placeholder="First name"
          />
          <span className={style.span}>{errors.firstName}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="text"
            name="lastName"
            onChange={inputsChange}
            placeholder="Last name"
          />
          <span className={style.span}>{errors.lastName}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="email"
            name="email"
            onChange={inputsChange}
            placeholder="example@example.com"
          />
          <span className={style.span}>{errors.email}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="password"
            name="password"
            onChange={inputsChange}
            placeholder="********"
          />
          <span className={style.span}>{errors.password}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="date"
            name="Birthdate"
            onChange={inputsChange}
          />
          <span className={style.span}>{errors.Birthdate}</span> <br />
          <input
            className={style.input}
            autoComplete="true"
            type="text"
            name="nationality"
            onChange={inputsChange}
            placeholder="Ej: Argentina"
          />
          <span className={style.span}>{errors.nationality}</span> <br />
          <select className={style.select} name="sex" onChange={inputsChange}>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
          </select>
          <br />
          <span className={style.span}>{errors.lastName}</span> <br />
          <select
            className={style.select}
            name="typeUser"
            onChange={inputsChange}
          >
            <option value="">Select type User</option>
            <option value="Client">Client</option>
            <option value="Trainer">Trainer</option>
          </select>
          <span className={style.span}>{errors.typeUser}</span> <br /> <br />
        </>

        <button disabled={disable()} className={style.button}>
          Registrar
        </button>
      </form>
      //{" "}
    </div>
  );
}
