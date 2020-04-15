import React from "react";
import cls from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignOut from "../sign/SignOut";

const Navbar = (props) => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.navbar_item + " " + cls.navbar_item__list}>
        <NavLink to="/users" className={cls.link} activeClassName={cls.active}>
          Users
        </NavLink>
        <NavLink
          to="/profile"
          className={cls.link}
          activeClassName={cls.active}
        >
          Profile
        </NavLink>
        <NavLink to="/test" className={cls.link} activeClassName={cls.active}>
          Test
        </NavLink>
        <NavLink
          to="/redirect"
          className={cls.link}
          activeClassName={cls.active}
        >
          Redirect
        </NavLink>
      </div>
      <div className={cls.navbar_item}>
        {props.isAuth ? (
          <SignOut />
        ) : (
          <NavLink
            to="/sign"
            className={`${cls.link}`}
            activeClassName={cls.active}
          >
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

//export default compose(withRouter, connect(mapStateToProps, null))(Navbar);
export default connect(mapStateToProps)(Navbar);
