import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  icon: Icon,
  children,
}) => {
  return (
    <S.Container primary={primary}>
      {Icon && Icon}
      {children}
    </S.Container>
  );
};

export { Button };
