import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { deletePost } from '../../api/api';
import Modal from '../../components/modal/Modal';



const Card = props => {
  const [modal, setModal] = useState( false );
  const [tempData, setTempData] = useState( [] );

  const { data, openModal } = props;


  const handleDelete = id => {
    deletePost( id );
  };

  const getData = ( id, title, lat, long ) => {
    let tempData = [id, title, lat, long]
    setTempData(item => [item, ...tempData]);
    return setModal( true );
    
  }
  console.log( 'tempData', tempData );

    return (
      <div>
        {data.map(post => (
          <div key={post.id} className='col-lg-4 col-md-6 mb-4'>
            <div className='card'>
              <div
                className='bg-image hover-overlay ripple'
                data-mdb-ripple-color='light'>
                <img
                  src={post.image_url}
                  alt={post.title}
                  className='img-fluid'
                />
                <a href='#!'>
                  <div className='mask'></div>
                </a>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
                <p className='card-text'>{post.content}</p>
                <a href='#!' className='btn btn-primary'>
                  Read
                </a>
                <button
                  onClick={() => {
                    getData(post.id, post.title, post.lat, post.long);
                    setModal(true);
                  }}
                  id={post.id}
                  className='btn btn-primary'>
                  Map
                </button>
                <Link to={`/post/update/${post.id}`}>
                  <GrEdit style={{ color: 'green', fontSize: '30px' }} />
                </Link>

                <Link to={`/post/delete/${post.id}`}>
                  <RiDeleteBinLine
                    style={{ color: 'green', fontSize: '30px' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
        {modal && (
          <Modal
            closeModal={setModal}
            id={tempData[1]}
            title={tempData[2]}
            lat={tempData[3]}
            long={tempData[4]}
          />
        )}
      </div>
    );
};

export default Card;
