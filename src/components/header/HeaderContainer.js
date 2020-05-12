import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  clearProfile,
  getProfileThunk,
  getProfileStatusThunk,
} from "../../redux/profile-reducer";
import { Component } from "react";
import { getPhotoProfileThunkC } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    if (this.props.isAuth) {
      this.props.getPhotoProfileThunkC(this.props.id);
    }
  }

  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.getPhotoProfileThunkC(this.props.id);
    }
  }

  /*
  componentDidUpdate() {
    if (this.props.profile && this.props.profile.userId === this.props.id) {
      this.props.getPhotoAction(this.props.profile.photos.small);
    }
  }*/

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  photo: state.auth.photo,
  //profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  clearProfile,
  getProfileThunk,
  getPhotoProfileThunkC,
  getProfileStatusThunk,
})(HeaderContainer);
