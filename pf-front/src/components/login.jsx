import estilo from '../modules/login.module.css'
const Login = ()=>{
    
    return(
        <div>
            <h1 className={estilo.probando} style={{color: 'orange'}}>Only Trainers</h1>
            <div>
            <form action="">
                <div>
                    <div>
                    <label> Nombre </label>
                    <input type="text" />
                    </div>
                    <div>
                    <label htmlFor=""> Contraseña </label>
                    <input type="password" />
                    </div>
                    <div className=''>
                    <button className=''>INGRESAR</button>
                    <button className=''>REGISTRARSE</button>
                    <button className=''>INVITADO</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;