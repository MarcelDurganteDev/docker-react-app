import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = props => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/posts/');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map( post => (
        <div key={post.id}>
          <h1>{post.title}</h1> 
          <img src={post.image_url} alt={`Of ${post.title} usually aerial taken from above, trying to show the most known bird's angle of said city`} />
          <p>{post.content}</p>
        </div>
      ) )}
    </div>
  );
};
      

export default Home;
