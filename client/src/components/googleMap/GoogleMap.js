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
    
      <iframe id="iFrameId" title="map" frameBorder="0"></iframe>
    
  )
}

export default GoogleMap
