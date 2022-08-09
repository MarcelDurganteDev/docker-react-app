import axios from 'axios';


export const getPosts = () => {
  return axios.get('http://localhost:3000/api/v1/posts/');
};

export const createPost = post => {
  return axios.post('http://localhost:3000/api/v1/posts/', post);
};

export const getPost = id => {
  return axios.get(`http://localhost:3000/api/v1/posts/${id}`);
};

export const updatePost = ( id, post ) => {
  return axios.put( `http://localhost:3000/api/v1/posts/${id}`, post );
};

export const deletePost = id => {
  return axios.delete(`http://localhost:3000/api/v1/posts/${id}`);
};


