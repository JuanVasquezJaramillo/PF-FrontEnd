import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import "bootswatch/dist/Lux/bootstrap.min.css" //Importación de tema predeterminado de bootstrap //Comentar esta línea si genera conflicto en los estilos
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aprobarPago, postCheckoutId, postCompraUser } from "../../global/pagosSlice/pagosSlice";
import { useAuth } from "../../context/authContext"; //Para que se agregue el nombre del comprador
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { deleteProducts } from "../../global/clasesSlice/clasesSlice";


const CheckoutForm = ({ productos }) => {

    const auth = useAuth(); //borrar 
    const { displayName } = auth.user; //borrar
    const pago = useSelector(state => state.pagos.aprobado)
    console.log("APROBADO?", pago);
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


    //---------MÉTODO QUE TRANSFORMA STRING A FORMATO uuID------------
    const stringToUuid = (str) => {
        str = str.replace('-', '');
        return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
          return str[p % str.length];
        });
      }
      var input  = auth.user.uid;
      var output = stringToUuid(input);
      console.log("OUTPUUUUUT",output);
    //------------------FIN------------------

    
    
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
            
            // dispatch(postCompraUser(
            //     {
            //         idUser: auth.user.uid,
            //         idPlan: productos[0].idPlan
            //     }
            // ))
            //94 a 99 fue una prueba
            
            //----Registra la compra en la tabla bougth---
            dispatch(postCompraUser(
                {
                    idUser: "51025abd-d144-4cf1-b7a0-2835e5130b8c",
                    idPlan: productos[0].idPlan,
                    amount: mont
                }
            ))
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

            <form ref={form} className="card card-body" onSubmit={event => handleSubmit(event)}>



                <label htmlFor="">Completa los datos para la factura</label>
                <label>Nombre del comprador</label>
                <input type="text" name="to_name" placeholder={displayName ? `${displayName}...` : ""} />
                <label>Email al que enviar factura</label>
                <input type="email" name="user_email" placeholder={auth?.user.email ? `${auth.user.email}...` : ""} />

                <h3 className="text-center">TOTAL: $ {total}</h3>
                <div className="form-group">
                    <CardElement className="form-control" />
                </div>
                <button className="btn btn-success" >
                    COMPRAR
                </button>

            </form>
        </div>
    )
}

export default CheckoutForm;