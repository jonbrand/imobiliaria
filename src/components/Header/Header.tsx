import { menuData } from '../../data/MenuData';
import { Logo, MenuBars, Navbar, NavMenu, NavMenuLinks } from './styles';

const Header = () => {
  return (
    <> 
      <Navbar>
        <Logo>JORGA</Logo>
        <MenuBars />
        <NavMenu>
          {menuData.map((item, index) => (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
          ))};
        </NavMenu>
      </Navbar>
    </>
  )
}

export default Header;