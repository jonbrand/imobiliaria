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
  border: 1px solid #aaa;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #333;

  > svg {
    margin-right: 8px;
  }

  ${props =>
    props.primary &&
    css`
      background: #4f63f3;
      color: #fff;
      border-color: ${shade(0.3, '#4f63f3')};
    `};
`;
