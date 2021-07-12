
import { memo } from 'react';
import PropTypes from 'prop-types';

const FeedbackMessage = ({ message }) => (
  <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
    {message}
  </div>
)

FeedbackMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default memo(FeedbackMessage)