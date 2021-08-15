import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ContactsType, ProfileType} from '../../../types/types';
import Button from "../../StyledComponents/Button";
import styled from "styled-components";
import Flex from "../../StyledComponents/Flex";
import Li from "../../StyledComponents/Li";

// Type (TS)
type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    isAuth?: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => any
    backgroundInput?: string
}

// FC
const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, backgroundInput}) => {
    // Hook useState
    // local state (editMode)
    let [editMode, setEditMode] = useState(false);

    let [editAva, setEditAva] = useState(false);


    function onChangeAva() {
        if (!editAva) {
            setEditAva(true)
        } else {
            setEditAva(false)
        }
    }


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false);
            setEditMode(false);
        });
    };

    return (
        <div>
            <div>

                {/* Аватарка пользователя */}
                <div>
                    <StyledAvaWrapper>
                        <img onClick={() => onChangeAva()} src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    </StyledAvaWrapper>

                    {isOwner && editAva && <StyledInputAvaWrapper><input type="file" onChange={onMainPhotoSelect}/></StyledInputAvaWrapper>}
                </div>

                <StyledProfileName>{profile.fullName}</StyledProfileName>

                {/* Статус пользователя */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} backgroundInput={backgroundInput} />

                {/* Информация о пользователе */}
                <StyledProfileInfoTitle>User information</StyledProfileInfoTitle>
                {editMode ?
                    <ProfileDataForm onSubmit={onSubmit as any} initialValues={profile} profile={profile} /> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>
    );
};

// Type (TS)
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void

    // Style
    background?: string
}

// FC
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <StyledInfoWrapper>
            <ul>
                <Li>
                    <b>Full name:</b> {profile.fullName}
                </Li>

                <Li margin='5px 0'>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
                </Li>

                {profile.lookingForAJob &&
                <Li>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </Li>}

                <Li margin='5px 0'>
                    <b>About me:</b> {profile.aboutMe}
                </Li>

                <Li>
                    <b>Contacts:</b>

                    <ul>
                        {Object
                            .keys(profile.contacts)
                            .map((key) => {
                                return (
                                    <ContactItem key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                                )
                            })}
                    </ul>

                </Li>
            </ul>

            {isOwner && <Button padding='5px 40px' margin='10px 0 0 0' onClick={goToEditMode}>Edit</Button>}
        </StyledInfoWrapper>

    )
}


// Type (TS)
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}


// FC
const ContactItem: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <Li margin='0 0 3px 20px'>
            {contactValue && <Contact contactTitle={contactTitle} contactValue={contactValue} />}
        </Li>
    )
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo;

// Style
// Ava
const StyledAvaWrapper = styled.div`
      margin-top: 20px;
      max-width: 200px;
      border-radius: 20px;
  
    &:hover {
      box-shadow: 0 0 15px 1px #3672f4;
    }
`


const StyledInputAvaWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

// Info
const StyledProfileInfoTitle = styled.h4`
  margin-top: 40px;
  max-width: 200px;
  
  font-size: 20px;
  box-shadow: 0 1px 0 0 #3672f4;
`

const StyledInfoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledProfileName = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 200px;
  
  font-size: 20px;
  box-shadow: 0 2px 0 0 #f44336;
`

