import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  width: 100%;

  > hr {
    margin-bottom: 24px;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const TitleContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 16px 0;

  > div {
    display: flex;

    > button {
      & + button {
        margin-left: 8px;
      }
    }
  }
`;

export const HousesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  width: 100%;
`;

export const House = styled.div`
  width: 256px;
  border: 1px solid #ccc;
  border-radius: 8px;

  > img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  > div {
    padding: 8px;
    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      > div {
        padding: 4px 6px;
        border-radius: 4px;
        background: #d0f2ed;

        > span {
          color: #1a4f48;
        }
      }
    }

    > footer {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeDetails = styled.div`
  display: flex;
  margin: 12px 0;

  > div {
    & + div {
      margin-left: 8px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    color: #1a4f48;
  }
`;

export const HomeButtons = styled.div`
  display: flex;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #ccc;
    background: transparent;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transition: 0.5s;

    width: 32px;
    height: 32px;

    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
      border: 1px solid #bbb;
    }

    & + button {
      margin-left: 12px;
    }
  }
`;
