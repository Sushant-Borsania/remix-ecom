import { Form, useMatches } from '@remix-run/react';
import { PaymentElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const matches = useMatches();
  // TODO: Find better way to get the payment intent
  const paymentIntentId = matches[1].data.paymentIntent.id

  const handleChange = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const addressElement = await elements.getElement("address")
    const addressVal = await addressElement.getValue()


    //Check for customer and update the customer to payment intent
    // Confirm payment


    if (addressVal.complete) {
      //Customer update or creation with the email ID
      const personalDetails = addressVal.value
      const formData = new FormData()
      formData.append('email', event.target.elements['email-address'].value)
      formData.append('paymentIntendId', paymentIntentId)
      formData.append('name', personalDetails.name)
      formData.append('phone', personalDetails.phone)
      await fetch('/stripeCustomer', { method: 'post', body: formData })
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:3000/success',
        }
      })
    }
  }

  return (
    <Form onSubmit={handleChange}>
      <h2 id="payment-and-shipping-heading" className="sr-only">
        Payment and shipping details
      </h2>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div>
          <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
            Contact information
          </h3>

          <div className="mt-6">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email-address"
                name="email-address"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <AddressElement options={{
              mode: 'billing',
              fields: {
                phone: 'always',
              },
              validation: {
                phone: {
                  required: 'always',
                },
              },
            }} />
          </div>
        </div>


        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Payment details</h3>
          <div className="mt-6">
            <PaymentElement />
          </div>
        </div>

        <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Pay now
          </button>
        </div>
      </div>
    </Form>
  )
}

export default CheckoutForm