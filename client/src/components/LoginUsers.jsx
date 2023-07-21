import { useAuth } from "../context/authContext";
import style from "../modules/loginUsers.module.css";
import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const LoginUsers = () => {
  
  const auth = useAuth();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  // register with mail
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   auth.register(inputs.email, inputs.password)
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(inputs.email, inputs.password);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };

  return (
    <div className={style.container}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <form className={style.form} onSubmit={handleLogin}>
            <h2 className={style.titleForm}>Iniciar sesión</h2>
            <Grid item xs={12}>
              <TextField
                autoFocus
                autoComplete="true"
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="true"
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                label="Contraseña"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2 }}
              >
                Iniciar sesión
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleGoogle}
                variant="contained"
                color="secondary"
                fullWidth
              >
                Iniciar sesión con Google
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginUsers;
