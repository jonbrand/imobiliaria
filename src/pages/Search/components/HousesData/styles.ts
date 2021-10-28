import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  width: 85%;

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

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 616px) {
    grid-template-columns: 1fr;
    width: 256px;
    margin: 0 auto;
  }
`;

export const House = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 256px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: none;
  transition: 0.5s;

  > img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 100%;

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
      width: 100%;
    }
  }

  &:hover {
    box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.4);
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
