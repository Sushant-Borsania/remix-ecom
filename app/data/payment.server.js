
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function calculatePrice(products) {
  let totalPrice = 0
  products.forEach((product) => { totalPrice += (Number(product.price) * Number(product.quantity)) })
  return (totalPrice * 100).toFixed(0)
}

function createDescription(products) {
  let productNames = "";
  for (let i = 0; i < products.length; i++) {
    if (i === products.length - 1) {
      productNames += "and " + products[i].name;
    } else if (i === products.length - 2) {
      productNames += products[i].name + " ";
    } else {
      productNames += products[i].name + ", ";
    }
  }
  return productNames;
}

export async function createPaymentIntent(products) {
  const totalPrice = calculatePrice(products)
  return await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: 'cad',
    automatic_payment_methods: {
      enabled: true,
    },
    description: createDescription(products)
  })
}

export async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id);
}

export async function updatePaymentIntent(paymentIntentId, data) {
  const stripeRes = await stripe.paymentIntents.update(paymentIntentId, data)
  return stripeRes
}