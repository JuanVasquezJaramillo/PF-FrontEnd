import style from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../global/userSlice/postUsers";
import { useLocalStorage } from "../hooks/useLocalStorage";
import UploadImages from "./uploadImages";
import {
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  InputLabel,
  Grid,
} from "@mui/material";

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
      const regexEmail =
      /^(([^<>()[].,;:\s@”]+(.[^<>()[].,;:\s@”]+)*)|(”.+”))@(([^<>()[].,;:\s@”]+.)+[^<>()[].,;:\s@”]{2,})$/;
      
      if (inputs.email !== "") setErrors({ ...errors, email: "" });
      else {
        setErrors({ ...errors, email: "Digite un correo" });
        return;
      }
      if (regexEmail.test(inputs.email)) setErrors({ ...errors, email: "" });
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

  const [inputs, setInputs] = useLocalStorage("inputs", {
    userName: "", // falta usuario
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Birthdate: "",
    nationality: "",
    sex: "",
    typeUser: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({
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
      profileImage: null,
    });
    console.log(inputs);
  };

  const handleImageChange = (file) => {
    setInputs({
      ...inputs,
      profileImage: file,
    });
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minHeight="calc(100vh - 81.5px)"
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <form onSubmit={handleSubmit}>
              <Box
                p={4}
                border="1px solid #ccc"
                borderRadius={8}
                boxShadow={2}
                bgcolor="#8ecae671"
              >
                <h1 className={style.h1}>Register Users</h1>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box mb={2}>
                    <TextField
                      autoFocus
                      autoComplete="true"
                      type="text"
                      name="userName"
                      value={inputs.userName}
                      onChange={inputsChange}
                      label="User Name"
                      variant="filled"
                      error={!!errors.userName}
                      helperText={errors.userName}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="First Name"
                      name="firstName"
                      value={inputs.firstName}
                      onChange={inputsChange}
                      type="text"
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="Last Name"
                      name="lastName"
                      value={inputs.lastName}
                      onChange={inputsChange}
                      type="text"
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="Email"
                      type="email"
                      name="email"
                      value={inputs.email}
                      onChange={inputsChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      fullWidth
                      sx={{ fontSize: 50 }}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="Password"
                      type="password"
                      name="password"
                      value={inputs.password}
                      onChange={inputsChange}
                      error={!!errors.password}
                      helperText={errors.password}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="Brithdate"
                      type="date"
                      name="Birthdate"
                      value={inputs.Birthdate}
                      onChange={inputsChange}
                      error={!!errors.Birthdate}
                      helperText={errors.Birthdate}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      autoComplete="true"
                      variant="filled"
                      label="Nationality"
                      type="text"
                      name="nationality"
                      value={inputs.nationality}
                      onChange={inputsChange}
                      error={!!errors.nationality}
                      helperText={errors.nationality}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <FormControl variant="filled" error={!!errors.sex}>
                      <InputLabel>Select Sex</InputLabel>
                      <Select
                        label="Sex"
                        name="sex"
                        value={inputs.sex}
                        onChange={inputsChange}
                      >
                        <MenuItem value="">Select Sex</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="unknown">unknown</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box mb={2}>
                    <FormControl variant="filled" error={!!errors.typeUser}>
                      <InputLabel>Select Type User</InputLabel>
                      <Select
                        label="Type User"
                        name="typeUser"
                        value={inputs.typeUser}
                        onChange={inputsChange}
                      >
                        <MenuItem value="">Select type User</MenuItem>
                        <MenuItem value="Client">Client</MenuItem>
                        <MenuItem value="Trainer">Trainer</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <UploadImages onChange={handleImageChange} />
                </Box>
                <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    fullWidth
                    disabled={disable()}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Registrar
                  </Button>
                </Box>
              </Box>
            </form>{" "}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
