import React from 'react';
import styled, {css} from "styled-components";

// Type (TS)
type PropsType = {
    onClick?: () => void
    disabled?: boolean
} & StyledButtonType

const ChangeThemeButton: React.FC<PropsType> = (props) => {
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
  padding: ${props => props.padding || '10px 84px'};
  border-radius: 15px;
  border-width: 0;

  background-color: rgba(54, 114, 244, 1);
  box-shadow: 0 0 10px 1px #3672f4;
  outline: none;
  
  &:hover {
    box-shadow: 0 0 15px 1px #3672f4;
    //background-color: rgba(54, 114, 244, 1);
  }

  &:active {
    background-color: #f44336;
    box-shadow: 0 0 10px 1px #f44336;
  };
  
  &::before {
    content: 'Change theme '
  };

  @media (max-width: 800px) {
    padding: 10px 25px;
    font-size: 30px;
    
    &::before {
      content: ''
    };
  };
  
  
`

export default ChangeThemeButton;