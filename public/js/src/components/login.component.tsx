/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import {render} from "react-dom";
import * as axios from "axios";

interface State
{
  username: string;
  password: string;
}

export default class LoginComponent extends React.Component<{}, State>
{

  state = {
    username: '',
    password: '',
  }

  // detect changes on inputs
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    // TODO. find a better way
    const name = event.target.name;
    if(name == 'username')
      this.setState({username: event.target.value});
    if(name == 'password')
      this.setState({password: event.target.value});

  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    axios.default.post('/api/users/login', this.state, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log("--then", response);
      }).catch((error) => {
      console.log("--error", error);
    });
    event.preventDefault();

  }

  render = () => {
    return (
      <form method="POST" onSubmit={this.onSubmit}>
        <input type="text" className="fadeIn second" name="username" placeholder="Nombre de usuario"
               value={this.state.username} onChange={this.onChange} />
        <input type="text" className="fadeIn third" name="password" placeholder="Contraseña"
               value={this.state.password} onChange={this.onChange} />
        <input type="submit" className="fadeIn fourth" value="Log In" />
      </form>
    )
  }
}
