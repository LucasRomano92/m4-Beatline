import React from 'react'
import UserData from './components/user-data';


const PageProfile = () => {
  
  const orders = [
     {
      id: 1,
      status: "approved",
      date: "2025-07-02T15:28:11.574Z",
      products: [
        {
          id: 2,
          name: "Teclado MIDI MacKeys 88",
          description: "Combiná portabilidad y control profesional con el MacKeys 88: teclado MIDI de 88 teclas contrapesadas, ideal para producción, composición y directo. Compatible con los principales DAWs y software de música.",
          price: 999,
          stock: 10,
          image: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/KEUAAOSwSDZZpnDO/$_12.JPG",
          categoryId: 2
        },
        {
          id: 3,
          name: "iStrum Guitarra Electroacústica Pro",
          description: "Liberá tu creatividad con la iStrum Electroacústica Pro: cuerpo liviano, sonido cálido y conexión directa a amplificadores. Perfecta para grabar, tocar en vivo o disfrutar en casa.",
          price: 799,
          stock: 10,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXElIlSGwMWwB7AozlZ-Y0HHAwizO5PeGxg&s",
            categoryId: 3
        },
        {
          id: 4,
          name: "BeatWatch Metrónomo Inteligente",
          description: "Controlá tu ritmo con el BeatWatch: un reloj-metrónomo con vibración, visualización LED y conexión Bluetooth para sincronizar con tu banda o app de práctica. Llevá el tempo contigo siempre.",
          price: 399,
          stock: 10,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cggHiJo7tu--SNZasKEYTF4HdwiWnOPRrHAXIPx_ZxoD06jnoV0g31rsUg6Pv_IqEy0&usqp=CAU",
          categoryId: 4
        },
      ],
    },
    {
      id: 2,
      status: "approved",
      date: "2025-07-02T15:28:11.574Z",
      products: [
        {
          id: 2,
          name: "Teclado MIDI MacKeys 88",
          description: "Combiná portabilidad y control profesional con el MacKeys 88: teclado MIDI de 88 teclas contrapesadas, ideal para producción, composición y directo. Compatible con los principales DAWs y software de música.",
          price: 999,
          stock: 10,
          image: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/KEUAAOSwSDZZpnDO/$_12.JPG",
          categoryId: 2
        },
      ],
    },
  ];
    
  

  return (
    <div className="p-8 mx-auto my-12 bg-black border border-gray-700 shadow-lg rounded-2xl">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white">Perfil de Usuario</h2>
      <UserData />
      <h3 className="pb-2 mb-6 text-2xl font-bold text-white border-b border-primary-700">Órdenes</h3>
      <ul>
      {orders.map(order => (
        <li
        key={order.id}
        className="p-6 mb-8 list-none transition-shadow border shadow-sm border-primary-700 rounded-xl bg-neutral-900"
        >
        <div className="flex items-center justify-between mb-4">
          <div>
          <span className="text-lg font-semibold text-white">Orden #{order.id}</span>
          <span
            className={`ml-4 px-3 py-1 rounded-lg font-medium text-sm ${
            order.status === 'approved'
              ? 'bg-green-900 text-green-200'
              : 'bg-yellow-900 text-yellow-200'
            }`}
          >
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
          </div>
          <span className="text-sm text-gray-400">
          {new Date(order.date).toLocaleString()}
          </span>
        </div>
        <div>
          <strong className="text-base text-gray-200">Productos:</strong>
          <ul className="p-0 mt-3">
          {order.products.map(product => (
            <li
            key={product.id}
            className="flex items-center p-3 mb-3 list-none rounded-lg shadow-sm bg-neutral-800"
            >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-16 h-16 mr-5 bg-black border border-gray-700 rounded-lg"
            />
            <div>
              <div className="text-base font-semibold text-white">{product.name}</div>
              <div className="my-1 text-sm text-gray-400">{product.description}</div>
              <div className="text-sm text-gray-300">
              <span className="mr-4">
                <strong>Precio:</strong> ${product.price}
              </span>
              <span className="mr-4">
                <strong>Stock:</strong> {product.stock}
              </span>
              <span>
                <strong>Categoría:</strong> {product.categoryId}
              </span>
              </div>
            </div>
            </li>
          ))}
          </ul>
        </div>
        </li>
      ))}
      </ul>
    </div>
  )
  
}

export default PageProfile;