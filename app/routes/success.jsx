import { Link, useFetcher, useSubmit } from '@remix-run/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { destroySessionSuccess, getSessionDetails } from "~/data/session.server";
import { json, redirect } from '@remix-run/node';
import { useEffect } from 'react';


// export async function loader({ request }) {
//   const submit = useSubmit()
//   return null
// }

export function action({ request }) {
  if (request.method !== 'POST') {
    throw json({ message: 'Invalid request method' }, { status: 400 });
  }
  return destroySessionSuccess(request);
}


function Success() {
  const fetcher = useFetcher()
  useEffect(() => {
    fetcher.submit(null, { method: 'post', action: '/success' })
  }, [])

  return (
    <div className="relative bg-gray-900">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="./items/item_3.jpeg"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 mix-blend-multiply"
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">The Awesome Restaurant</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-300 sm:text-4xl">Thank you for your order.</p>
          <p className="mt-3 text-lg text-gray-300">
            Your order will be ready in next 30 mins for the pick up.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Checkout our menu
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success