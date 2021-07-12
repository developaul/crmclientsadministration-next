// import { memo } from 'react'
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Client = ({ id, name, lastName, company, email }) => {
  console.log("🚀 ~ Client ~ name", name)

  const _handleDeleteClient = useCallback(() => {
    console.log("🚀 ~ Client ~ id", id)

  }, [id])

  return (
    <tr>
      <td className="border px-4 py-2">{name} {lastName}</td>
      <td className="border px-4 py-2">{company}</td>
      <td className="border px-4 py-2">{email}</td>
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
      <td className="border px-4 py-2">{email}</td>
    </tr>
  )
}

Client.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Client
