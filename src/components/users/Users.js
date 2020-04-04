import React from "react";
import cls from "./Users.module.css";

const Users = props => {
  return <div className={cls.Users}>{props.props}</div>;
};

export default Users;
