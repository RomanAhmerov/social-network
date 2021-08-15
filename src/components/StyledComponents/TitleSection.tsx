import React from 'react';
import styled from "styled-components";

// Type (TS)
type PropsType = {
    title: string
}

const TitleSection: React.FC<PropsType> = (props) => {
    return <StyledTitle>{props.title}</StyledTitle>
};

export default TitleSection;

// Style
const StyledTitle = styled.h2`
  font-size: 40px;
`