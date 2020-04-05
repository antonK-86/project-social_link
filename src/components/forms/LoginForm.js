import React from "react";
import { Field, reduxForm } from "redux-form";
import cls from "./LoginForm.module.css";
import { required, minLength } from "../../validate/Validators";
import InputForm from "./Forms";

const minLength4 = minLength(4);

let LoginForm = (props) => {
  //debugger;
  return (
    <form onSubmit={props.handleSubmit} className={cls.form}>
      <div className={cls.form_item}>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component={InputForm}
          type="email"
          placeholder="Enter email"
          validate={[required]}
        />
      </div>
      <div className={cls.form_item}>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={InputForm}
          type="password"
          placeholder="Enter password"
          validate={[required, minLength4]}
        />
      </div>
      <div className={cls.form_item__checkbox}>
        <Field name="rememberMe" component="input" type="checkbox" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div className={cls.form_error}>{props.error}</div>
      <input name="Sign In" type="submit" value="Sign In" />
    </form>
  );
};

LoginForm = reduxForm({
  form: "signIn",
})(LoginForm);

export default LoginForm;
