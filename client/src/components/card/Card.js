import React from 'react';

const Card = props => {
  const { data } = props;

  console.log(data);

  if (data) {
    return (
      <div>
        {data.map(el => (
          <div key={el.id}>
            <h1>{el.title}</h1>

            <img src={el.image} alt={el.title} />
          </div>
        ))}
      </div>
    );
  }
  return ( <div>
    <h1>loading...</h1>
  </div>)
};

export default Card;
