import { Link } from '@remix-run/react'

const leftMenu = [
  {
    name: 'Khandvi (Patudi)',
    price: 11.01
  },
  {
    name: 'Idada',
    price: 7.09
  },
  {
    name: 'Dhokla',
    price: 9.09
  },
  {
    name: 'Sambhar Khichu',
    price: 9.09
  },
  {
    name: 'Amiri Khamani',
    price: 11.01
  },
]

const rightMenu = [
  {
    name: 'Lasaniyu Khichu',
    price: 9.09
  },
  {
    name: 'Nylon Khaman',
    price: 7.09
  },
  {
    name: 'Khaman',
    price: 7.09
  },
  {
    name: 'Handvo',
    price: 11.01
  },
  {
    name: 'Customized dish',
    price: 9.99
  },
]


function Menu() {
  return (
    <div className="bg-gray-900 px-4 py-12 sm:py-8">
      {/* Menu section */}
      <section aria-labelledby="menu" className="xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 flex items-center justify-between lg:px-8 xl:px-0">
          <h2 id="products" className="text-2xl font-bold tracking-tight text-yellow-400">
            Our Menu
          </h2>
          <Link to="/menu" className="text-sm font-semibold text-yellow-400 hover:text-yellow-800">
            Browse all menu items
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        {/* <div className='h-96 mt-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-lg italic'> */}
        <div className='mt-4 flex flex-col xl:flex-row gap-8 text-white text-lg italic py-8'>
          <div className='space-y-8'>
            {leftMenu.map((menu, index) => (
              <div key={menu.name} className="flex content-center items-center space-x-4">
                <p className='text-yellow-600'>{index + 1}.</p>
                <p className='tracking-widest'>{menu.name}</p>
                <div className='h-2 flex-1 opacity-25 overflow-hidden '>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-full' >
                    <line x1="0" y1="5" x2="5000" y2="5" stroke="white"
                      strokeDasharray="4" />
                  </svg>
                </div>
                <p className='text-yellow-600'>${menu.price}</p>
              </div>
            ))}
          </div>
          <div className='hidden xl:block w-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-full'>
              <line x1="2" y1="0" x2="0" y2="5000" stroke="red" strokeDasharray="4" />
            </svg>
          </div>
          <div className='space-y-8'>
            {rightMenu.map((menu, index) => (
              <div key={menu.name} className="flex content-center items-center space-x-4">
                <p className='text-yellow-600'>{index + 6}.</p>
                <p className='tracking-widest'>{menu.name}</p>
                <div className='h-2 flex-1 opacity-25 overflow-hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-full'>
                    <line x1="0" y1="5" x2="1000" y2="5" stroke="white"
                      strokeDasharray="4" />
                  </svg>

                </div>
                <p className='text-yellow-600'>${menu.price}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default Menu