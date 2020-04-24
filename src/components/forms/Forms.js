import React from "react";
import cls from "./Forms.module.css";

export const InputForm = ({ input, meta, ...props }) => {
  //rest оператор, деструктуризация
  //debugger;
  const showError = meta.touched && meta.error;
  return (
    <div className={cls.input + " " + (showError ? cls.error : "")}>
      <input {...input} {...props} />
      {showError && <span className={cls.textError}>{meta.error}</span>}
    </div>
  );
};

export const InputFormProfile = ({ input, meta, ...props }) => {
  //rest оператор, деструктуризация
  //debugger;
  const showError = meta.touched && meta.error;
  return (
    <div className={cls.input_profile + " " + (showError ? cls.error : "")}>
      <input {...input} {...props} />
      {showError && <span className={cls.textError}>{meta.error}</span>}
    </div>
  );
};

export const TextareaForm = ({ input, meta, ...props }) => {
  //rest оператор, деструктуризация
  //debugger;
  const showError = meta.error;
  return (
    <div className={cls.textarea + " " + (showError ? cls.error : "")}>
      <textarea {...input} {...props} maxLength="301" />
      {showError && (
        <span className={cls.textError + " " + cls.forTeaxtarea}>
          {meta.error}
        </span>
      )}
    </div>
  );
};
