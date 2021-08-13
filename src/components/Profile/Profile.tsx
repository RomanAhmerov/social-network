import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

// Type (TS)
type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

// FC
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />

            <MyPostsContainer />
        </div>
    );
};

export default Profile;