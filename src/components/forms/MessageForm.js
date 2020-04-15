import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength } from "../../validate/Validators";
import { TextareaForm } from "./Forms";
import cls from "./Forms.module.css";

const maxLengthMes = maxLength(300);

let MessageForm = (props) => {
  let placeholder = "Enter message to -" + props.name + "-";
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="textarea"
        component={TextareaForm}
        placeholder={placeholder}
        validate={[maxLengthMes]}
      />
      <input
        className={cls.button}
        name="SendMessage"
        type="submit"
        value="Send message"
      />
    </form>
  );
};

MessageForm = reduxForm({
  form: "sendMessage",
})(MessageForm);

export default MessageForm;
