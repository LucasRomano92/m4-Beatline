
import React from 'react'
import { products } from '@/helpers/products';
import { routes } from '@/routes';
import { redirect } from 'next/dist/client/components/navigation';
import Button from '@/components/ui/button';

export default async function Page({
    params,
    searchParams,
}: {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { slug } = params;
    const [id] = slug;

    console.log('slug', slug);

    const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return redirect (routes.notFound);
    }
    return (
        <div className="mx-auto my-8 text-black p-6 border border-gray-200 rounded-lg bg-white shadow">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
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
                    className="w-full max-h-80 object-contain mb-6"
                />
            )}
            <div>
                <Button label="Add to cart" variant="primary" />
            </div>
        </div>
    );
}

