
import { memo } from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
    <p className="font-bold">Error</p>
    <p>{message}</p>
  </div>
)

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default memo(ErrorMessage)