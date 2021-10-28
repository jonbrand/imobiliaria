import React from 'react';
import {
  ChevronRightOutline,
  TrashOutline,
  HeartOutline,
  FilterOutline,
  RssOutline,
  ChevronDownOutline,
} from 'heroicons-react';
import { nanoid } from 'nanoid';
import { Button } from '../../../../components/ButtonTwo';

import * as S from './styles';

export const HousesData: React.FC = () => {
  return (
    <S.Container>
      <header>
        <S.Breadcrumbs>
          <span>Inicio</span>
          <ChevronRightOutline color="#333" size={16} />
          <strong>São Paulo, SP</strong>
        </S.Breadcrumbs>

        <S.TitleContainer>
          <h1>Alugar em São Paulo, SP</h1>
          <span>8.043 imóveis encontrados</span>
        </S.TitleContainer>

        <S.ButtonsContainer>
          <div>
            <Button primary icon={<FilterOutline size={16} color="#fff" />}>
              Filtrar
            </Button>
            <Button icon={<RssOutline size={16} color="#333" />}>
              Farejar Imovel
            </Button>
          </div>

          <div>
            <Button icon={<ChevronDownOutline size={16} color="#333" />}>
              Mais Relevantes
            </Button>
          </div>
        </S.ButtonsContainer>
      </header>

      <hr />

      <S.HousesList>
        {Array.from({ length: 8 })
          .fill(0)
          .map(() => (
            <House key={nanoid()} />
          ))}
      </S.HousesList>
    </S.Container>
  );
};

function House() {
  return (
    <S.House>
      <img
        src="https://resizedimgs.vivareal.com/fit-in/1600x720/vr.images.sp/d79f1939c0cb91b54809a2f73c5214a4.jpg"
        alt="Casa"
      />

      <div>
        <header>
          <span>Casa</span>

          <div>
            <span>Exclusivo</span>
          </div>
        </header>

        <S.Location>
          <strong>Rua Silva Bueno</strong>
          <span>Ipiranga, São Paulo</span>
        </S.Location>

        <S.HomeDetails>
          <div>
            <span>90m³</span>
          </div>

          <div>
            <span>1 Quarto</span>
          </div>
        </S.HomeDetails>

        <footer>
          <S.Price>
            <span>Aluguel R$ 1,113</span>
            <strong>Total R$ 1,326</strong>
          </S.Price>

          <S.HomeButtons>
            <button>
              <TrashOutline size={24} color="#333" />
            </button>
            <button>
              <HeartOutline size={24} color="#333" />
            </button>
          </S.HomeButtons>
        </footer>
      </div>
    </S.House>
  );
}
