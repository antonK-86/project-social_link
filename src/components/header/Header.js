import React from "react";
import cls from "./Header.module.css";

const Header = props => {
  return (
    <div className={cls.header}>
      <div className={cls.header_container}>{props.props}</div>
    </div>
  );
};

export default Header;
