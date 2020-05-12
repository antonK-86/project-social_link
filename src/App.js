import React, { Suspense } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { initApp } from "./redux/app-reducer";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
//import RedirectTo from "./components/redirect/Redirect";
//import Test from "./components/test/Test";
//import Preloader from "./components/preloader/Preloader";
import SignContainer from "./components/sign/SignContainer";
import PreloaderApp from "./components/preloader/PreloaderApp";
import ErrPage from "./components/errorpage/ErrPage";
import DemoWorks from "./components/demoworks/DemoWorks";
import GameXO from "./components/game/GameXO";
import UsersSContainer from "./components/users/usersWithScroll/UsersSContainer";
import UsersContainer from "./components/users//UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

/*
const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/users/UsersContainer")
); 
*/
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
            {/* <Suspense fallback={/*<Preloader />
              <div>Loading...</div>}>
            */}
            <Switch>
              {/* Switch выбuраeт первый попавшийся маршрут для обработки*/}
              <Route exact path="/" render={() => <SignContainer />} />
              {/*exact указывает, что строка запроса должна в точности соответствовать шаблону маршрута*/}
              <Route path="/users" render={() => <UsersContainer />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/usersS" render={() => <UsersSContainer />} />
              {/* <Route path="/test" render={() => <Test />} />
              <Route path="/redirect" component={RedirectTo} /> */}
              <Route path="/demoworks" component={DemoWorks} />
              <Route path="/game" component={GameXO} />
              <Route path="/sign" render={() => <SignContainer />} />
              <Route component={ErrPage} />
            </Switch>{" "}
            {/* </Suspense> */}
          </main>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
