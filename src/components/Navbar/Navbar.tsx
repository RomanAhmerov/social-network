import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logout} from "../../redux/authReducer";
import styled, {css} from "styled-components";
import logo from "../../assets/images/logo.png";
import Flex from "../StyledComponents/Flex";
import NavItemProfile from "../StyledComponents/StyledINavItem/NavItemProfile";
import NavItemUsers from "../StyledComponents/StyledINavItem/NavItemUsers";
import NavItemMessages from "../StyledComponents/StyledINavItem/NavItemMessages";
import NavItemNews from "../StyledComponents/StyledINavItem/NavItemNews";
import NavItemMusic from "../StyledComponents/StyledINavItem/NavItemMusic";
import NavItemSettings from "../StyledComponents/StyledINavItem/NavItemSettings";
import Container from "../StyledComponents/Container";
import Li from "../StyledComponents/Li";
import Exit from "../StyledComponents/Exit";
import Entrance from "../StyledComponents/Entrance";
import Button from "../StyledComponents/Button";
import ChangeThemeButton from "../StyledComponents/ChangeThemeButton";
import {actions} from "../../redux/appReducer";

const Navbar: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    // Hook
    // Type (TS)
    type InitialStateType = { [key: string]: boolean }

    let profileActive = false;

    if (props.isAuth) {
        profileActive = true
    }

    let [isActiveSectionsObj, setSectionToggle] = useState<InitialStateType>({'profile': profileActive, 'messages': false, 'users': false, 'login': false});


    function onToggleSection(initialState: InitialStateType, sectionName: string): void {
         if (!initialState[sectionName]) {
             const arrayNames = Object.keys(initialState);

             let newState: InitialStateType = {};

             arrayNames.forEach((el) => {newState[el] = false});

             newState[sectionName] = true;

             setSectionToggle(newState);
         };
    };

    function toggleTheme(theme: string): void {

        if (theme == 'night') {
            props.changeTheme('day');
        } else {
            props.changeTheme('night');
        }
    }

    return (
        <StyledNav background={props.background}>
            <Flex direction='column' position='relative'>
                <StyledNavContainer>
                    <Flex>
                        <StyledLogoLink href='#/profile' color={props.color} onClick={() => onToggleSection(isActiveSectionsObj, 'profile')}><StyledSpanName>Samurai</StyledSpanName></StyledLogoLink>

                        {/*<div>Burger</div>*/}
                    </Flex>

                    <StyledUl>
                        <Li margin='10px 0' borderRadius='15px' backgroundActive={props.backgroundActive}
                            active={isActiveSectionsObj.profile} isNavItem={true}>
                            <NavLink to="/profile" onClick={() => onToggleSection(isActiveSectionsObj, 'profile')}>
                                <NavItemProfile fill={props.color}/>
                            </NavLink>
                        </Li>

                        <Li margin='10px 0' borderRadius='15px' backgroundActive={props.backgroundActive}
                            active={isActiveSectionsObj.messages} isNavItem={true}>
                            <NavLink to="/dialogs" onClick={() => onToggleSection(isActiveSectionsObj, 'messages')}>
                                <NavItemMessages fill={props.color}/>
                            </NavLink>
                        </Li>

                        <Li margin='10px 0' borderRadius='15px' backgroundActive={props.backgroundActive}
                            active={isActiveSectionsObj.users} isNavItem={true}>
                            <NavLink to="/users" onClick={() => onToggleSection(isActiveSectionsObj, 'users')}>
                                <NavItemUsers fill={props.color}/>
                            </NavLink>
                        </Li>

                        <Li margin='10px 0' borderRadius='15px' disabled backgroundActive={props.backgroundActive} isNavItem={true}>
                            <a>
                                <NavItemNews fill={props.colorDisabled} />
                            </a>
                        </Li>

                        <Li margin='10px 0' borderRadius='15px' disabled backgroundActive={props.backgroundActive} isNavItem={true}>
                            <a>
                                <NavItemMusic fill={props.colorDisabled} />
                            </a>
                        </Li>

                        <Li margin='10px 0' borderRadius='15px' disabled backgroundActive={props.backgroundActive} isNavItem={true}>
                            <a>
                                <NavItemSettings fill={props.colorDisabled} />
                            </a>
                        </Li>


                        <Li margin='30px 0' borderRadius='15px'>
                            <Flex>
                                <ChangeThemeButton onClick={() => {toggleTheme(props.currentTheme)}} margin='0 0 0 0'>{props.currentTheme == 'night' ? '🌞' : '🌜'}</ChangeThemeButton>
                            </Flex>

                        </Li>
                    </StyledUl>
                </StyledNavContainer>



                <StyledLogProf backgroundSecondary={props.backgroundSecondary}>
                    <Container padding='0 20px' height='100%'>
                        <Flex align='center' justify='center' height='100%'>
                            {props.isAuth
                                ? <Flex justify='center' align='center' width='100%'><div> <StyledSpanName>{props.login}</StyledSpanName> </div> <StyledLogoutButton background={props.background} onClick={props.logout}><Exit fill={props.color}/></StyledLogoutButton></Flex>
                                : <NavLink to={'/login'}><StyledLoginButton background={props.background}> <Entrance fill={props.color}/> </StyledLoginButton></NavLink>}
                        </Flex>
                    </Container>
                </StyledLogProf>
            </Flex>
        </StyledNav>
    );
};


// Type (TS)
// Общий тип
export type MapPropsType = {
    isAuth: boolean
    login: string | null

    // Style
    backgroundActive?: string,
    backgroundDisabled?: string,
    colorDisabled?: string
    currentTheme: string
} & StyledLogoType & StyledNavType & StyledLogProfType

export type DispatchPropsType = {
    logout: () => void
    changeTheme: (whatTheme: string) => void
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

    // Styled
    color: state.app.theme.global.color,
    background: state.app.theme.sidebar.background,
    backgroundSecondary: state.app.theme.sidebar.backgroundSecondary,
    backgroundActive: state.app.theme.button.backgroundActive,
    backgroundDisabled: state.app.theme.button.backgroundDisabled,
    colorDisabled: state.app.theme.button.colorDisabled,

    currentTheme: state.app.theme.currentTheme as string
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout, changeTheme: actions.changeTheme})(Navbar)


// Style
// Nav
type StyledNavType = {
    background?: string
}

const StyledNav = styled.nav<StyledNavType>`
  min-height: 100vh;
  width: 340px;

  background-color: ${props => props.background};

  @media (max-width: 800px) {
    width: 130px;
    
  };
`

// LogoLink
type StyledLogoType = {
    color?: string
}

const StyledLogoLink = styled.a<StyledLogoType>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-left: 65px;
  
  min-width: 40px;
  min-height: 40px;

  color: ${props => props.color};
  font-family: "Comic Sans MS", cursive, sans-serif;
  
  & span {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 13px;
    text-decoration: none;
  }
  
  background: url(${logo}) left center no-repeat;
  background-size: contain;

  cursor: pointer;

  @media (max-width: 800px) {
    margin-left: 20px;
    padding-left: 0;
  };
`

// LogProf
type StyledLogProfType = {
    backgroundSecondary?: string
}

const StyledLogProf = styled.div<StyledLogProfType>`
  position: fixed;
  bottom: 0;
  
  height: 70px;
  width: 340px;
  
  background-color: ${props => props.backgroundSecondary};

  @media (max-width: 800px) {
    width: 130px;
  };
`

// Login (Button)
type StyledLoginButtonType = {
    background?: string
}
const StyledLoginButton = styled.button<StyledLoginButtonType>`
    display: block;
    padding: 10px 50px;
    border: none;
    outline: none;
    border-radius: 15px;
    box-shadow: 0 0 0 2px ${props => props.background};
  
    background-color: transparent;
    cursor: pointer;
  
    &:hover {
      background-color: ${props => props.background};
    };

    @media (max-width: 800px) {
      padding: 10px 12px;
    };
`

// Logout (Button)
type StyledLogoutButtonType = {
    background?: string
}
const StyledLogoutButton = styled.button<StyledLogoutButtonType>`
    display: block;
    margin-left: 15px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 15px;
  
    background-color: transparent;
    cursor: pointer;
  
    &:hover {
      background-color: ${props => props.background};
    };

    @media (max-width: 800px) {
      margin-left: 0;
    };
`

const StyledSpanName = styled.span`
  @media (max-width: 800px) {
    display: none;
  };
`

// Nav Container
const StyledNavContainer = styled.div`
  padding: 20px;
  width: 340px;

  @media (max-width: 800px) {
    width: 125px;
  }
`


// Ul
const StyledUl = styled.ul`
  @media (max-width: 800px) {
    margin-right: 0;
    width: 91px;
  }
`
