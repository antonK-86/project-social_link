import React from "react";
import cls from "./Profile.module.css";
import Preloader from "../preloader/Preloader";
import userIcon from "../../img/user_icon.png";
import MyStatus from "./MyStatus";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  //debugger;
  //if (!props.isAuth) return <Redirect to="/sign" />;
  if (!props.profile) return <Preloader />;
  return (
    <div className={cls.profile}>
      <div className={cls.user_img}>
        <img
          src={props.profile.photos.small || userIcon}
          alt=""
          width="70"
          height="70"
        />
      </div>
      <div>{props.profile.fullName}</div>
      <div>ID:{" " + props.profile.userId}</div>
      <div>About me:{" " + !props.profile.aboutMe && ""}</div>
      <div>
        <MyStatus status={props.status} />
      </div>
    </div>
  );
};

export default Profile;
