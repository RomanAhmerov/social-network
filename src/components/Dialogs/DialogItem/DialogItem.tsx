import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

// Type (TS)
type PropsType = {
    id: number
    name: string
}

// FC
const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <StyledDialogItem>{props.name}</StyledDialogItem>
        </NavLink>
    );
};

export default DialogItem;

// Style
const StyledDialogItem = styled.div`
  margin-bottom: 10px;
  box-shadow: 0 2px 0 0 #3672f4;
  
  font-size: 30px;
`