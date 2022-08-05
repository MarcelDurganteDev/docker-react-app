import React, { useEffect } from 'react';

const GoogleMap = () => {

  useEffect( () => {
    const iFrame = document.getElementById( 'iFrameId' );
    const lat = 40.7128;
    const lng = -74.0060;
    const zoom = 12;
    const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    iFrame.src = mapUrl;
  } )
  
  return (
    <div>
      <iframe id="iFrameId" title="map" width="300px" height="300px" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
  )
}

export default GoogleMap
