import axios from 'axios';
import React, {useState} from 'react';

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState( '' );
  
  const createPost = async () => {
    const response = await axios.post( 'http://localhost:3000/api/v1/posts/', {
      title,
      content
    } );
    console.log( response );
  };



  return (
    <div className='create-post__page'>
      <div className='create-post__container'>
        <h1>Create Post</h1>
        <div className='input-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='content'>Text</label>
          <textarea
            name='content'
            id='content'
            cols='30'
            rows='10'
            onChange={event => {
              setContent(event.target.value);
            }}></textarea>
        </div>
        <div className='input-group'>
          <label htmlFor='image'>Image</label>
          <input type='file' name='image' id='image' />
        </div>
        <button onSubmit={createPost()}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
