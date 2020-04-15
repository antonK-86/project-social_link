import React from "react";
import { connect } from "react-redux";
import { signOutThunkC } from "../../redux/auth-reducer";
import { clearProfile } from "../../redux/profile-reducer";
import { NavLink } from "react-router-dom";
import cls from "../../components/navbar/Navbar.module.css";

const SignOut = (props) => {
  //debugger;<div onClick={props.signOutThunkC}>Sign Out</div>;className={cls.user_names}
  let sOut = () => {
    props.clearProfile();
    props.signOutThunkC();
  };
  return (
    <NavLink
      className={cls.link}
      onClick={() => {
        sOut();
      }}
      to="/users"
    >
      Sign Out
    </NavLink>
  );
};
//props.signOutThunkC
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { signOutThunkC, clearProfile })(
  SignOut
);
