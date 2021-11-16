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
  height: 125px;

  width: 100%;

  background: #344;
`;

export const InfoBrokerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  height: 125px;
  width: 100%;
  background: #9999;

  font-size: 1rem;
  font-weight: lighter;
  font-style: normal;

  color: var(--text-button);
  padding: 1rem 1rem;

`;