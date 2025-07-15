'use client'
import Button from '@/components/ui/button'
import { useCartContext } from '@/context/cartContext';
import React from 'react'
import ProductCardCart from './components/product-card-cart';
import Loader from '@/components/ui/loader/loader';

const CartPage = () => {
  const {cart, priceTotal} = useCartContext();

  // const total = cart.reduce((sum, product) => sum + product.price, 0);
const total = priceTotal;

if (cart === null){
  return <Loader />
}



  return (
    <div className="p-8 mx-auto my-12 bg-black border border-gray-300 shadow-lg rounded-2xl">
        <div className='flex justify-between w-full'>
      <h1>Mi Carrito</h1>
<Button label="Crear Orden" variant="secondary" />
        </div>
      <ul>
        {cart?.map((product) => (
          <ProductCardCart 
            key={product.id}
           {...product || null}
          />
        ))}
      </ul>
      <h2>Total: ${priceTotal()}</h2>
    </div>
  )
}

export default CartPage