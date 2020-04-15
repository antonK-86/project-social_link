import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/users/UsersContainer";
import RedirectTo from "./components/redirect/Redirect";
import TestContainer from "./components/test/TestContainer";
import Test from "./components/test/Test";
import SignContainer from "./components/sign/SignContainer";
import { connect } from "react-redux";
import { initApp } from "./redux/app-reducer";
import { compose } from "redux";
import PreloaderApp from "./components/preloader/PreloaderApp";

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    if (!this.props.initialized) return <PreloaderApp />;
    return (
      <div className="App">
        <div className="App_Container">
          <HeaderContainer />
          <Navbar />
          <main className="App_Content">
            <Route path="/users" render={() => <UsersContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/test" render={() => <Test />} />
            <Route path="/redirect" component={RedirectTo} />
            <Route path="/sign" render={() => <SignContainer />} />
          </main>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initApp })(withRouter(App));
