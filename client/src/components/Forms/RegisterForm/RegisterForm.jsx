import PropTypes from 'prop-types';
import style from '../Forms.module.css'
import { TextField, Button, Grid, Link } from "@mui/material";
import { useAuth } from '../../../context/authContext';
import { useState } from 'react';


export default function RegisterForm({setRegister}){

    const auth = useAuth();
    console.log(auth)
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setInputs({ ...inputs, [name]: value });
    };

    const handleChangeForm = (e) =>{
        e.preventDefault();
        return setRegister('login')
    }

    const handleRegister = (e) => {
        e.preventDefault();
        auth.register(inputs.email, inputs.password);
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                <form className={style.form} onSubmit={handleRegister}>
                    <h2 className={style.titleForm}>Registrate</h2>
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
                        Registrate
                    </Button>
                    </Grid>
                    <Link paddingTop='14px' color='inherit' underline='hover' onClick={handleChangeForm}>Ya tenes una cuenta? Inicia Sesion.</Link>
                   </form>
                </Grid>
            </Grid>
        </>
    )
}

RegisterForm.propTypes = {
    setRegister: PropTypes.func
}