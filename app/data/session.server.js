import { createCookieSessionStorage, redirect } from "@remix-run/node";

let cartSessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'sessioncart',
    httpOnly: true,
    path: '/',
    sameSite: "lax",
    secret: ['supersecretrestaurant'],
    secure: process.env.NODE_ENV === 'production'
  }
})

export async function getSessionDetails(input) {
  let cookieHeader = !input || typeof input === "string" ? input : input.headers.get("Cookie");
  let cartSession = await cartSessionStorage.getSession(cookieHeader)

  return {
    async getCart() {
      let cart = JSON.parse(cartSession.get("cart") || "[]")
      return cart
    },
    async setCart(cartItems) {
      cartSession.set("cart", JSON.stringify(cartItems))
    },
    commitSession() {
      return cartSessionStorage.commitSession(cartSession)
    },
  }
}

export async function destroySessionSuccess(request) {
  let cookieHeader = request.headers.get("Cookie");
  let cartSession = await cartSessionStorage.getSession(cookieHeader)
  return redirect("/success", {
    headers: {
      "Set-Cookie": await cartSessionStorage.destroySession(cartSession),
    },
  });
}