import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import style from "./../../../common/FormsControls/FormControls.module.css";
import s from "./../ProfileInfo.module.css";
import {ProfileType} from "../../../../types/types";
import Button from "../../../StyledComponents/Button";
import Flex from "../../../StyledComponents/Flex";
import Container from "../../../StyledComponents/Container";
import Li from "../../../StyledComponents/Li";
import styled from "styled-components";

// Type (TS)
type PropsType = {
    profile: ProfileType
}
type ProfileFormValuesType = {}

// FC
const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormValuesType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <Container margin='20px 0'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {error && <div className={style.formSummaryError}>
                        {error}
                    </div> }

                    <Li>
                        <Flex align='center'>
                            <StyledItemTitleWrapper>Full name</StyledItemTitleWrapper> <Container> <Field placeholder="Full name" name="fullName" component={Input} /> </Container>
                        </Flex>
                    </Li>

                    <Li>
                        <Flex align='center'>
                            <StyledItemTitleWrapper>Looking for a job:</StyledItemTitleWrapper> <Container margin='0 0 0 10px'><Field name="lookingForAJob" component={Checkbox} type="checkbox" /></Container>
                        </Flex>
                    </Li>

                    <Li>
                        <Flex align='center'>
                            <StyledItemTitleWrapper>My professional skills</StyledItemTitleWrapper> <Container> <Field placeholder="My professional skills" name="lookingForAJobDescription" component={Textarea}  /> </Container>
                        </Flex>
                    </Li>

                    <Li>
                        <Flex align='center'>
                            <StyledItemTitleWrapper>About me</StyledItemTitleWrapper> <Container> <Field placeholder="About me" name="aboutMe" component={Textarea}  /> </Container>
                        </Flex>
                    </Li>

                    <Li>
                        <StyledItemSubTitleWrapper>Contacts</StyledItemSubTitleWrapper>
                        <ul>
                            <Container padding='0 0 0 15px'>
                                {Object.keys(profile.contacts).map(key => {
                                    return (
                                        <Li>
                                            <Flex align='center'>
                                                <StyledItemTitleWrapper>{key}</StyledItemTitleWrapper> <Container> <Field placeholder={key} name={"contacts." + key} component={Input}/> </Container>
                                            </Flex>
                                        </Li>
                                    )
                                })}
                            </Container>
                        </ul>

                    </Li>

                    <Flex margin='10px 0 35px 0 ' justify='flex-end'>
                        <Button>Save</Button>
                    </Flex>
                </ul>
            </form>
        </Container>
    )
}

// HOC (reduxForm)
const ProfileDataReduxForm = reduxForm<ProfileFormValuesType, PropsType>({form: 'edit-profile'}) (ProfileDataForm);

export default ProfileDataReduxForm;

// Style
const StyledItemTitleWrapper = styled.div`
  margin-right: 10px; 
  
  font-weight: 500;
`

const StyledItemSubTitleWrapper = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  max-width: 110px;
  box-shadow: 0 1px 0 0 #3672f4;
  
  font-size: 20px;
  font-weight: 500;
`