import React from "react";
import cls from "./Sign.module.css";

const Sign = props => {
  return <div className={cls.Sign}>{props.props}</div>;
};

export default Sign;
