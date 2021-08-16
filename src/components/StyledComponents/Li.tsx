import React from 'react';
import styled, {css} from "styled-components";


const Li: React.FC<PropsType> = (props) => {
    return <StyledLi {...props} />
};

export default Li;

// Type (TS)
// Общий тип
type PropsType = {} & StyledLiType

// Style
type StyledLiType = {
    active?: boolean,
    disabled?: boolean,

    margin?:  string
    padding?: string
    borderRadius?: string
    backgroundActive?: string,
    backgroundDisabled?: string
}

const StyledLi = styled.li<StyledLiType>`
  display: block;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  background-color: transparent;
  
  &:hover {
    background-color: ${props => props.backgroundActive};


    @media (max-width: 800px) {
      width: 91px;
      
      &:hover {
        width: 220px;
        
        & span {
          display: block;
          margin-left: 50px;
        }
      }
  }
    
  }
  
  ${props => props.active && css<StyledLiType>`
    box-shadow: -2px 0 0 0 #f44336;
    background-color: ${props => props.backgroundActive};

    @media (max-width: 800px) {
      width: 91px;
      
      
    }
  `};
`