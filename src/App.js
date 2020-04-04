import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/users/UsersContainer";
import RedirectTo from "./components/redirect/Redirect";
import TestContainer from "./components/test/TestContainer";
import Test from "./components/test/Test";
import SignContainer from "./components/sign/SignContainer";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div className="App_Container">
          <HeaderContainer />
          <Navbar />
          <main className="App_Content">
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/test" render={() => <Test />} />
            <Route path="/redirect" component={RedirectTo} />
            <Route path="/sign" render={() => <SignContainer />} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
