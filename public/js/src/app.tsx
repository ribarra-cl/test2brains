import * as React from "react";
import * as ReactDOM from "react-dom";

class TestComponent extends React.Component
{
  render = () => {
    return <div>Hello React</div>;
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById("app")
);