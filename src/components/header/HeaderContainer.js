import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default compose(withRouter, connect(mapStateToProps))(HeaderContainer);
