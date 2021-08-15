import React from 'react';;
import styled from "styled-components";
import logo from "../../assets/images/logo.png";


// Type (TS)
export type MapPropsType = {
    color: string
    background: string
}

export type DispatchPropsType = {}

// FC
const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <StyledHeader background={props.background} color={props.color}>
            <StyledLogoLink color={props.color}  href='/'>Samurai</StyledLogoLink>


        </StyledHeader>
    );
};

export default Header;


// Style
// Header
type StyledHeaderType = {
    color: string
    background: string
}

const StyledHeader = styled.header<StyledHeaderType>`
  height: 62px;
  
  color: ${props => props.color};
  
  background-color: ${props => props.background};
`

// Logo
type StyledLogoType = {
    color: string
}

const StyledLogoLink = styled.a<StyledLogoType>`
  display: block;
  
  width: 40px;
  height: 40px;

  color: ${props => props.color};
  text-decoration: none;
  
  background: url(${logo}) center center no-repeat;
  background-size: contain;
`







