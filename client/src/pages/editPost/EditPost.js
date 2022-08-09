import React, { useEffect, useState } from 'react';
import PostForm from '../../components/postForm/PostForm';
import { getPost } from '../../api/api';
import { useParams } from 'react-router-dom';
import { updatePost } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPost(id);
      setPost(result);
    };
    fetchData();
  }, [id]);

  const onSubmit = async data => {
    await updatePost(id, data);
    navigate('/');
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
