import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import TitleSection from "../StyledComponents/TitleSection";
import Container from "../StyledComponents/Container";
import Flex from "../StyledComponents/Flex";

// Type (TS)
type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    backgroundInput?: string
    isAuth?: boolean
}

// FC
const Profile: React.FC<PropsType> = (props) => {
    return (
        <Flex justify='center'>
            <Container padding='10px 30px' maxWidth='900px'>
                <TitleSection title={props.isOwner ? 'Profile' : 'User'}/>

                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus} isOwner={props.isOwner}
                             savePhoto={props.savePhoto}
                             saveProfile={props.saveProfile}
                             backgroundInput={props.backgroundInput}
                             isAuth={props.isAuth}
                />

                <MyPostsContainer />
            </Container>
        </Flex>

    );
};

export default Profile;