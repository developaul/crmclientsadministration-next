import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useCallback, memo } from 'react';
import { useMutation } from '@apollo/client';

import { GET_PRODUCTS, MUTATION_DELETE_PRODUCT } from '../apollo/types';

const Product = ({ id, name, stock, price }) => {
  const [deleteProduct] = useMutation(MUTATION_DELETE_PRODUCT, {
    update(cache,) {
      const { getProducts } = cache.readQuery({ query: GET_PRODUCTS })
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: {
          getProducts: getProducts.filter(product => product.id !== id)
        }
      })
    }
  })

  const _handleDeleteClient = useCallback(async () => {
    const result = await Swal.fire({
      title: '¿Deseas eliminar a este producto?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar'
    })

    if (result.isConfirmed) {
      try {
        const { data: { deleteProduct: message } } = await deleteProduct({ variables: { id } })
        Swal.fire(
          'Eliminado!',
          message,
          'success'
        )
      } catch (error) {
        Swal.fire(
          'Error',
          error.message,
          'error'
        )
      }
    }
  }, [id, deleteProduct])

  const _handleEditClient = useCallback(() => {
    Router.push({
      pathname: `/editar-producto/[id]`,
      query: { id }
    })
  }, [id])

  return (
    <tr>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{stock} Piezas</td>
      <td className="border px-4 py-2">$ {price}</td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-red-800 text-white py-2 px-4 w-full rounded text-xs uppercase font-bold"
          onClick={_handleDeleteClient}
        >
          Eliminar
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
      </td>
      <td className="border px-4 py-2">
        <button
          type="button"
          className="flex justify-center items-center bg-green-600 text-white py-2 px-4 w-full rounded text-xs uppercase font-bold"
          onClick={_handleEditClient}
        >
          Editar
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        </button>
      </td>
    </tr>
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

export default memo(Product)
