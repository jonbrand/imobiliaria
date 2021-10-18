import { menuData } from '../../data/MenuData';
import { ButtonComponent } from '../Button/Button';
import { Logo, MenuBars, Navbar, NavMenu, NavMenuLinks } from './styles';

interface HeaderProps {
  toggle: any;
}

export const Header = ({ toggle }: HeaderProps) => {
  return (
    <> 
      <Navbar>
        <Logo>JORGA</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
          ))}
        </NavMenu>
        <ButtonComponent />
      </Navbar>
    </>
  )
}
