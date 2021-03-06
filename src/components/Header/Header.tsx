import { useHistory } from 'react-router-dom';
import { SearchOutline } from 'heroicons-react';
import { ButtonComponent } from '../Button/Button';
import { Logo, MenuBars, Navbar, NavInput, NavInputWrapper } from './styles';

interface HeaderProps {
  toggle: any;
}

export const Header = ({ toggle }: HeaderProps) => {
  const history = useHistory();

  return (
    <>
      <Navbar>
        <Logo>Jorga</Logo>
        <MenuBars onClick={toggle} />
        <NavInputWrapper>
          <NavInput placeholder="Digite a cidade ou bairro ou caracteristica (exemplo: fazenda)" />

          <button onClick={() => history.push('/busca')}>
            <SearchOutline color="#C0C0C0" />
          </button>
        </NavInputWrapper>
        <ButtonComponent />
      </Navbar>
    </>
  );
};
