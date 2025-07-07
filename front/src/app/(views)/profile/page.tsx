import React from 'react'


const PageProfile = () => {
  const user = {
    id: 1,
    name: 'Lucas',
    email: 'lucas@example.com',
    address: '123 Main St, Springfield',
    phone: '123-456-7890',
    role: 'user',
    
  };
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
    <div className="mx-auto my-12 p-8 border border-gray-700 rounded-2xl bg-black shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-white tracking-tight">Perfil de Usuario</h2>
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
      <p className="text-white"><span className="font-semibold text-gray-300">Nombre:</span> {user.name}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Email:</span> {user.email}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Dirección:</span> {user.address}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Teléfono:</span> {user.phone}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Rol:</span> {user.role}</p>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-white border-b border-primary-700 pb-2">Órdenes</h3>
      <ul>
      {orders.map(order => (
        <li
        key={order.id}
        className="mb-8 border border-primary-700 rounded-xl p-6 shadow-sm bg-neutral-900 list-none transition-shadow"
        >
        <div className="mb-4 flex items-center justify-between">
          <div>
          <span className="font-semibold text-lg text-white">Orden #{order.id}</span>
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
          <span className="text-gray-400 text-sm">
          {new Date(order.date).toLocaleString()}
          </span>
        </div>
        <div>
          <strong className="text-gray-200 text-base">Productos:</strong>
          <ul className="mt-3 p-0">
          {order.products.map(product => (
            <li
            key={product.id}
            className="flex items-center bg-neutral-800 rounded-lg p-3 mb-3 shadow-sm list-none"
            >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg mr-5 border border-gray-700 bg-black"
            />
            <div>
              <div className="font-semibold text-base text-white">{product.name}</div>
              <div className="text-gray-400 text-sm my-1">{product.description}</div>
              <div className="text-gray-300 text-sm">
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