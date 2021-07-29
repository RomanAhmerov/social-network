import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
        // Hook useState
        // local state 1 (editMode)
        let [editMode, setEditMode]  = useState(false);

        const activateMode = () => {
                setEditMode(true); // Изменение режима редактирования в local state
        }

        const deactivateEditMode = () => {
                setEditMode(false); // // Изменение режима редактирования в local state
                props.updateStatus(status); // Изменение status в state
        }

        // local state 2 (status)
        let [status, setStatus]  = useState(props.status);

        const onStatusChange = (e) => {
                setStatus(e.currentTarget.value) //Изменение status в local state
        }

        // Hook useEffect (выполняемая функция, [данные от которых зависит выполнение функции])
        // Синхронизация локального state актуальными данными
        useEffect( () => {
                setStatus(props.status);
        }, [props.status]);

        return (
            <div>
                {/* Режим редактирования ВЫКЛ - false */}       
                { !editMode &&
                    <div>
                        <span onDoubleClick={activateMode}>{props.status || '--------'}</span>
                    </div>
                }

                {/* Режим редактирования ВКЛ - true */}
                {editMode &&
                    <div>
                        <input onBlur={deactivateEditMode}
                               onChange={onStatusChange} value={status}
                               autoFocus={true}  />
                    </div>
                }
            </div>
        );
};

export default ProfileStatusWithHooks;