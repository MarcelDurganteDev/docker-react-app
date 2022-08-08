import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Create Post</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>
            Title:
            <input
              {...register('title')}
            />
          </label>
        </div>
        <div className='input-group'>
          <label>
            Description:
            <textarea
              {...register('content')}
             
              cols='30'
              rows='10'></textarea>
          </label>
        </div>
        <div className='input-group'>
          <label>
            Latitude:
            <input
              {...register('lat')}
            />
          </label>
        </div>

        <div className='input-group'>
          <label>
            Longitude:
            <input
              {...register('long')}
            />
          </label>
        </div>
        <input type='submit' value='submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default CreatePost;
