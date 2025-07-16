
import { getProducts } from "../../../services/products";

import ProductsList from "./components/products-list";

 const getData = async () => {
  const products = await getProducts();
  //const categories: any[] = [];
  return  {
    products,
    //categories
  }
};



export default async function Home() {
  
  const { products,  } = await getData();

  return (
    <div>
      <section className="flex items-center justify-center w-full mb-8 bg-gray-100 bg-primary-950 h-96">
        <img
          src="https://images.unsplash.com/photo-1611768212185-16f6322e28b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </section>
      <section>
        <h2>Productos destacados</h2>
      <ProductsList products = {products} />
      </section>
      
    </div>
  );
}


