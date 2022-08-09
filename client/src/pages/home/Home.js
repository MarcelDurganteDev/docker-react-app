import React, { useEffect, useState } from 'react';
/* import axios from 'axios'; */
import Card from '../../components/card/Card';
/* import ErrorPage from '../errorPage/ErrorPage';
import Modal from '../../components/modal/Modal'; */
import { getPosts } from '../../api/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await getPosts();
      setData( result.data );
    };
    fetchData();
  }, [] );
  
  /*  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/v1/posts/');
      setData(response.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      const errorResponse = err.message + ' - ' + err.code;
      setError(errorResponse);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [] ); */

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Posts</h3>

        {data.length > 0 ? (
          <Card data={data} />
        ) : (
            <div className='alert alert-danger' role='alert'>
              No posts found!
          </div>
          )}

      {/*   {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          <Card data={data} openModal={modal => setModal(modal)} />
        )}
        {modal && <Modal closeModal={setModal} />} */}
      </div>
    </div>
  );
};

export default Home;
