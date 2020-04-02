import React from "react";
import "./App.css";
import HeaderContainer from "./components/header/HeaderContainer";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div className="App_Container">
          <HeaderContainer />
        </div>
      </div>
    );
  }
}

export default App;
