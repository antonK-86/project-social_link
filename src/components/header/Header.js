import React from "react";
import cls from "./Header.module.css";
import userIcon from "./user_icon.png";

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
  return (
    <div className={cls.user_login}>
      <div className={cls.user_img}>
        <img src={userIcon} alt="user" width="70" height="70" />
      </div>
      <div className={cls.user_name}>{props.login}</div>
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
