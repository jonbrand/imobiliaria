import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  primary: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  border: 0;
  background: none;
  border: 1px solid var(--grey-light);
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-title);

  > svg {
    margin-right: 8px;
  }

  ${props =>
    props.primary &&
    css`
      background: var(--red);
      color: var(--text-button);
      border-color: ${shade(0.3, '#C0C0C0')};
    `};
`;
