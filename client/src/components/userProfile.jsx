import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../global/userSlice/updateUser";
import style from "./UserProfile.module.css";

import { useParams } from "react-router-dom";
import { getUserId } from "../global/userSlice/getUsersId";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Proteccion } from "./Proteccion";
import { deleteUser } from "../global/userSlice/deleteUser";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

const UserProfile = () => {
   Proteccion()
  const navigate = useNavigate()
 
  const user = useSelector(state=> state.user.user)
  
 

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
        /^(([^<>()[].,;:\s@”]+(.[^<>()[].,;:\s@”]+)*)|(”.+”))@(([^<>()[].,;:\s@”]+.)+[^<>()[].,;:\s@”]{2,})$/;
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
    idUser: user.idUser,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  //  Birthdate: user.Birthdate,
    nationality: user.nationality,
    sex: user.sex,
    typeUser: user.typeUser

  });
  

  const [errors, setErrors] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    sex: "",
    typeUser: "",
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

  const handleSubmitDelete = (event) => {
    event.preventDefault(); // Esta funcion no permite que el formulario se  resetee cuando se hace el submit
       dispatch(deleteUser(inputs.idUser));
   
   
    setErrors({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Birthdate: "",
      nationality: "",
      sex: "",
      typeUser: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Esta funcion no permite que el formulario se  resetee cuando se hace el submit
     dispatch(updateUser(inputs));
     console.log("inputs login", inputs);
   
    setErrors({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Birthdate: "",
      nationality: "",
      sex: "",
      typeUser: "",
    });
  };

  const disableButton = () => {
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
      <form className={style.form} onSubmit={handleSubmitDelete}>
        <h1 className={style.h1}>Details Users</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              autoComplete="true"
              type="text"
              name="userName"
              value={inputs.userName}
              onChange={inputsChange}
              placeholder="User Name"
              label="User Name"
              error={Boolean(errors.userName)}
              helperText={errors.userName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              autoComplete="true"
              type="text"
              value={inputs.firstName}
              name="firstName"
              onChange={inputsChange}
              placeholder="First Name"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              autoComplete="true"
              type="text"
              name="lastName"
              value={inputs.lastName}
              onChange={inputsChange}
              placeholder="Last Name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="true"
              type="email"
              name="email"
              value={inputs.email}
              onChange={inputsChange}
              placeholder="example@example.com"
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="true"
              type="password"
              name="password"
              value={inputs.password}
              onChange={inputsChange}
              placeholder="********"
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                autoComplete="true"
                type="date"
                name="Birthdate"
                value={inputs.Birthdate}
                onChange={inputsChange}
                error={Boolean(errors.Birthdate)}
                helperText={errors.Birthdate}
              />
            </FormControl>
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete="true"
              type="text"
              name="nationality"
              onChange={inputsChange}
              placeholder="Ej: Argentina"
              label="Nationality"
              value={inputs.nationality}
              error={Boolean(errors.nationality)}
              helperText={errors.nationality}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select Sex</InputLabel>
              <Select
                className={style.select}
                name="sex"
                value={inputs.sex}
                onChange={inputsChange}
                error={Boolean(errors.sex)}
              >
                <MenuItem value="">Select Sex</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="unknown">unknown</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select Type User</InputLabel>
              <Select
                className={style.select}
                name="typeUser"
                value={inputs.typeUser}
                onChange={inputsChange}
                error={Boolean(errors.typeUser)}
              >
                <MenuItem value="">Select type User</MenuItem>
                <MenuItem value="Client">Client</MenuItem>
                <MenuItem value="Trainer">Trainer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          // disabled={disableButton()}
          
          className={style.button}
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          type="submit"
        >
          Actualizar
        </Button>
        <Button
          // disabled={disableButton()}
          
          className={style.button}
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          type="submit"
          
        >
          Eliminar 
        </Button>
      </form>{" "}
    </div>
  );
};

export default UserProfile;
