import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/posts/');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return <div></div>;
};

export default Home;
