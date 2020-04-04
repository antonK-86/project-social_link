import React from "react";
import Test from "./Test";

class TestContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Test props={"Test"} />;
  }
}

export default TestContainer;
