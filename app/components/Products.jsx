import { Link } from "@remix-run/react"

const categories = [
  {
    name: 'Handavo',
    href: '#',
    imageSrc: './items/item_1.jpeg',
  },
  {
    name: 'Dhokala',
    href: '#',
    imageSrc: './items/item_2.jpeg',
  },
  {
    name: 'Sev khamani',
    href: '#',
    imageSrc: './items/item_3.jpeg',
  },
  {
    name: 'White Dhokala',
    href: '#',
    imageSrc: './items/item_4.jpeg',
  },
  { name: 'Idada', href: '#', imageSrc: './items/item_5.jpeg' },
]


export default function Products() {

  return (
    <div className="bg-white">
      <main>
        {/* Category section */}
        <section aria-labelledby="products" className="pt-12 sm:pt-8 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="products" className="text-2xl font-bold tracking-tight text-amber-800">
              Our delicacies
            </h2>
            <Link to="/menu" className="hidden text-sm font-semibold text-yellow-600 hover:text-yellow-800 sm:block">
              Browse all menu items
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-amber-800 opacity-70"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <Link href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
