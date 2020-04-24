import React from "react";
import cls from "./Profile.module.css";
import Preloader from "../preloader/Preloader";
import Messages from "./messages/Messages";
import ProfileData from "./ProfileData";
import ProfileEditModalForm from "../forms/ProfileEditModalForm";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  //debugger;
  if (!props.match.params.userId && !props.isAuth)
    return <Redirect to="/sign" />;
  if (!props.profile) return <Preloader />;

  let onHandleSubmit = (data) => {
    props.updateProfileThunk(data);
  };

  const editModeCall = () => {
    props.editProfileAction(true);
  };

  if (props.isEditProfile) {
    return (
      <ProfileEditModalForm
        profile={props.profile}
        _err={props._err}
        onSubmit={onHandleSubmit}
        initialValues={props.profile}
        authId={props.authId}
        savePhotoThunk={props.savePhotoThunk}
        editProfileAction={props.editProfileAction}
        errUpdateProfile={props.errUpdateProfile}
      />
    );
  } else {
    return (
      <div className={cls.profile}>
        <ProfileData {...props} />
        <br />
        {props.authId === props.profile.userId ? (
          <div>
            <button
              type="button"
              className={cls.btn + " " + cls.btn_secondary}
              onClick={editModeCall}
            >
              Edit profile
            </button>
            <br />
          </div>
        ) : (
          <div></div>
        )}
        <hr />
        <div className={cls.profile_item}>
          <hr />
          <br />
          <Messages />
        </div>
      </div>
    );
  }
};

export default Profile;
