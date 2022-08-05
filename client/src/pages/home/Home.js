import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  console.log('outside');
  const fetchData = async () => {
    console.log('inside');
    const response = await axios.get('http://localhost:3000/api/v1/posts/');
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return <div></div>;
};

export default Home;
