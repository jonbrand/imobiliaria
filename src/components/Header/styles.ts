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
  background: var(--background);
`;

export const NavLink = css`
  color: var(--text-body);
  display: flex;
  align-items: center;

  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;

  text-decoration: none;
`;

export const Logo = styled(Link)<any>`
  ${NavLink}
  color: var(--black-medium);
  font-style: italic;
  font-size: 25px;
  font-weight: bold;
`;

export const MenuBars = styled(FaBars)`
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

export const NavInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  border: 1px solid var(--grey-light);
  border-radius: 5px;
  padding: 16px 8px;
  transition: border-color 0.3s;

  &:focus-within {
    border-color: var(--black);
  }

  > button {
    border: 0;
    background: none;
  }
`;

export const NavInput = styled.input`
  width: 28rem;
  border: 0;
  background: transparent;
  outline: 0;

  margin-right: 0.375rem;
  padding: 5px 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)<any>`
  ${NavLink}
`;
