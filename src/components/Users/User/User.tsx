import React from "react";
import styles from "./user.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/types";
import Button from "../../StyledComponents/Button";
import Flex from "../../StyledComponents/Flex";
import Container from "../../StyledComponents/Container";
import styled from "styled-components";
import like from "../../../assets/images/like.png";


// Type (TS)
type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    // Style
    backgroundUser?: string
}


// FC
const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow, backgroundUser}) => {
    return (

            <StyledUserWrapper>

                <Flex align='center' margin='20px 0 40px 0' background={backgroundUser} borderRadius='20px' boxShadow='0 0 10px 1px rgba(54,114,244,0.6)' padding='20px 40px' maxWidth='450px'>
                    <NavLink to={'/profile/' + user.id}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto} alt="userPhoto"/>
                        </div>
                    </NavLink>

                    <Container margin='0 0 0 30px'>
                        <Container margin='0 0 10px 0'>
                            <NavLink to={'/profile/' + user.id}>
                                <StyledName>{user.name}</StyledName>

                                <StyledStatus>{user.status}</StyledStatus>
                            </NavLink>
                        </Container>

                        {user.followed
                            ? <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}>Unfollow</Button>

                            : <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>Follow</Button>}
                    </Container>
                </Flex>
            </StyledUserWrapper>

    )
};

export default User;

// Style
const StyledName = styled.div`
  font-size: 18px;

  @media (max-width: 800px) {
    //width: 100px;
  }
`

const StyledStatus = styled.div`
  font-weight: 300;

  @media (max-width: 800px) {
    //width: 150px;
  }
`

const StyledUserWrapper = styled.div`
  @media (max-width: 800px) {
    & > div {
    padding: 5px 10px 3px 10px;
    }
  }    
`