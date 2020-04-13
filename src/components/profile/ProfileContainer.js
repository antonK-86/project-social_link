import React from "react";
import Profile from "./Profile";
import {
  getProfileThunk,
  getProfileStatusThunk,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authId;

    this.props.getProfileThunk(userId);
    this.props.getProfileStatusThunk(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProfileThunk,
    getProfileStatusThunk,
  })
)(ProfileContainer);
