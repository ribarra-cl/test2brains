import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginComponent from "./components/login.component";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import UsersComponent from "./components/users.component";
import * as firebase from "firebase";
import firebaseConfig from "./config/firebaseConfig";

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LoginComponent} />
      <Route path="/users/" component={UsersComponent} />
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById("app")
);

