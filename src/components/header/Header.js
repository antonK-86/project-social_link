import React from "react";
import cls from "./Header.module.css";

const Header = props => {
  return (
    <header className={cls.header}>
      <div className={cls.header_container}>
        <h1>Welcome to React App</h1>
      </div>
      <div className={cls.user_login}>
        <div className={cls.user_img}>
          <img src="user_icon.png" alt="user" width="70" height="70" />
        </div>
        <div className={cls.user_name}>{props.props}</div>
      </div>
    </header>
  );
};

export default Header;
