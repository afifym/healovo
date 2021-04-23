import { Wrapper } from '@material-ui/pickers/wrappers/Wrapper';
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 30, lng: 31.2 }} />;
};

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function GoogleApp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBFjOLdfw_0gxW8PPgdrlntqt23kmwKDfQ`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
