import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { deletePost } from '../../api/api';
import Modal from '../../components/modal/Modal';
import DeleteModal from '../../components/deleteModal/DeleteModal';

const Card = props => {
  const [modal, setModal] = useState(false); 
  const [deleteModal, setDeleteModal] = useState(false); 
  const [tempData, setTempData] = useState([]);

  const { data, openModal } = props;

  /* const handleDelete = id => {
    deletePost( id );
  }; */

  const getData = (id, title, lat, long) => {
    let tempData = [id, title, lat, long];
    setTempData( item => [item, ...tempData] );
    return setModal(true);
  };

  return (
    <div className='row p-2 justify-content-center'>
      {data.map(post => (
        <div key={post.id} className='col-md-4 mt-4'>
          <div className='card p-2 h-100'>
            <div className='card-img-top'>
              <img
                width='100%'
                height='300px'
                src={post.image_url}
                alt={post.title}
                className='card-img-top'
              />
            </div>
            <div className='card-body d-flex flex-column'>
              <h5 className='card-title'>{post.title}</h5>
              <p className='card-text'>{post.content}</p>
              <div class='card-footer mt-auto d-flex justify-content-between'>
                <div>
                  <a href='#!' className='btn btn-primary'>
                    Read
                  </a>
                  <button
                    onClick={() => {
                      getData(post.id, post.title, post.lat, post.long);
                      setModal(true);
                    }}
                    id={post.id}
                    className='btn btn-primary mt-auto'>
                    Map
                  </button>
                </div>
                <div>
                  <Link to={`/post/update/${post.id}`}>
                    <GrEdit style={{ color: 'green', fontSize: '2rem' }} />
                  </Link>
                  <Link to={`/post/delete/${post.id}`}>
                    <RiDeleteBinLine
                      style={{ color: 'green', fontSize: '2rem' }}
                    />
                  </Link>
                </div>
              </div>
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
      {deleteModal && <DeleteModal closeModal={setModal} id={tempData[1]} />}
    </div>
  );
};

export default Card;
