import { Container, InfoBrokerContainer, MapContainer } from "./styles";

export const Padding = () => {
  return (
    <Container>
      <MapContainer />
      <InfoBrokerContainer>
        <p>Endereco: Rua da Lapa, numero 166</p>
        <p>Telefone: (12) 94534-5585</p>
        <p>E-mail: gmail@email.com</p>
      </InfoBrokerContainer>
    </Container>
  );
};