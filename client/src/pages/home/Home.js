import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';

const Home = () => {
  const [data, setData] = useState( [] );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( null );

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);
    const response = await axios.get('http://localhost:3000/api/v1/posts/');
      setData( response.data );
      setLoading(false);
    } catch ( error ) {
      setError( error );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <h1>loading...</h1> : error ? <ErrorPage/> : <Card data={data} />}
    </div>
  );
};
      

export default Home;
