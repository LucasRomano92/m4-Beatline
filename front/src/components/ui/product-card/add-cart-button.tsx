import React from 'react'
import Button from '../button'
import Link from 'next/link'
import { routes } from '@/routes'

const AddCartButton = () => {
    const isAuthenticated = false;
    if (!isAuthenticated) {
        return (
            <div>
                <p>Por favor <Link href={routes.login} className='underline text-primary-500 hover:font-serif'>inicia sesión</Link> para agregar productos al carrito.</p>
            </div>
        )
    }
    return (
        <Button label="Agregar al carrito" className='w-full' />
    )
}

export default AddCartButton