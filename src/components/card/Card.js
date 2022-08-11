import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import Modal from '../../components/modal/Modal';
import DeleteModal from '../../components/deleteModal/DeleteModal';

const Card = props => {
  const [modal, setModal] = useState(false); 
  const [deleteModal, setDeleteModal] = useState(false); 
  const [tempData, setTempData] = useState([]);
  const [tempData2, setTempData2] = useState([]);

  const { data, value, onChange } = props;

  const getData = (id, title, lat, long) => {
    let tempData = [id, title, lat, long];
    setTempData( item => [item, ...tempData] );
    return setModal(true);
  };

  const getDataDelModal = (id, title) => {
    let tempData2 = [id, title];
    setTempData2(item => [item, ...tempData2]);
    return setDeleteModal(true);
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
              <div className='card-footer mt-auto d-flex justify-content-between'>
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
                  <button
                    className='border-0'
                    onClick={() => {
                      getDataDelModal(post.id, post.title);
                      setDeleteModal(true);
                    }}>
                    <RiDeleteBinLine
                      style={{ color: 'green', fontSize: '2rem' }}
                    />
                  </button>
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
      {deleteModal && (
        <DeleteModal
          closeDeleteModal={setDeleteModal}
          id={tempData2[1]}
          title={tempData2[2]}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Card;
