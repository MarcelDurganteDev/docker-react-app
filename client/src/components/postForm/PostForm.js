import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostForm = ( { post, onSubmit } ) => {
  const { register, handleSubmit } = useForm({
  });

  const navigate = useNavigate();

  const submitHandler = handleSubmit( data => {
    alert( JSON.stringify( data ) );
    onSubmit(data);
    navigate('/');
  });

  return (
    <form onSubmit={submitHandler}>
      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='title'>
          Title
          <input
            {...register('title')}
            type='text'
            name='title'
            id='title'
            className='form-control'
          />
        </label>
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='content'>
          Text
          <textarea
            {...register( 'content' )}
            type='text'
            name='content'
            id='content'
            cols='30'
            rows='10'
            className='form-control'></textarea>
        </label>
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='image_url'>
          Image URL
          <input
            type='url'
            name='image_url'
            id='image_url'
            {...register('image_url')}
            className='form-control'
          />
        </label>
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='lat'>
          Latitude{' '}
          <input
            type='text'
            name='lat'
            id='lat'
            {...register('lat')}
            className='form-control'
          />
        </label>
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='long'>
          Longitude{' '}
          <input
            type='text'
            name='long'
            id='long'
            {...register('long')}
            className='form-control'
          />
        </label>
      </div>

      <button type='submit' className='btn btn-primary btn-block mb-4'>
        Send
      </button>
    </form>
  );
};

export default PostForm;
