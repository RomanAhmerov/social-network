import React from "react";
import s from "./../Dialogs.module.css";

// Type (TS)
type PropsType = {
  message: string
}

// FC
const Message: React.FC<PropsType> = (props) => {
  return (
      <div className={s.message}>{props.message}</div>
  );
};


export  default  Message;