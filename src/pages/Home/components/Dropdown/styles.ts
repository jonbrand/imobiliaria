import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DropdownProps {
  isOpen: boolean;
}

export const DropdownContainer = styled.div<DropdownProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--grey-medium);
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '1' : '0')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  
  @media screen and ( max-width: 480px ) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s ease-in-ease-out;

  &:hover {
    color: #000D1A;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

