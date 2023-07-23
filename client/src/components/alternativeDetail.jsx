import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../global/clasesSlice/clasesSlice';
import Carrousel from './carrousel';
import style from "../modules/trainingDetail.module.css";
import { addProduct } from "../global/clasesSlice/clasesSlice";


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
            <h1 className={style.titulo}>{detail.titulo}</h1>
            {detail[1]?.[0]?.url ? <Carrousel videos={detail[1]} /> : null}
            {detail[0].title ? (
                <div className={style.descripcionTraining}>
                    <div className={style.datos}>
                        <p className={style.parrafos}>Entrenador: {detail[2].userName}</p>
                        <p className={style.parrafos}>{detail[0]?.publicDescription}</p>
                        <p className={style.parrafos}>{detail[0]?.privateDescription}</p>
                        <p className={style.parrafos}>Precio: {detail[0]?.price}</p>
                        <p className={style.parrafos}>Tipo: {detail[0].tags}</p>
                        <p className={style.parrafos}>Etiquetas: {detail[0].tags}</p>
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