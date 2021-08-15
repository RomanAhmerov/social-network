import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";
import Flex from "../../../StyledComponents/Flex";
import Container from "../../../StyledComponents/Container";
import styled from "styled-components";
import like from '../../../../assets/images/like.png'
import {PostType} from "../../../../types/types";

// Type (TS)
type PropsType = {
    message: string
    likesCount: number
    photo?: string
    backgroundPosts?: string
}


// FC
const Post: React.FC<PropsType> = (props) => {
    return (
        <StyledPostWrapper backgroundPosts={props.backgroundPosts}>
            <div className={s.item}>
                <Flex align='center'>
                    <div>
                        <img src={props.photo || userPhoto} />
                    </div>

                    <Flex direction='column' margin='0 0 0 15px'>
                        {props.message}

                        <StyledLikeWrapper>
                            <StyledLike />

                            <div>{props.likesCount}</div>
                        </StyledLikeWrapper>
                    </Flex>
                </Flex>

            </div>
        </StyledPostWrapper>
    );
};

export default Post;

// Style
type StyledPostWrapperType = {
    backgroundPosts?: string
}

const StyledPostWrapper = styled.div<StyledPostWrapperType>`
  margin-bottom: 30px;
  padding: 10px 20px;
  max-width: 900px;
  border-radius: 20px;
  box-shadow: 0 0 10px 1px rgba(54,114,244,0.6);
  background-color: ${props => props.backgroundPosts};
  
  word-wrap: anywhere;
`

const StyledLike = styled.div`
  margin-right: 6px;
  width: 20px;
  height: 20px;
  
  background-image: url(${like});
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledLikeWrapper = styled.div`
  display: flex;
  margin-top: 6px;
  padding: 2px 10px;
  max-width: 70px;
  border-radius: 20px;
  
  background-color: rgba(54,114,244,0.6);
`
