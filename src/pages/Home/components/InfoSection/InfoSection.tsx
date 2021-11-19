import { Button } from '../../../../components/Button/styles';
import { ColumnLeft, ColumnRight, Container, Section } from './styles';

interface InfoSectionProps {
  heading: any;
  paragraphOne: any;
  paragraphTwo: any;
  buttonLabel: any;
  reverse: any;
  image: any;
}

export const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}: InfoSectionProps) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/busca" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};
