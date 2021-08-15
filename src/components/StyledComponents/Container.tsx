import React from 'react';
import styled, {css} from "styled-components";


const Container: React.FC<PropsType> = (props) => {
    return <StyledContainer {...props} />
};

export default Container;

// Type (TS)
// Общий тип
type PropsType = {} & StyledContainerType

// Style
type StyledContainerType = {
    position?: string
    left?: string
    right?: string

    margin?: string
    padding?: string
    height?: string
    width?: string
    maxWidth?: string
}

const StyledContainer = styled.div<StyledContainerType>`
  position: ${props => props.position};
  left: ${props => props.left};
  right: ${props => props.right};

  flex-grow: 1;
  
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
`




