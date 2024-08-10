import { ReactNode } from "react";
import styled from "styled-components"

const StyledButton = styled.button`
  
`
interface AuxProps {
  children: ReactNode;
  variant: string;
}

export const Button = ({variant, children}: AuxProps ) => {
  return (
    <StyledButton variant={variant}>{children}</StyledButton>
  )
}
