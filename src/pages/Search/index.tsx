import React from 'react';

import * as S from './styles';
import { HousesData } from './components/HousesData';
import { Map } from './components/Map';

export const Search: React.FC = () => {
  return (
    <S.Container>
      <HousesData />
      <Map />
    </S.Container>
  );
};
