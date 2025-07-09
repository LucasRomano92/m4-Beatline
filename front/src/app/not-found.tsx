import Container from "@/components/layout/container";
import React from "react";
import  Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

const NotFound = () => {
  console.log("NotFound component rendered");
  return (
    <>
    <Navbar/>
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">La página que buscas no existe o fue movida.</p>
        
        Volver al inicio
      
    </div>
    </Container>
    <Footer/>
        </>
  );
};

export default NotFound;