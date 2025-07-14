'use client' // esto convierte el archivo  en un componenente de react puro// 
import { IProduct } from '@/types'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { routes } from '@/routes'
import AddCartButton from './add-cart-button'

const ProductCard:FC<Partial<IProduct>> = ({id, stock, name, description, price, image }) => {
  const router = useRouter()
  const handleClick = () => {
  router.push(`${routes.productDetail}/${id}/${name}`) // Redirige a la página de detalles del producto
  
};
  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
 onClick={handleClick}>
    <a href="#">
        <img className="p-8 rounded-t-lg"
         src={image || 'https://via.placeholder.com/150'}
          alt={name || "Product image"} />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name || "Product Name"}</h5>
        </a>
       <p className='text-sm text-gray-500 n2 dark:text-gray-400'>{description || "Product Description"}</p>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price ||"00.00"}</span>
            <AddCartButton/>
        </div>
    </div>
</div>

  )
}

export default ProductCard;