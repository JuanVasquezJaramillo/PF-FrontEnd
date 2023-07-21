import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import "bootswatch/dist/Lux/bootstrap.min.css" //Importación de tema predeterminado de bootstrap //Comentar esta línea si genera conflicto en los estilos
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCheckoutId } from "../../global/pagosSlice/pagosSlice";
import { useAuth } from "../../context/AuthContext"; //Para que se agregue el nombre del comprador

const CheckoutForm = ({ productos }) => {
    const auth = useAuth(); //borrar 
    const { displayName } = auth.user; //borrar


    const [compraExitosa, setCompraExitosa] = useState(false);


    //CONFIG Stripe
    const stripe = useStripe();
    const elements = useElements();
    //FIN
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        //------METODO DE STRIPE--------
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)

        })
        //-------FIN-------- 
        console.log("BANDER CHECKOUT", paymentMethod);
        //LOGICA PAGO    

        if (displayName) {
            paymentMethod.customer = displayName;
        }else{
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

        //FIN


    }


    useEffect(() => {
        // Calcula el total cuando cambia el array de productos
        const newTotal = productos.reduce((acc, product) => acc + product[0].price, 0);
        setTotal(newTotal);
    }, [productos]);


    return (
        <div style={{ textAlign: 'center', display: "flex", justifyContent: "center" }}>
            <form className="card card-body" onSubmit={event => handleSubmit(event)}>

                <h3 className="text-center">TOTAL: $ {total}</h3>

                <div className="form-group">
                    <CardElement className="form-control" />
                </div>

                <button className="btn btn-success">COMPRAR</button>
            </form>
        </div>
    )
}

export default CheckoutForm;