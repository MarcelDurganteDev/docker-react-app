import React, { useEffect } from 'react';

const GoogleMap = props => {

  useEffect( () => {
    const iFrame = document.getElementById( 'iFrameId' );
    const lat = props.lat;
    const lng = props.long;
    const zoom = 12;
    const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    iFrame.src = mapUrl;
  } )

  return (
    
      <iframe id="iFrameId" title="map" width='360px' height='360px'  frameBorder="0"></iframe>
    
  )
}

export default GoogleMap
