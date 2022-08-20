import React, { FC } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

const defaultProps = {
  longitude: -53.88967,
  latitude: -23.874982,
  zoom: 15
}

// const contentString = `
//   <div id="content">
//   <h1 class="text-xl font-medium">INT Organizações Contábeis</h1>
//   <p class="text-sm mt-2">Rua 12 de Dezembro, 242, Centro</p>
//   <p class="text-sm">Altônia/PR</p>
//   </div>
// `;

interface MapProps {
  children?: any;
  icon: any;
}

const Price: FC<MapProps> = ({ icon }) => {
  return (
    <div className='w-full h-96'>
      {/* @ts-ignore */}
      {/* eslint-disable-next-line import/no-webpack-loader-syntax */}
      <Map
        scrollZoom={false}
        initialViewState={defaultProps}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.GATSBY_MAPS_KEY}
      >
        <Marker longitude={defaultProps.longitude} latitude={defaultProps.latitude}></Marker>
          <Popup longitude={defaultProps.longitude} latitude={defaultProps.latitude}
            offset={[0, -40]}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom">
            INT Organizações Contábeis
          </Popup>
      </Map>
    </div>
  );
};

export default Price;
