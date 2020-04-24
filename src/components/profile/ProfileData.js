import React from "react";
import cls from "./Profile.module.css";
import userIcon from "../../img/user_icon.png";
import MyStatus from "./MyStatus";

const ProfileData = (props) => {
  return (
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
      <div>
        ID:
        <span style={{ color: "cornsilk" }}>{" " + props.profile.userId}</span>
      </div>
      <MyStatus
        status={props.status}
        userId={props.profile.userId}
        authId={props.authId}
        updateStatus={props.updateStatus}
        setProfileStatusThunk={props.setProfileStatusThunk}
      />
      <div>
        About me:&nbsp;
        <span style={{ color: "cornsilk" }}>
          {props.profile.aboutMe || " not"}
        </span>
      </div>
      <div>
        LookingForAJob:
        <span style={{ color: "cornsilk" }}>
          {props.profile.lookingForAJob ? " YES" : " NO"}
        </span>
      </div>
      <div>
        My professional skills:&nbsp;
        <span style={{ color: "cornsilk" }}>
          {props.profile.lookingForAJobDescription || ""}
        </span>
      </div>
      <div>Contacts:</div>
      <ul className={cls.contacts}>
        {Object.entries(props.profile.contacts).map((item) => (
          <li key={item}>
            <span>{item[0] + ": "}</span>
            <a href={item[1]} target="blanc">
              {item[1]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileData;
