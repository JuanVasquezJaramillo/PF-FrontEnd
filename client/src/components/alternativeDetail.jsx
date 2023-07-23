import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../global/clasesSlice/clasesSlice';
import { addProduct } from "../global/clasesSlice/clasesSlice";
import Carrousel from './carrousel';
import style from "../modules/trainingDetail.module.css";


const Detail = () => {

    const { id } = useParams();
    
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.clases.list)

    useEffect(() => {
        dispatch(getById(id));
    }, [dispatch, id])

    const handleAdd = (plan) => {
        dispatch(addProduct(plan))
    }

    return (
        <div className={style.container}>
            <h1 className={style.titulo}>{detail.title}</h1>
            {detail.videos?.[0]?.url? <Carrousel videos={detail.videos} /> : null}

            {detail.title ? (
                <div className={style.descripcionTraining}>
                    <div className={style.datos}>
                        <p className={style.parrafos}>Entrenador: {detail.userName}</p>
                        <p className={style.parrafos}>{detail.publicDescription}</p>
                        <p className={style.parrafos}>{detail.privateDescription}</p>
                        <p className={style.parrafos}>Precio: {detail.price}</p>
                        <p className={style.parrafos}>Tipo: {detail.tags}</p>
                        <p className={style.parrafos}>Etiquetas: {detail.tags}</p>
                        <button onClick={() => handleAdd(detail)}>Añadir plan a carrito</button>
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