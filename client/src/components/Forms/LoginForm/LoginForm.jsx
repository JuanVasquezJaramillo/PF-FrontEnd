import PropTypes from 'prop-types';
import style from '../Forms.module.css'
import { TextField, Button, Grid, Link } from "@mui/material";
import { useAuth } from '../../../context/authContext';
import { useEffect, useState } from 'react';
import {login} from "/src/global/userSlice/login"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function LoginForm({setRegister}){
const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const user = useSelector(state=> state.user.user)


    const auth = useAuth();

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setInputs({ ...inputs, [name]: value });
    };

    const handleChangeForm = (e) =>{
       
        e.preventDefault();
        return setRegister('register')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
       dispatch(login(inputs))
        
       
       
    };

    const handleGoogle = async (e) => {
        e.preventDefault();
        await auth.loginWithGoogle();
    };
 
    // useEffect(()=>{
    //     if ( user.email){
    //         navigate("/")
    //     }
    // },[user])

    if ( user && user.email !==""){
        console.log("EMAILLLL", user.email)
        navigate("/")
    }
    return (
        <>
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
                    <Link paddingTop='14px' color='inherit' underline='hover' onClick={handleChangeForm}>No tenes una cuenta? Registrate.</Link>
                   </form>
                </Grid>
            </Grid>
        </>
    )
}

LoginForm.propTypes = {
    setRegister: PropTypes.func
}