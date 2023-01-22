import ItemGrid from '~/components/ItemGrid'

export default function Menu() {
  return (
    <div className='relative'>
      <div className="mx-auto max-w-7xl">
        {/* Head intro section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Delicious menu items</h1>
          <p className="mt-4 max-w-xl text-sm text-gray-700">
            Our menu items is pure veg and prepared in the pure veg facilities only. You can customize the spice levels before ordering.
          </p>
        </div>
        {/* start product sections */}
        <ItemGrid />
      </div>
    </div>
  )
}