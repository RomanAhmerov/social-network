import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"; // Контейнерная компонента
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    // Hook useState
    // local state (editMode)
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
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
                    <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} /> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                {/* Статус пользователя */}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
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
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return (
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                )
            })}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo;