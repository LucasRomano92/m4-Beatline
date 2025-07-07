import React from 'react'
import { products } from '@/helpers/products';

const PageLanding = () => {
  const cart = products.slice(0,3)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">¡Bienvenido a nuestra tienda!</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
      Descubre nuestros productos exclusivos y aprovecha las mejores ofertas. ¡Haz tu compra hoy y lleva tu experiencia al siguiente nivel!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-4xl">
      {cart.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <span className="text-xl font-bold text-primary-400 mb-4">${product.price}</span>
        <button className="bg-primary-300 hover:bg-primary-300 text-white font-semibold py-2 px-6 rounded transition duration-200 shadow-md">
          ¡Lo quiero!
        </button>
        </div>
      ))}
      </div>
      <a 
      href="#"
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-200"
      >
      Comprar ahora
      </a>
    </div>
  )
}

export default PageLanding