import React from 'react';
import PostForm from '../../components/postForm/PostForm';


const CreatePost = () => {
 
  const onSubmit = data => {
   alert( JSON.stringify( data ) );
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Create New Post</h3>
        <PostForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreatePost;
