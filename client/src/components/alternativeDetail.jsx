import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../global/clasesSlice/clasesSlice';
import Carrousel from './carrousel';

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.clases.list)

    useEffect(() => {
        dispatch(getById(id));
    }, [dispatch, id])


    console.log("DETALLE", detail);
    let probando =  detail[1]?.[0]?.url;
    console.log("BANDERAAAA", probando);
    return (
        <>
            <div>
                <div>
                    {
                        detail
                            ?
                            <div>
                                <h1>
                                    {detail[0]?.title}
                                </h1>
                                <div>
                                    {/* {detail[1] ? <Carrousel videos={detail[1]} /> : null} */}
                                    {/* {detail[1]?.[0]?.url ? <Carrousel videos={detail[1]?.[1]?.url} /> : null} */}
                                    {detail[1]?.[0]?.url ? <Carrousel videos={detail[1]}/> : null}                             
                                </div>
                            </div>
                            :
                            <h1>NO SE HA CONSEGUIDO EL DETALLE</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Detail