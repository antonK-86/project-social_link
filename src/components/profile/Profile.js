import React from "react";
import cls from "./Profile.module.css";

const Profile = props => {
  return <div className={cls.profile}>{props.props}</div>;
};

export default Profile;
