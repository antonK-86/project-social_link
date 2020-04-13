import React from "react";
import cls from "./Header.module.css";
import userIcon from "./user_icon.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  //debugger;
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
  return (
    <div className={cls.user_login}>
      <div className={cls.user_img}>
        <img src={userIcon} alt="user" width="70" height="70" />
      </div>
      <div className={cls.user_name}>
        <NavLink to={"/profile/" + props.id}>{props.login}</NavLink>
      </div>
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
