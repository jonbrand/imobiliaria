import { SearchOutline } from 'heroicons-react';
import { ButtonComponent } from '../../../../components/Button/Button';
import { Logo, MenuBars, Navbar, NavInput, NavInputWrapper } from './styles';

interface HeaderProps {
  toggle: any;
}

export const Header = ({ toggle }: HeaderProps) => {
  return (
    <>
      <Navbar>
        <Logo>Faulhaber</Logo>
        <MenuBars onClick={toggle} />
        <NavInputWrapper>
          <NavInput placeholder="Digite a cidade ou bairro ou caracteristica (exemplo: fazenda)" />
          <SearchOutline color="#aaa" />
        </NavInputWrapper>
        <ButtonComponent />
      </Navbar>
    </>
  );
};
