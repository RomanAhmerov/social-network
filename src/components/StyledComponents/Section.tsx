import React from 'react';
import styled from "styled-components";


const Section: React.FC<PropsType> = (props) => {
    return <StyledSection {...props} />
};

export default Section;

// Type (TS)
// Общий тип
type PropsType = {} & StyledSectionType

// Style
type StyledSectionType = {
    height?: string
    background?: string
}

const StyledSection = styled.div<StyledSectionType>`
  height: ${props => props.height};
  background-color: ${props => props.background};
`