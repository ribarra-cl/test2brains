import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginComponent from "./components/login.component";

class MainComponent extends React.Component
{

  render = () => {
    return (
      <div>
        <LoginComponent />
      </div>
    )
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById("app")
);