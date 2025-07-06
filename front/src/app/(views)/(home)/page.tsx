import React from "react";

import ProductsList from "./components/products-list";



export default function Home() {
  return (
    <div>
      <section className="w-full h-96 flex items-center justify-center bg-gray-100 mb-8">
        <img
          src="https://images.unsplash.com/photo-1611768212185-16f6322e28b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="object-cover h-full w-full  rounded-lg shadow-lg"
        />
      </section>
      <section>
        <h2>Productos destacados</h2>
      <ProductsList />
      </section>
      
    </div>
  );
}


