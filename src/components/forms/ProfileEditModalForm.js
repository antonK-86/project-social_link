import React from "react";
import cls from "./ProfileEditForm.module.css";
import { Field, reduxForm } from "redux-form";
import userIcon from "../../img/user_icon.png";
import closeIcon from "../../img/cancel.svg";
import { InputFormProfile, TextareaForm } from "./Forms";

let ProfileEditModalForm = (props) => {
  const photoSelected = (e) => {
    props.savePhotoThunk(e.target.files[0], props.authId);
  };

  let strErr = "";

  if (props.error) {
    let err = props.error;
    let target = ">";
    let pos = -1;
    let start;
    while ((pos = err.indexOf(target, pos + 1)) !== -1) {
      start = pos;
    }
    strErr = err.slice(start + 1, err.length - 1);
    strErr = strErr[0].toLowerCase() + strErr.slice(1);
  }

  return (
    <div className={cls.modal_edit__profile}>
      <form
        onSubmit={props.handleSubmit}
        className={cls.modal_edit__profile_form}
      >
        <div className={cls.close}>
          <img
            src={closeIcon}
            alt="close"
            width="20"
            height="20"
            onClick={() => {
              props.editProfileAction(false);
              props.errUpdateProfile(false);
            }}
          />
        </div>

        <div className={cls.modal_edit__item}>
          <div className={cls.edit_field}>
            <div className={cls.user_img + " " + cls.user_img__edit}>
              <label className={cls.label}>
                <input
                  type="file"
                  name="load"
                  onChange={photoSelected}
                  className={cls.input_file}
                />
                <img
                  src={props.profile.photos.small || userIcon}
                  alt=""
                  width="70"
                  height="70"
                />
              </label>
            </div>
            <div className={cls.file_upload}>
              <label className={cls.label}>
                <input
                  type="file"
                  name="load"
                  onChange={photoSelected}
                  className={cls.input_file}
                />
                <span className={cls.span}>Загрузить аватар</span>
              </label>
            </div>
          </div>
          <div className={cls.edit_field}>
            <div>Full name:</div>
            <Field
              name="fullName"
              component={InputFormProfile}
              type="text"
              placeholder="Enter full name"
            />
          </div>
          <div className={cls.edit_field}>
            <div>ID:{" " + props.profile.userId}</div>
          </div>
          <div className={cls.edit_field}>
            <div>About me:</div>
            <Field
              name="aboutMe"
              component={TextareaForm}
              type="text"
              placeholder="Enter info about youself"
            />
          </div>
          <div className={cls.edit_field}>
            <div>
              LookingForAJob:
              <span className={cls.checkbox}>
                <Field
                  name="lookingForAJob"
                  component="input"
                  type="checkbox"
                />
              </span>
            </div>
          </div>
          <div className={cls.edit_field}>
            <div>
              My skills:
              {" " + !props.profile.lookingForAJobDescription && ""}
            </div>
            <Field
              name="lookingForAJobDescription"
              component={TextareaForm}
              type="text"
              placeholder="Enter info Job description"
              validate={[]}
            />
          </div>
          <div className={cls.save_btn}>
            <input
              name="saveProfile"
              type="submit"
              value="Save profile"
              className={cls.btn + " " + cls.btn_secondary}
            />
            <input
              name="saveProfile"
              type="button"
              value="Cancel"
              onClick={() => {
                props.editProfileAction(false);
                props.errUpdateProfile(false);
              }}
              className={cls.btn + " " + cls.btn_secondary}
            />
          </div>
        </div>
        <div className={cls.modal_edit__item}>
          <div>Contacts:</div>
          <ul className={cls.contacts}>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div className={cls.edit_field} key={key}>
                  <li>
                    <span>{key + ": "}</span>
                    {props.error && key === strErr ? (
                      <span className={cls.error}>{props.error}</span>
                    ) : (
                      <span>{key.value}</span>
                    )}
                    <Field
                      name={"contacts." + key}
                      component={InputFormProfile}
                      type="text"
                      placeholder={"Enter" + " " + key}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

ProfileEditModalForm = reduxForm({
  form: "editProfile",
})(ProfileEditModalForm);

export default ProfileEditModalForm;
