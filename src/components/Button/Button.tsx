import { Button, NavBtn } from './styles';

export const ButtonComponent = () => {
  return (
    <>
      <NavBtn>
        <Button to="/contact" primary="true">
          {' '}
          Entre em contato
        </Button>
      </NavBtn>
    </>
  );
};
