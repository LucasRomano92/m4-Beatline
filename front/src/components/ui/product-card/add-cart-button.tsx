import React from 'react';
import Button from '../button';
import Link from 'next/link';
import { routes } from '@/routes';

const AddCartButton = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="w-full p-4 mt-auto border rounded-md bg-primary-100 border-primary-200">
        <p className="text-sm text-center text-primary-700">
          Por favor&nbsp;
          <Link
            href={routes.login}
            className="font-semibold underline text-primary-600 hover:text-primary-800"
          >
            inicia sesión
          </Link>
          &nbsp;para agregar productos al carrito.
        </p>
      </div>
    );
  }

  return <Button label="Agregar al carrito" className="w-full mt-auto" />;
};

export default AddCartButton;
