import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../global/clasesSlice/clasesSlice';
import Carrousel from './carrousel';
import style from "../modules/trainingDetail.module.css";


const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.clases.list)

    useEffect(() => {
        dispatch(getById(id));
    }, [dispatch, id])


    console.log("DETALLE", detail);
    let probando = detail[1]?.[0]?.url;
    console.log("BANDERAAAA", probando);
    return (
        // <>
        //     <div>
        //         <div>
        //             {
        //                 detail
        //                     ?
        //                     <div>
        //                         <h1>
        //                             {detail[0]?.title}
        //                         </h1>
        //                         <div>
        //                             {/* {detail[1] ? <Carrousel videos={detail[1]} /> : null} */}
        //                             {/* {detail[1]?.[0]?.url ? <Carrousel videos={detail[1]?.[1]?.url} /> : null} */}
        //                             {detail[1]?.[0]?.url ? <Carrousel videos={detail[1]}/> : null}                             
        //                         </div>
        //                     </div>
        //                     :
        //                     <h1>NO SE HA CONSEGUIDO EL DETALLE</h1>
        //             }
        //         </div>
        //     </div>
        // </>

        <div className={style.container}>
            <h1 className={style.titulo}>{detail.titulo}</h1>
            {detail[1]?.[0]?.url? <Carrousel videos={detail[1]} /> : null}

            {detail[0].title ? (
                <div className={style.descripcionTraining}>
                    <div className={style.datos}>
                        <p className={style.parrafos}>Entrenador: {detail[2].userName}</p>
                        <p className={style.parrafos}>{detail[0]?.publicDescription}</p>
                        <p className={style.parrafos}>{detail[0]?.privateDescription}</p>
                        <p className={style.parrafos}>Precio: {detail[0]?.price}</p>
                        <p className={style.parrafos}>Tipo: {detail[0].tags}</p>
                        <p className={style.parrafos}>Etiquetas: {detail[0].tags}</p>
                    </div>
                    <textarea
                        name="comentario"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Escribe un comentario a tu instructor"
                    ></textarea>
                </div>
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>




    )
}

export default Detail