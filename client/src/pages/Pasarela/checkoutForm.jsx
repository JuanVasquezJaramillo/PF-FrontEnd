import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aprobarPago, postCheckoutId, postCompraUser } from "../../global/pagosSlice/pagosSlice";
import { useAuth } from "../../context/authContext"; //Para que se agregue el nombre del comprador
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { deleteProducts } from "../../global/clasesSlice/clasesSlice";
import estilo from './prueba.module.css'

const CheckoutForm = ({ productos }) => {

    const auth = useAuth(); //borrar 
    const { displayName } = auth.user; //borrar
    const pago = useSelector(state => state.pagos.aprobado)
    const user = useSelector(state => state.user.user.idUser)
    console.log("APROBADO?", pago);
    console.log("CANASTA", productos);
    //--mail--
    const form = useRef();
    //--fin--

    const [loading, setloading] = useState(false);


    //CONFIG Stripe
    const stripe = useStripe();
    const elements = useElements();
    //FIN
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch();

    //-----------------------Método handle--------------------------

    const handleSubmit = async (event) => {
        event.preventDefault();

        //------METODO DE STRIPE--------
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)

        })
        //-------FIN-------- 
        console.log("BANDER CHECKOUT", paymentMethod);

        //-------------LOGICA PAGO--------------   

        if (!error) {

            if (displayName) {
                paymentMethod.customer = displayName;
            } else {
                paymentMethod.customer = "NotFound"
            }


            const { id } = paymentMethod
            //paymentMethod.customer = "ADOLFO HOLA"
            let mont = total / 4000
            let objPay = {
                id,
                amount: mont * 100,
            }

            dispatch(postCheckoutId(objPay))

            //------------FIN------------------


            //--------------Lógica de mail------------ 
            emailjs.sendForm('service_6sqygb3', 'template_56xanjh', form.current, '1PabAE487WZsuh6hh')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            //----------fin-----------

            productos.forEach(producto => {
                dispatch(postCompraUser({
                    idUser: user,
                    idPlan: producto.idPlan,
                    amount: mont
                }));
            });
            //---------FIN---------


            dispatch(aprobarPago()); //Setea la aprobación en true
            console.log("APROBADO PASANDO A: ", pago);
            dispatch(deleteProducts())
        } else {
            Swal.fire({
                title: 'Error',
                text: "Ups! algo salió mal",
                icon: "error"
            })
            emailjs.sendForm('service_6sqygb3', 'template_56xanjh', { to_name: displayName ? displayName : "", user_email: auth?.user.email ? auth?.user.email : "", message: "Algo salió mal con tu compra :c" }, '1PabAE487WZsuh6hh')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }


    }
    //Fin método handle

    useEffect(() => {
        // Calcula el total cuando cambia el array de productos
        const newTotal = productos.reduce((acc, product) => acc + product.price, 0);
        setTotal(newTotal);
    }, [productos]);


    return (
        <div style={{ textAlign: 'center', display: "flex", justifyContent: "center" }}>
            <div>
                <form style={{ display: "flex", flexDirection: "column"}} ref={form} className="card card-body" onSubmit={event => handleSubmit(event)}>
                    <h2 htmlFor="">Completa los datos para la factura</h2>
                    <label>Nombre del comprador</label>
                    <input type="text" name="to_name" placeholder={displayName ? `${displayName}...` : ""} />
                    <label>Email al que enviar factura</label>
                    <input style={{height: "25px"}} type="email" name="user_email" placeholder={auth?.user.email ? `${auth.user.email}...` : ""} />

                    <h3 className="text-center">TOTAL: $ {total}</h3>
                    <div style={{borderStyle: "solid", borderColor: "black", backgroundColor: "gold"}}>
                        <CardElement className="form-control" />
                    </div>
                    <button className={estilo.btn} >
                        CONFIRMAR COMPRA
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckoutForm;
