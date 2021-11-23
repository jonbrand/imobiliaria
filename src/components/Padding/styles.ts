import styled from "styled-components";

export const Container = styled.div`
  margin-top: 165px;
  height: 250px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  
  width: 100%;
  background: var(--black-medium);
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  height: 125px;
  width: 100%;
`;

export const InfoBrokerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  height: 125px;
  width: 100%;
  background: var(--background);

  font-size: 1rem;
  font-weight: lighter;
  font-style: normal;

  color: var(--black);
  padding: 1rem 1rem;

`;

export const MapWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
