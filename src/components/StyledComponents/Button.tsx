import React from 'react';
import styled, {css} from "styled-components";

// Type (TS)
type PropsType = {
    onClick?: () => void
    disabled?: boolean
} & StyledButtonType

const Button: React.FC<PropsType> = (props) => {
    return <StyledButton onClick={props.onClick} {...props} />
};

// Style
type StyledButtonType = {
    margin?: string
    padding?: string
    disabled?: boolean
}

const StyledButton = styled.button<StyledButtonType>`
  margin: ${props => props.margin};
  padding: ${props => props.padding || '10px 38px'};
  border-radius: 30px;
  border-width: 0;

  background-color: rgba(54, 114, 244, 0.6);
  outline: none;
  
  &:hover {
    box-shadow: 0 0 10px 1px #3672f4;
    background-color: rgba(54, 114, 244, 1);
  }
  
  ${props => props.disabled && css`
    &:hover {
      background-color: rgba(54, 114, 244, 0.3);
      box-shadow: none;
    }

    background-color: rgba(54, 114, 244, 0.3);
  `}
`

export default Button;