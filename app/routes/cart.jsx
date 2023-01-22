import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CartDetails from "~/components/CartDetails";
import { addToCart, deleteFromCart } from "~/data/cart.server";
import { getSessionDetails } from "~/data/session.server";



export async function action({ request }) {
  const formData = await request.formData()
  const cartItems = Object.fromEntries(formData);
  const cartSession = await getSessionDetails(request)
  const currentCart = await cartSession.getCart()
  if (request.method === 'POST') {
    const updatedCart = await addToCart(currentCart, cartItems)
    await cartSession.setCart(updatedCart)
    return redirect('/menu', {
      headers: {
        'Set-Cookie': await cartSession.commitSession()
      }
    })
  } else if (request.method === 'DELETE') {
    const updatedCart = await deleteFromCart(currentCart, cartItems)
    await cartSession.setCart(updatedCart)
    return redirect('/cart', {
      headers: {
        'Set-Cookie': await cartSession.commitSession()
      }
    })
  }
}

export async function loader({ request }) {
  let session = await getSessionDetails(request)
  const cart = await session.getCart()
  return cart
}

export default function Cart() {
  const cartData = useLoaderData()
  return (
    <span>
      {cartData.length > 0 && <CartDetails products={cartData} />}
      {!(cartData.length > 0) && <p className="min-h-screen text-center">No items in the cart!</p>}
    </span>
  )
}