import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './checkoutForm';

const stripePromies = loadStripe("pk_test_51NTH7ACLn1cN0P4mlpE2d0nLpfggjYHoTHdPhYtoREFx9TUojKO3XxkBdGPKoX4FLQHqBJOftTwojFv7PZ0Q5p33005dYK0eQk");


const Market = ()=>{
    return(
        <>
        {/* <div>
            <h2>PRODUCTO</h2>
            <img src="https://tresubresdobles.com/wp-content/uploads/2019/07/skft-5ed6f087f52ef79a86da813cca5d3f00.jpg" alt="NOT FOUND" />
        </div>
         */}
        <Elements stripe={stripePromies}>
            <div className='container p-4'>
                <div className='row'>
                    <div className="col-md-4 offset-md-4">
                        <CheckoutForm/>
                    </div>
                </div>
            </div>
        </Elements>

        </>
    )
} 

export default Market;