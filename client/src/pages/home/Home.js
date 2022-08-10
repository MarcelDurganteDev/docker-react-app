import React, { useEffect, useState } from 'react';
/* import Card1 from '../../components/card1/Card1';
 */ import ErrorPage from '../errorPage/ErrorPage';
import { getPosts } from '../../api/api';
import Card from '../../components/card/Card';
import './Home.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState([]);

  function handleChange(newState) {
    setValue(newState);
  }

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
      <h1>Posts</h1>
      <hr />

      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <Card data={data} value={value} onChange={handleChange} />
      )}
    </div>
  );
};

export default Home;
