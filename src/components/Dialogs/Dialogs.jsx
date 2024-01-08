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

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {
                    props.dialogs.map((dialogData) =>
                        <DialogItem link_id={dialogData.id.toString()}
                                    name={dialogData.name.toString()}/>)
                }
            </div>
            <div className={style.messages}>
                {
                    props.messages.map((message) =>
                        <MessageItem message={message.message}/>
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;