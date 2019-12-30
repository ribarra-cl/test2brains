/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {get, post} from "../utils/requests";
import IUser from "../../../../src/models/user.model";
import {Redirect} from 'react-router-dom';


interface State {
  loading: boolean;
  user: IUser;
  error: string;
  username: string;
  password: string;
}

export default class LoginComponent extends React.Component<{}, State> {

  unsubscribe: firebase.Unsubscribe;

  state = {
    loading: false,
    user: {
      name: {
        title: '',
        first: '',
        last: ''
      },
      login: {
        uuid: '',
        username: ''
      },
      picture: {
        large: '',
        medium: '',
        thumbnail: '',
      },
      email: ''
    },
    error: '',
    username: 'whiteleopard798',
    password: 'justine',
    //username: '',
    //password: '',
  }

  componentDidMount = () => {

    this.setState({
      loading: true
    });

    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("--user", user);
      if (user) {
        get(`/api/users/${user.uid}`)
          .then((response) => {
            console.log(response.data);
            this.setState({
              loading: false,
              user: response.data
            });
            this.unsubscribe();
          }).catch((error) => {
            console.log(error);
        });
      } else {
        this.setState({
          loading: false
        });
        console.log("--no user");
      }
    });

  }
/*
  componentWillUnmount = () => {
    this.unsubscribe();
  }
*/

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

    post(this.state)
      .then((response) => {
        const {error, token} = response.data;
        if (error)
          throw new Error('Usuario o contraseña incorrecta');

        return firebase.auth().signInWithCustomToken(token);
      })
      .then((credential) => {
        // TODO: validate credential
        const {uid} = credential.user!;
      })
      .catch((error) => {
        // TODO: improve UI
        alert(error);
      });
    event.preventDefault();

  }

  onLogout = () => {
    firebase.auth().signOut();
  }

  render = () => {
    const { loading, user } = this.state;

    if(loading)
    {
      return (
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated"
               role="progressbar"
               style={{width: "100%"}}>&nbsp;</div>
        </div>
      );
    }
    else if(user.email)
    {
      return <Redirect to='/users' />
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li><a href="#" onClick={this.onLogout}>Hola</a></li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li><a href="#" onClick={this.onLogout}>Cerrar sesión</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-auto">
              <form method="POST" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario</label>
                  <input type="text" name="username" className="form-control" id="username"
                         value={this.state.username} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" className="form-control" id="password"
                         value={this.state.password} onChange={this.onChange}/>
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}