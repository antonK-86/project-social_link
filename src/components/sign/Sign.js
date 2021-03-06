import React from "react";
import cls from "./Sign.module.css";
import LoginForm from "../forms/LoginForm";
import { Redirect } from "react-router-dom";

const Sign = (props) => {
  //debugger;
  let onHandleSubmit = (data) => {
    props.signInThunkC(
      data.email,
      data.password,
      data.rememberMe,
      data.captcha
    );
    props.getCaptchaAction(null);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={cls.Sign}>
      <div className={cls.name_page}>{props.props}</div>
      <LoginForm onSubmit={onHandleSubmit} captcha={props.captcha} />
    </div>
  );
};

export default Sign;
