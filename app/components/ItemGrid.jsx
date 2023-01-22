import { useFetcher } from "@remix-run/react"

const products = [
  {
    id: 1,
    name: 'Khandavi (Patudi)',
    href: '#',
    price: 11.01,
    imageSrc: './items/item_1.jpeg',
    imageAlt: 'Khandavi - Item from Surat, Gujarat, India',
  },
  {
    id: 2,
    name: 'Idada',
    href: '#',
    price: 7.09,
    imageSrc: './items/item_2.jpeg',
    imageAlt: 'Idada - Item from Surat, Gujarat, India',
  },
  {
    id: 3,
    name: 'Dhokla',
    href: '#',
    price: 9.09,
    imageSrc: './items/item_3.jpeg',
    imageAlt: 'Dhokla - Item from Surat, Gujarat, India',
  },
  {
    id: 4,
    name: 'Sambhar Khichu',
    href: '#',
    price: 9.09,
    imageSrc: './items/item_4.jpeg',
    imageAlt: 'Sambhar Khichu - Item from Surat, Gujarat, India',
  },
  {
    id: 5,
    name: 'Amiri Khamani',
    href: '#',
    price: 11.01,
    imageSrc: './items/item_5.jpeg',
    imageAlt: 'Amiri Khamani - Item from Surat, Gujarat, India',
  },
  {
    id: 6,
    name: 'Lasaniyu Khichu',
    href: '#',
    price: 9.09,
    imageSrc: './items/item_6.jpeg',
    imageAlt: 'Lasaniyu Khichu - Item from Surat, Gujarat, India',
  },
  {
    id: 7,
    name: 'Naylon Khaman',
    href: '#',
    price: 7.09,
    imageSrc: './items/item_7.jpeg',
    imageAlt: 'Naylon Khaman - Item from Surat, Gujarat, India',
  },
  {
    id: 8,
    name: 'Khaman',
    href: '#',
    price: 7.09,
    imageSrc: './items/item_1.jpeg',
    imageAlt: 'Khaman - Item from Surat, Gujarat, India',
  },
  {
    id: 9,
    name: 'Handavo',
    href: '#',
    price: 11.01,
    imageSrc: './items/item_2.jpeg',
    imageAlt: 'Handavo - Item from Surat, Gujarat, India',
  },
  {
    id: 10,
    name: 'Customized Dish',
    href: '#',
    price: 9.09,
    imageSrc: './items/item_3.jpeg',
    imageAlt: 'Custom dish - Item from Surat, Gujarat, India',
  },
]

export default function ItemGrid() {
  const fetcher = useFetcher()
  const addToCart = async (cartDetails) => {
    fetcher.submit(cartDetails, { method: 'post', action: '/cart' })
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-90"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <div className="mt-6">
                <button onClick={() => addToCart({ name: product.name, price: product.price, imagePath: product.imageSrc, quantity: 1 })} className="w-full relative flex items-center justify-center rounded-md border border-transparent bg-amber-300 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-amber-400"
                >
                  Add to Cart<span className="sr-only">, {product.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
