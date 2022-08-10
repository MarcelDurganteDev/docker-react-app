import React from 'react';
import { deletePost } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const DeleteModal = props => {
  const { value, onChange } = props;

  const navigate = useNavigate();

  function handleChange() {
    onChange(!value);
    // Here, we invoke the callback with the new value
  }

  const deletePostHandler = () => {
    deletePost(props.id);
  };

  const handleClick = () => {
    navigate('/');
    deletePostHandler();
    props.closeDeleteModal(false);
    handleChange();
    window.location.reload();
  };

  return (
    <div className='modal' tabIndex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{props.title}</h5>
            <button
              onClick={() => props.closeDeleteModal(false)}
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer'>
            <button
              onClick={handleClick}
              onChange={handleChange}
              value={value}
              type='button'
              className='btn btn-danger'>
              Delete
            </button>
            <button
              onClick={() => props.closeDeleteModal(false)}
              type='button'
              className='btn btn-secondary'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
