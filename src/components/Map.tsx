import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapOptions } from 'google-map-react';

const defaultProps = {
  center: {
    lat: -23.874982,
    lng: -53.88967,
  },
  zoom: 18,
};

const contentString = `
  <div id="content">
  <h1 class="text-xl font-medium">INT Organizações Contábeis</h1>
  <p class="text-sm mt-2">Rua 12 de Dezembro, 242, Centro</p>
  <p class="text-sm">Altônia/PR</p>
  </div>
`;

const renderMarkers = (map: MapOptions, maps, icon) => {
  const infowindow = new maps.InfoWindow({
    content: contentString,
  });

  const marker = new maps.Marker({
    position: defaultProps.center,
    map,
    icon: {
      scaledSize: new maps.Size(33, 50),
      url: icon.src,
    },
    label: {
      className: 'pb-32',
      text: 'INT Organizações Contábeis',
      color: '#12a3ff',
      fontWeight: 'bold',
    },
  });

  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
};

interface MapProps {
  children?: any;
  icon: string;
}

const Price: FC<MapProps> = ({ icon }) => {
  return (
    <div className='w-full h-96'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBhPP4XN4crB5xjXItQaiIZrTkUk1p9ZeM',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, icon)}
      ></GoogleMapReact>
    </div>
  );
};

export default Price;
