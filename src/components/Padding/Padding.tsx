import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import * as S from './styles';

export const Padding = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBac89P1KXvt_D6XB3AO21LSfEOh5dZmGk',
  });

  return (
    <S.Container>
      <S.MapContainer>
        <S.MapWrapper>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{
                lat: -23.62964960895306,
                lng: -46.73586187144678,
              }}
              zoom={15}
            ></GoogleMap>
          ) : (
            <></>
          )}
        </S.MapWrapper>
      </S.MapContainer>
      <S.InfoBrokerContainer>
        <p>Endereco: Rua da Lapa, numero 166</p>
        <p>Telefone: (12) 94534-5585</p>
        <p>E-mail: gmail@email.com</p>
      </S.InfoBrokerContainer>
    </S.Container>
  );
};