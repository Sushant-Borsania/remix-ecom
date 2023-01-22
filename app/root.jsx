import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useTransition,
} from "@remix-run/react";

import styles from './styles/app.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getSessionDetails } from "./data/session.server";

export const meta = () => ({
  charset: "utf-8",
  title: "The Awesome Restaurants",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }]
}

export default function App() {
  const { products } = useLoaderData()
  const matches = useMatches()
  const currentPath = matches[matches.length - 1].pathname
  const totalQuantity = products.reduce((acc, cartItem) => acc + Number(cartItem.quantity), 0)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar itemNum={totalQuantity} />
        <Outlet />
        {currentPath === '/' ? <ScrollRestoration /> : null}
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export async function loader({ request }) {
  let session = await getSessionDetails(request)
  const products = await session.getCart()
  return { products }
}