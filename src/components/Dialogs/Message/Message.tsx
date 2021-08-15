import React from "react";
import s from "./../Dialogs.module.css";
import styled from "styled-components";

// Type (TS)
type PropsType = {
  message: string
}

// FC
const Message: React.FC<PropsType> = (props) => {
  return (
      <StyledMessageWrapper>{props.message}</StyledMessageWrapper>
  );
};

export  default  Message;


// Style
const StyledMessageWrapper = styled.div`
  margin-bottom: 15px;
`