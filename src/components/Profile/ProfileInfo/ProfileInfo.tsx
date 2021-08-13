import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ContactsType, ProfileType} from '../../../types/types';

// Type (TS)
type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => any
}

// FC
const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    // Hook useState
    // local state (editMode)
    let [editMode, setEditMode] = useState(false);




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
        });
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                {/* Аватарка пользователя */}
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelect}/>}

                {/* Информация о пользователе */}
                {editMode ?
                    <ProfileDataForm onSubmit={onSubmit as any} initialValues={profile} profile={profile} /> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                {/* Статус пользователя */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

// Type (TS)
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

// FC
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}

            <div>
                <b>Full name:</b> {profile.fullName}
            </div>

            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>

            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}

            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>

            <div>
                <b>Contacts:</b> {Object
                .keys(profile.contacts)
                .map((key) => {
                return (
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                )
            })}
            </div>
        </div>
    )
}


// Type (TS)
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}


// FC
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo;