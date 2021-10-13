import styled, { css } from 'styled-components/macro';
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

export const NavLink = css`
  color: #FFF;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)<any>`
  ${NavLink}
  color: #000;
  font-style: italic;
`;

export const MenuBars = styled.i``;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
`;

export const NavMenuLinks = styled(Link)<any>`
  ${NavLink}
`;
