import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/messages/" + props.link_id}
                     className={props => props.isActive ? style.active : null}>{props.name}</NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return (
        <div className="message">{props.message}</div>
    );
}
const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Sonya"},
        {id: 4, name: "Max"},
        {id: 5, name: "Kate"}
    ];

    const messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "My name is Alex"},
        {id: 4, message: "What is your name?"},
        {id: 5, message: "My name is Kate)"}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    dialogsData.map((dialogData) =>
                        <DialogItem link_id={dialogData.id.toString()}
                                    name={dialogData.name.toString()}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    messagesData.map((message) =>
                        <MessageItem message={message.message}/>
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;