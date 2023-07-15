import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; //CONFIG STRIPE
import "bootswatch/dist/Lux/bootstrap.min.css" //Importación de tema predeterminado de bootstrap //Comentar esta línea si genera conflicto en los estilos
import Swal from 'sweetalert2' //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's


const CheckoutForm = () => {
    
    //CONFIG Stripe
    const stripe = useStripe();
    const elements = useElements();
    //FIN

    const handleSubmit = async (event) =>{
        event.preventDefault(); //Impide que la página se reinicie automaticamente luego de pulsar el botón del form
        
        //------------Sweetalert2--------
        // Swal.fire({
        //     title: 'COMPRADO!',
        //     text: 'prueba',
        //     icon: 'success',
        //     confirmButtonText: 'vale!'
        //   }) //Alerta que se muestra al completar el form
        //-----------FIN Sweetalert-------------
       
        //------METODO DE STRIPE--------
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
 
        })
        if(!error){
            console.log("Bandera", paymentMethod);
            Swal.fire({
                title: 'COMPRADO!',
                text: 'prueba',
                icon: 'success',
                confirmButtonText: 'vale!'
              })
        }
        if (error) {
            Swal.fire({
                title: 'ERROR AL COMPRAR!',
                text: 'Ha ocurrido un error',
                icon: 'error',
                confirmButtonText: 'vale :C'
              })
        }
        //-------FIN-------- 
    }


    return(
        <div style={{textAlign: 'center', display: "flex", justifyContent: "center"}}>
        <form className="card card-body" onSubmit={event => handleSubmit(event)}>
            <img 
            src="https://th.bing.com/th/id/OIP.mFrpesC1jwUN7EvEobbVZgHaHa?pid=ImgDet&rs=1" 
            alt="teclado gamer" 
            className="img-fluid" />

            <h3 className="text-center">PRECIO: $50</h3>
            
            <div className="form-group">
                <CardElement className="form-control"/>
            </div>
            
            <button className="btn btn-success">COMPRAR</button>
        </form>
        </div>
    )
}

export default CheckoutForm;