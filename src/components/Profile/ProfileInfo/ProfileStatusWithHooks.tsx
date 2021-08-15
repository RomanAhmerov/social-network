import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";

// Type (TS)
type PropsType = {
        status: string
        updateStatus: (status: string) => void
        backgroundInput?: string
}

// FC
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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

        const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    <StyledStatusWrapper onClick={activateMode}>
                        <StyledProfileStatusTitle>Status</StyledProfileStatusTitle>
                        <div >{props.status || '--------'}</div>
                    </StyledStatusWrapper>
                }

                {/* Режим редактирования ВКЛ - true */}
                {editMode &&
                    <StyledProfileStatusWrapper>
                        <StyledInput onBlur={deactivateEditMode}
                               onChange={onStatusChange} value={status}
                               autoFocus={true} background={props.backgroundInput}  />
                    </StyledProfileStatusWrapper>
                }
            </div>
        );
};

export default ProfileStatusWithHooks;

// Style
// Input
type FormItemType = {
        onBlur?: () => void
        onChange?: (e: ChangeEvent<HTMLInputElement>) => void
        autoFocus?: boolean
        value?: string
}

type StyledFormItemTextType = {
        background?: string
        fullWidth?: boolean
} & FormItemType

const StyledInput = styled.input<StyledFormItemTextType>`
  padding: 10px 10px;
  border-radius: 15px;
  border-width: 0;
  width: 100%;
  outline: none;
  
  background-color: ${props => props.background};
  
  &:focus {
    box-shadow: 0 0 10px 2px #3672f4;
  }
  
  &::placeholder {
    //color: white;
  }
`

// Info
const StyledStatusWrapper = styled.div`
  margin-top: 20px;      
  margin-bottom: 20px;      
        
  cursor: pointer;
`

const StyledProfileStatusTitle = styled.h4`
  margin-top: 20px;
  margin-bottom: 5px;
  max-width: 200px;
  
  font-size: 20px;
  box-shadow: 0 2px 0 0 #3672f4;
`

const StyledProfileStatusWrapper = styled.div`
  margin-top: 40px;
  padding-bottom: 10px;

`