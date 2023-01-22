import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'
import React from 'react'

function Story() {
  return (
    <div className="relative bg-gray-900 mt-10">
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
          <h2 className="text-lg font-semibold text-gray-300">Discover our story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-300 sm:text-4xl">We&apos;re here to serve best indian-gujarati food</p>
          <p className="mt-3 text-lg text-gray-300">
            Gujarati all around the world, no matter where they go, crave the taste of home-style food & street food but the <span className=''> Indian cuisine in foreign countries </span> cannot satisfy their desire when it comes to the particular taste of street food. This was also the case with me.
          </p>
          <p className="mt-3 text-lg text-gray-300">
            I craved the street food of Gujarat all the time and being in a foreign country, I was <span className='text-red-500'> unable to find the perfect place </span>  for it. So finally, here I am not just ending my craving but also <span className='text-green-300'>trying to serve people</span>  the same as me who crave that taste and the flavors of Indian street style all the time.
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

export default Story