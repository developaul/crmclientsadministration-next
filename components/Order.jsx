import React from 'react'

const Order = ({ id, client, status, total, order }) => {

  return (
    <div className="mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg">
      <div >
        <p className="font-bold text-gray-800">Cliente: {client}</p>
        <h2 className="text-gray-800 font-bold mt-10">Estado Pedido:</h2>
        <select
          className="mt-2 appearance-none bg-blue-600 border border-blue-600 text-white p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs"
          value={status}
        >
          <option value="completed" >COMPLETADO</option>
          <option value="pending" >PENDIENTE</option>
          <option value="cancelled" >CANCELADO</option>
        </select>
      </div>
      <div>
        <h2 className="text-gray-800 font-bold mt-2">Resumen del pedido</h2>
        {order.map(({ id, name, quantity }) => (
          <div
            className="mt-4"
            key={id}
          >
            <p className="text-sm text-gray-600">Producto: {name}</p>
            <p className="text-sm text-gray-600">Cantidad: {quantity}</p>
          </div>
        ))}

        <p className="text-gray-800 mt-3 font-bold">
          Total a pagar:
          <span className="font-light">$ {total}</span>
        </p>

        <button
          className="uppercase text-xs font-bold flex items-center mt-4 bg-red-800 px-5 py-2 inline-block text-white rounded leading-tight"
        >
          Eliminar Pedido
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Order
