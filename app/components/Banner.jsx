import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'

export default function Banner({ content }) {
  return (
    <div className="w-full">
      <div className="bg-yellow-600 p-2 shadow-lg sm:p-3 px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
          <div className="flex w-0 flex-1 items-center justify-center">
            <span className="flex rounded-lg bg-amber-800 p-2">
              <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span>{content}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
