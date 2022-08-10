import React from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ( { post, onSubmit } ) => {
  const { register, handleSubmit } = useForm( {
    defaultValues: post ? post : {} // if post is undefined, defaultValues will be an empty object

  });

  const submitHandler = handleSubmit( data => {
    onSubmit(data);
  });

  return (
    
    <form onSubmit={submitHandler}>
      <div className='form-outline mb-4'>
        <label className='form-label fs-3' htmlFor='title'>
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
        <label className='form-label fs-3' htmlFor='content'>
          Text
          <textarea
            {...register('content')}
            type='text'
            name='content'
            id='content'
            cols='30'
            rows='10'
            className='form-control'></textarea>
        </label>
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label fs-3' htmlFor='image_url'>
          Image URL ( must include <b>http://</b> )
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
        <label className='form-label fs-3' htmlFor='lat'>
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
        <label className='form-label fs-3' htmlFor='long'>
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
