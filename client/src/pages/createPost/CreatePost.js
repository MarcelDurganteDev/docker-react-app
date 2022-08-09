import React from 'react';
import PostForm from '../../components/postForm/PostForm';
import { createPost } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const navigate = useNavigate();
 
  const onSubmit = async data => {
    await createPost( data );
    navigate('/');
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
