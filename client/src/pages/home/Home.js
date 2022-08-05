import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';
import ErrorPage from '../errorPage/ErrorPage'
import Modal from '../../components/modal/Modal';

const Home = () => {
  const [data, setData] = useState( [] );
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( null );
  const [modal, setModal] = useState( false );

  const fetchData = async () => {
    try {
      setLoading(true);
    const response = await axios.get('http://localhost:3000/api/v1/posts/');
      setData( response.data );
      setLoading( false );
      setError( false );
    } catch ( err ) {
      const errorResponse = err.message + ' - ' + err.code;
      setError( errorResponse );
      setLoading( false );
    }
  };

  useEffect(() => {
    fetchData();
  }, [] );
  

  return (
    <div>
      {loading ? <h1>loading...</h1> : error ? <ErrorPage error={error} /> : <Card data={data} openModal={modal => setModal(modal)} />}
      {modal && <Modal />}
    </div>
  );
};
      

export default Home;
