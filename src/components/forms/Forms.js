import React from "react";
import cls from "./Forms.module.css";

const InputForm = ({ input, meta, ...props }) => {
  //rest оператор, деструктуризация
  //debugger;
  const showError = meta.touched && meta.error;
  return (
    <div className={cls.form + " " + (showError ? cls.error : "")}>
      <input {...input} {...props} />
      {showError && <span className={cls.textError}>{meta.error}</span>}
    </div>
  );
};

export default InputForm;
