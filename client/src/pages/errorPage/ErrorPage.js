import React from 'react'

const errorPage = props => {

  const { error } = props;
  return (
    <div>
      <h1>{error}</h1>
    </div>
  )
}

export default errorPage