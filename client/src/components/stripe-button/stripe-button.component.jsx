import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IX7FcHhkqHIEjl3BDyq38hsKJoUX2TGJD7Wq34JrSNEdTlemwYiKA85OsUF1Hwow3nnvTHX9oX2ogGaBXkFEBkn00iKTcuLD0';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment. Please make sure you use the provided credit card.')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clother Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;