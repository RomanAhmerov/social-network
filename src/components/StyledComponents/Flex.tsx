import React from 'react';
import styled from "styled-components";

// Type (TS)
type PropsType = StyledFlexType

const Flex: React.FC<PropsType> = (props) => {
    return <StyledFlex {...props} />
};

// Style
type StyledFlexType = {
    direction?: string
    justify?: string
    align?: string
    margin?: string
    padding?: string
    height?: string
    maxWidth?: string
    width?: string
    borderRadius?: string
    background?: string
    boxShadow?: string

}

const StyledFlex = styled.div<StyledFlexType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
  
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.background};
  box-shadow: ${props => props.boxShadow};
  
`

export default Flex;