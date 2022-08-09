import React, { useEffect, useState } from 'react';
import PostForm from '../../components/postForm/PostForm';

const EditPost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost({
      title: 'title',
      text: 'text',
      image_url: 'image_url',
      lat: 'lat',
      long: 'long'
    });
  }, []);

  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return post ? (
    <div className='container'>
      <div className='mt-3'>
        <h3>Edit Post</h3>
        <PostForm post={post} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default EditPost;
