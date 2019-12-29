import * as React from "react";
import * as ReactDOM from "react-dom";

import * as axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import LoginComponent from "./components/login.component";

class TestComponent extends React.Component
{

  onClick = () => {

    axios.default.post('/api/users/login', { a: 'b'})
      .then((response) => {
        console.log("--then", response);
      }).catch((error) => {
      console.log("--error", error);
    });

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log("--result", result);
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {

      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render = () => {
    return <div>
      <LoginComponent />
      <a href="#" onClick={() => this.onClick()} >hola</a>
    </div>

  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById("app")
);