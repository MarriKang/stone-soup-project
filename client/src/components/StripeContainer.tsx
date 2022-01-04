import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from './Checkout'

const StripeContainer = () => {

    const PUBLIC_KEY = "pk_test_51KEG79BCvziizRqQkMvOSZOaGjxxPORYGOgOTkomOYO0PDH0Smdmevri4NFK0b29Mjlz6VfKDCE2ONrtHoE2QspJ005DREP0eI"
    const stripeTestPromise = loadStripe(PUBLIC_KEY);

    return (
        <Elements stripe={stripeTestPromise}>
            <Checkout/>
        </Elements>
    );
}

export default StripeContainer;