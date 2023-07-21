import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './checkoutForm';

const stripePromies = loadStripe("pk_test_51NTH7ACLn1cN0P4mlpE2d0nLpfggjYHoTHdPhYtoREFx9TUojKO3XxkBdGPKoX4FLQHqBJOftTwojFv7PZ0Q5p33005dYK0eQk");


const Market = ({productos})=>{
    return(
        <>
        <Elements stripe={stripePromies}>
            <div className='container p-4'>
                <div className='row'>
                    <div className="col-md-4 offset-md-4">
                        <CheckoutForm productos={productos}/>
                    </div>
                </div>
            </div>
        </Elements>

        </>
    )
} 

export default Market;