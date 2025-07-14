
import React from 'react'

import { routes } from '@/routes';
import { redirect } from 'next/dist/client/components/navigation';

import { getProductById } from '@/services/products';
import AddCartButton from '@/components/ui/product-card/add-cart-button';

export default async function Page({
    params,
   
}: {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { slug } = params;
    const [id] = slug [0];

    console.log('slug', slug);

    // const product = products.find((p) => p.id === Number(id));
    const product = await getProductById(Number(id));


    if (!product) {
        return redirect (routes.notFound);
    }
    return (
        <div className="p-3 mx-auto my-8 text-black bg-white border border-gray-200 rounded-lg shadow">
            <h1 className="mb-4 text-2xl font-bold">{product.name}</h1>
            <p className="mb-2">
                <span className="font-semibold text-black">Descripción:</span> {product.description}
            </p>
            <p className="mb-4">
                <span className="font-semibold">Precio:</span> ${product.price}
            </p>
            {product.image && (
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full mb-6 max-h-80"
                />
            )}
            <div>
                <AddCartButton/>
            </div>
        </div>
    );
}

