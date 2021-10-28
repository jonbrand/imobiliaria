import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import * as S from './styles';

export const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBac89P1KXvt_D6XB3AO21LSfEOh5dZmGk"
  })

  return (
    <S.Container>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%'}}
            center={{
              lat: -23.62964960895306, 
              lng: -46.73586187144678
            }}
            zoom={15}
          >
          </GoogleMap>
      ) : <></>
      }
    </S.Container>
  );
};
