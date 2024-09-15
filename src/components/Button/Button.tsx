import { ReactNode, useState } from 'react';
import { ArrowNext } from '../Icons/ArrowNext';
import {
  StyledArrow,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  ProjectButton,
  TransparentButton,
  HeaderButton,
  FooterButton,
  FilterButton,
} from './buttonStyles';

interface IButtonProps {
  children: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'transparent'
    | 'header'
    | 'project'
    | 'filter'
    | 'footer';
  icon?: boolean;
  onClick?: () => void;
  width?: number;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  active?: boolean | undefined;
}

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
  onClick,
  type = 'button',
  active,
  ...props
}: IButtonProps) => {
  const [stroke, setStroke] = useState('#E8EBED');
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    if (onClick) onClick();
  };

  const renderButton = () => (
    <PrimaryButton
      {...props}
      type={type}
      onMouseEnter={() => setStroke('#225E84')}
      onMouseLeave={() => setStroke('#E8EBED')}
      onKeyUp={onClick}
      onClick={handleClick}
    >
      {children}
      {icon && (
        <StyledArrow>
          <ArrowNext stroke={stroke} />
        </StyledArrow>
      )}
    </PrimaryButton>
  );

  switch (variant) {
    case 'secondary':
      return (
        <SecondaryButton onClick={handleClick}>{children}</SecondaryButton>
      );
    case 'outline':
      return <OutlineButton onClick={handleClick}>{children}</OutlineButton>;
    case 'filter':
      return (
        <FilterButton $active={active} onClick={handleClick}>
          {children}
        </FilterButton>
      );
    case 'project':
      return <ProjectButton onClick={handleClick}>{children}</ProjectButton>;
    case 'transparent':
      return (
        <TransparentButton onClick={onClick}>{children}</TransparentButton>
      );
    case 'header':
      return <HeaderButton onClick={handleClick}>{children}</HeaderButton>;
    case 'footer':
      return (
        <FooterButton onKeyUp={onClick} onClick={handleClick}>
          {children}
        </FooterButton>
      );
    default:
      return renderButton();
  }
};
