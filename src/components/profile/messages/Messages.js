import React from "react";
import cls from "./Messages.module.css";
import userIcon from "../../../img/user_icon.png";
import { NavLink } from "react-router-dom";
import MessageForm from "../../forms/MessageForm";
import { formatDate } from "../../../validate/formatDate";
import { connect } from "react-redux";
import { addMessage } from "../../../redux/profile-reducer";

const Messages = (props) => {
  let onHandleSubmit = (data) => {
    let d = new Date();
    if (!data.textarea) return;
    let objData = {
      avatar: null,
      mesId: props.messages.length + 1,
      userName: props.name,
      message: data.textarea,
      date: formatDate(d),
    };
    props.addMessage(objData);
    data.textarea = "";
  };
  return (
    <div className={cls.message_1}>
      <div className={cls.message_2}>
        {props.messages.map((m) => (
          <div className={cls.message_item} key={m.mesId}>
            <div className={cls.avatar_block}>
              <NavLink to={"/profile/" + m.mesId} className={cls.user_img}>
                <img src={m.avatar || userIcon} alt="" width="40" height="40" />
              </NavLink>
            </div>
            <div className={cls.user_block}>
              <div className={cls.user_name}>
                <span>{m.userName}</span>
                <span className={cls.date_message}>{m.date}</span>
              </div>
              <p className={cls.user_message}>{m.message}</p>
            </div>
          </div>
        ))}
      </div>
      {props.nameProfile !== props.name ? (
        <div className={cls.form_message}>
          <MessageForm onSubmit={onHandleSubmit} name={props.nameProfile} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  messages: state.profilePage.messages,
  name: state.auth.login,
  nameProfile: state.profilePage.profile.fullName,
});

export default connect(mapStateToProps, { addMessage })(Messages);
