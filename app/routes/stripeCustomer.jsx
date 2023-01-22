import { json } from "@remix-run/node";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function action({ request }) {
  const formData = await request.formData()
  const bodyDetails = Object.fromEntries(formData);
  const customerCreation = await stripe.customers.create({ email: bodyDetails.email, name: bodyDetails.name, phone: bodyDetails.phone })
  const paymentIntentPostUpdate = await stripe.paymentIntents.update(
    bodyDetails.paymentIntendId,
    { customer: customerCreation.id }
  );
  return json({ paymentIntent: paymentIntentPostUpdate })
}