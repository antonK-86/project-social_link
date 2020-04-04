import React from "react";
import cls from "./Test.module.css";

const Test = props => {
  return <div className={cls.Test}>{props.props}</div>;
};

export default Test;
