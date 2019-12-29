/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";


interface State {
  user: {[key: string]: string}
  username: string;
  password: string;
}

export default class LoginComponent extends React.Component<{}, State> {

  app : firebase.app.App;

  state = {
    user: {},
    username: 'whiteleopard798',
    password: 'justine',
    //username: '',
    //password: '',
  }

  componentDidMount = () => {

    // TODO: move to config
    const firebaseConfig = {
      apiKey: "AIzaSyAZ6x5IIxsrn2IhzkcjiXQss4o7ika8zwU",
      authDomain: "localhost:3000",
      databaseURL: "https://brains-78452.firebaseio.com",
      projectId: "brains-78452",
      storageBucket: "brains-78452.appspot.com",
      messagingSenderId: "570422194655",
      appId: "1:570422194655:web:58681ac1f4d23abafe546a",
      measurementId: "G-H8W77204FP"
    };
    this.app = firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if(user)
      {
        alert("Hola " + user.uid);
        console.log("--auth", user);
      }
    })

  }

  // detect changes on inputs
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    // TODO. find a better way
    const name = event.target.name;
    if (name == 'username')
      this.setState({username: event.target.value});
    if (name == 'password')
      this.setState({password: event.target.value});

  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    axios.default.post('/api/users/login', this.state, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        const { token } = response.data;
        firebase.auth().signInWithCustomToken(token).then((user) => {
          console.log("--user", user);
        }).catch((error) => {
          console.log("error");
        });
      }).catch((error) => {
      console.log("--error", error);
    });
    event.preventDefault();

  }

  render = () => {
    const { user } = this.state;
    return (
      <div>
      <form method="POST" onSubmit={this.onSubmit}>
        <input type="text" className="fadeIn second" name="username" placeholder="Nombre de usuario"
               value={this.state.username} onChange={this.onChange}/>
        <input type="text" className="fadeIn third" name="password" placeholder="Contraseña"
               value={this.state.password} onChange={this.onChange}/>
        <input type="submit" className="fadeIn fourth" value="Log In"/>
      </form>
      </div>
    )
  }
}
