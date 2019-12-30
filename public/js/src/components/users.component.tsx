/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as axios from "axios";
import IUser from "../../../../src/models/user.model";
import {firebaseApp} from "../app";
import {Redirect} from "react-router-dom";

interface IStateType {
  loggedIn: boolean,
  loading: boolean;
  users: IUser[];
}

export default class UsersComponent extends React.Component<{}, IStateType> {

  state = {
    loggedIn: false,
    loading: false,
    users: []
  }

  componentDidMount = () => {

    const currentUser = firebaseApp.auth().currentUser;
    if (!currentUser) {
      this.setState({
        loggedIn: false
      });
      return;
    }

    this.setState({loading: true});
    axios.default.get('/api/users/', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      const users = response.data as IUser[];
      this.setState({
        users,
        loading: false,
      });
    }).catch((error) => {
      console.log("--error", error);
    });
  }

  render = () => {
    const {loggedIn, loading, users} = this.state;

    if (loading)
      return <p>Cargando</p>

    if (!loggedIn)
      return <Redirect to='/'/>

    return (
      <div>
        {
          users.map((user: IUser) => {
            return (
              <div key={`user-${user.login.uuid}`}>
                <p>email: {user.email}</p>
                <p><img src={user.picture.medium}/></p>
              </div>
            )
          })
        }
      </div>
    );
  }
}
