
import React from "react";
import ProductsList from "./(home)/components/products-list";

export default function Home() {
  return (
    <div>
    <section className="relative w-full h-96 flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            style={{ objectFit: "cover" }}
        />
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                Bienvenido a la página principal
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white drop-shadow">
                Descubre nuestros productos y ofertas
            </p>
        </div>
    </section>
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Productos destacados</h2>
        <ProductsList />
      </div>
    </div>
  );
}
