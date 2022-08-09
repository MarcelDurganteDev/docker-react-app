import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

const Card = props => {
  const { data, openModal } = props;

  const handleEdit =  (id)=> {
   console.log(id);
  };

  if (data) {
    return (
      <div>
        {data.map(el => (
          <div key={el.id} className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div
                className='bg-image hover-overlay ripple'
                data-mdb-ripple-color='light'>
                <img src={el.image_url} alt={el.title} className='img-fluid' />
                <a href='#!'>
                  <div className='mask'></div>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{el.title}</h5>
                <p className='card-text'>{el.content}</p>
                <a href='#!' className='btn btn-primary'>
                  Read
                </a>
                <button
                  onClick={() => openModal(true)}
                  className='btn btn-primary'>
                  Map
                </button>
                <Link to={`/post/update/${el.id}`}>
                  <GrEdit
                    style={{ color: 'green', fontSize: '30px' }}
                    onClick={() => handleEdit(el.id)}
                  />
                </Link>
                <Link to={`/post/delete/${el.id}`}>
                  <RiDeleteBinLine style={{ color: 'red', fontSize: '30px' }} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};
        
export default Card;
