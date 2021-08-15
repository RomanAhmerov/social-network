import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageReduxForm from "./Message/AddMessageForm";
import {InitialStateType} from "../../redux/dialogsReducer";
import {FormAction} from "redux-form";
import TitleSection from "../StyledComponents/TitleSection";
import Section from "../StyledComponents/Section";
import Container from "../StyledComponents/Container";
import Flex from "../StyledComponents/Flex";
import styled from "styled-components";

// Type (TS)
type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
    reset: (form: string) => FormAction

    // Style
    background: string
}

// FC
const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    // Функция для onSubmit (redux-form)
    let addNewMessage = (values: {newMessageBody: string}) => {
        props.sendMessage(values.newMessageBody);
        props.reset('dialogAddMessageForm')
    };


    return (
        <Section background={props.background} height='100%'>
            <Container padding='10px 30px' height='100%'>
                <TitleSection title='Messages'/>

                <Flex margin='40px 0 0 0'>
                    <StyledDialogsWrapper>
                        {dialogsElements}
                    </StyledDialogsWrapper>

                    <Container margin='0 0 0 20px' padding='0 0 0 20px'>
                        <div>{messagesElements}</div>

                        <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </Container>
                </Flex>
            </Container>
        </Section>
    );
};

export default Dialogs;

// Style
const StyledDialogsWrapper = styled.div`
    min-width: 200px;
`

// Style
const StyledMessagesWrapper = styled.div`
  padding-left: 20px;


`