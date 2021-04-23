import React from 'react';
import { GoogleMap, withScriptjs } from 'react-google-maps';

const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 30, lng: 31.2 }} />;
};

const WrappedMap = func;
export default Map;
