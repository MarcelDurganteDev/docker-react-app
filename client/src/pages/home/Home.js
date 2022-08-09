import React, { useEffect, useState } from 'react';
/* import axios from 'axios'; */
import Card from '../../components/card/Card';
import ErrorPage from '../errorPage/ErrorPage';
import MapModal from '../../components/mapModal/MapModal';
import { getPosts } from '../../api/api';
import GoogleMap from '../../components/googleMap/GoogleMap';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const result = await getPosts();
        setData(result.data);
        setLoading(false);
        setError(false);
      };
      fetchData();
    } catch (err) {
      const errorResponse = err.message + ' - ' + err.code;
      setError(errorResponse);
      setLoading(false);
    }
  }, []);

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Posts</h3>
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          <Card data={data} openModal={modal => setModal(modal)} />
        )}
        {modal && <MapModal closeModal={setModal} />}
      </div>
    </div>
  );
};

export default Home;
