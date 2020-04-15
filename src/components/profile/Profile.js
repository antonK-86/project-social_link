import React from "react";
import cls from "./Profile.module.css";
import Preloader from "../preloader/Preloader";
import userIcon from "../../img/user_icon.png";
import MyStatus from "./MyStatus";
import Messages from "./messages/Messages";

const Profile = (props) => {
  //debugger;
  //if (!props.profile && !props.isAuth) return <Redirect to="/sign" />;
  if (!props.profile) return <Preloader />;

  return (
    <div className={cls.profile}>
      <div className={cls.profile_item}>
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
        <br />
        <hr />
      </div>
      <div className={cls.profile_item}>
        <hr />
        <br />
        <Messages />
      </div>
    </div>
  );
};

export default Profile;
