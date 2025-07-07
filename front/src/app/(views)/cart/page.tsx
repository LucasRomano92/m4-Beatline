import Button from '@/components/ui/button'
import { products } from '@/helpers/products'
import React from 'react'

const CartPage = () => {
  const cart = products.slice(0,3)
  return (
    <div className="mx-auto my-12 p-8 border border-gray-300 rounded-2xl bg-black shadow-lg">
        <div className='flex justify-between w-full'>
      <h1>Mi Carrito</h1>
<Button label="Crear Orden" variant="secondary" />
        </div>
      <ul>
        {cart.map(product => (
          <li
            key={product.id}
            className="flex items-center gap-4 mb-4 p-4 border border-primary-200 rounded-lg shadow-sm"
          >
            <img
              src={product.image || '/placeholder.png'}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="font-bold m-0">Price: ${product.price}</p>
            </div>
            <button
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition"
            >
              Borrar
            </button>
          </li>
        ))}
        <li
          className="border-t-2 border-primary-200 pt-4 mt-4 font-bold text-base flex justify-end list-none"
        >
          TOTAL: ${cart.reduce((sum, product) => sum + product.price, 0)}
        </li>
      </ul>
    </div>
  )
}

export default CartPage