import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;

  width: 100%;

  background: green;
`;

export const Logo = styled(Link)<any>`
  color: #000;
  font-style: italic;
`;

export const MenuBars = styled.i``;

export const NavMenu = styled.div``;

export const NavMenuLinks = styled(Link)<any>``;
