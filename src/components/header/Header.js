import React from "react";
import cls from "./Header.module.css";
import userIcon from "./user_icon.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cls.header}>
      <div className={cls.header_container}>
        <h1>Welcome to React App</h1>
      </div>
      {props.isAuth ? <UserIsAuth {...props} /> : <UserIsNotAuth />}
    </header>
  );
};
const UserIsAuth = (props) => {
  const navToMyProfile = () => {
    props.clearProfile();
    props.getProfileThunk(props.id);
    props.getProfileStatusThunk(props.id);
  };
  return (
    <div className={cls.user_login}>
      <div className={cls.user_img}>
        <img src={props.photo || userIcon} alt="user" width="70" height="70" />
      </div>
      <NavLink className={cls.user_name} onClick={navToMyProfile} to="/profile">
        {props.login}
      </NavLink>
    </div>
  );
};

const UserIsNotAuth = () => {
  return (
    <div className={cls.user_login}>
      <span className={cls.not_auth}>You are not auth</span>
    </div>
  );
};

export default Header;
