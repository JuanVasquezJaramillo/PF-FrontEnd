import estilo from './viewProfile.module.css'
import cake from '../../assets/pastelito.png'
import mancuerna from '../../assets/mancuerna.png'
import contrato from '../../assets/contrato.png'
import entreno from '../../assets/entrenando.png'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
 import { getUserId } from '../../global/userSlice/getUsersId'

const UserProfile = () => {
    const userId = useSelector((state) => state.userId.listId);


    const dispatch = useDispatch();
const {idUser} = useParams()



useEffect(() => {
  dispatch(getUserId(idUser));
}, [dispatch, idUser])

  



    return (
        <div>
            <div className={estilo.contenedor}>

                <h1>{ userId.firstName } { userId.lastName }</h1>
            </div>

            <div className={estilo.contenedorDif}>
                    <div className={estilo.subContenedorDef}>
                        <h4>
                        { userId.email }
                       </h4>
                       <label htmlFor="">Email</label>
                    </div>
                </div>

            <div className={estilo.contenedorInfo} id='PADRE'>

                <div className={estilo.contenedorDif}>
                    <div className={estilo.subContenedorDif}>
                        <h4>

                            <img src={cake} alt="" />
                            { userId.Birthdate }
                        </h4>
                        <label htmlFor="">Fecha de nacimiento</label>
                    </div>
                </div>



              




                <div className={estilo.contenedorDif}>
                    <div className={estilo.subContenedorDuf}>
                        <h4>
                            <img src={contrato} alt="" />
                            { userId.nationality }
                        

                        </h4>
                        <label htmlFor="">Ocupación</label>
                    </div>
                </div>





                <div className={estilo.contenedorDif}>
                    <div className={estilo.subContenedorDof}>
                        <h4>
                            <img src={entreno} alt="" />
                            userName <br />
                            { userId.userName }

                        </h4>
                        
                    </div>
                </div>
                <div className={estilo.contenedorDif}>
                    <div className={estilo.subContenedorDof}>
                        <h4>
                            <img src={entreno} alt="" />
                            Tipo de usuario <br />
                            { userId.typeUser }

                        </h4>
                        
                    </div>
                </div>

              




                <div className={estilo.contenedorBotones}>
                    <button className={estilo.botones}>Rutinas</button>
                    <button className={estilo.botones}>Chat</button>
                </div>
                <div className={estilo.contenedorTest}>
                    <button className={estilo.test}>CHAT</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;