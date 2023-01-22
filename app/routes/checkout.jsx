
import { Outlet, useLoaderData } from "@remix-run/react"
import Navbar from "~/components/Navbar"
import { getSessionDetails } from "~/data/session.server"


// STRIPE
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentIntent } from "~/data/payment.server";

const stripePromise = loadStripe('pk_test_nspvzT7QEdC30FB8iiUADnX1003E1fdI62')

function calculatePrice(products) {
  let totalPrice = 0
  products.forEach((product) => { totalPrice += (Number(product.price) * Number(product.quantity)) })
  return totalPrice
}


export default function Checkout() {
  const { products, paymentIntent } = useLoaderData()
  const options = {
    clientSecret: paymentIntent.client_secret,
  };
  const totalPrice = calculatePrice(products)

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
        <div className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-900 lg:block" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
          <h1 className="sr-only">Checkout</h1>
          <section
            aria-labelledby="summary-heading"
            className="bg-amber-900 py-12 text-amber-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
          >
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <dl>
                <dt className="text-sm font-medium">Amount due</dt>
                <dd className="mt-1 text-3xl font-bold tracking-tight text-white">${totalPrice}</dd>
              </dl>

              <ul className="divide-y divide-white divide-opacity-10 text-sm font-medium">
                {products.map((product) => (
                  <li key={product.name} className="flex items-start space-x-4 py-6">
                    <img
                      src={product.imagePath}
                      alt={product.imageAlt}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white">{product.name} X {product.quantity}</h3>
                      {/* <p>{product.quantity}</p> */}
                    </div>
                    <p className="flex-none text-base font-medium text-white">{(Number(product.price) * Number(product.quantity))}</p>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd>${totalPrice}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Taxes</dt>
                  <dd>$0.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">${totalPrice}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
          >
            <Outlet />
          </section>
        </div>
      </div>
    </Elements>
  )
}

export async function loader({ request }) {
  let session = await getSessionDetails(request)
  const products = await session.getCart()
  const paymentIntent = await createPaymentIntent(products);
  return { products, paymentIntent }
}
