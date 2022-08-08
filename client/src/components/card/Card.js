import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

const Card = props => {
  const { data, openModal } = props;

  console.log(data)

  const handleEdit =  (e)=> {
   console.log(data._id);
  };

  if (data) {
    return (
      <div>
        {data.map(el => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <img src={el.image_url} alt={el.title} />
            <button className='btn-map' onClick={() => openModal(true)}>
              See Map
            </button>
            <GrEdit onClick={handleEdit} />
            <RiDeleteBinLine />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

export default Card;
