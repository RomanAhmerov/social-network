import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

// Type (TS)
type PropsType = {
    id: number
    name: string
}

// FC
const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

export  default  DialogItem;