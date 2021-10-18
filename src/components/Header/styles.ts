import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;

  width: 100%;
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
  color: #fff;
  font-style: italic;
`;

export const MenuBars = styled( FaBars )`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;

    cursor: pointer;
    position: absolute;
    top: 0;
    
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)<any>`
  ${NavLink}
`;
