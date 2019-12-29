/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as axios from "axios";
import IUser from "../../../../src/models/user.model";

interface IStateType
{
  loading: boolean;
  users: IUser[];
}

export default class UsersComponent extends React.Component<{}, IStateType> {

  state = {
    loading: false,
    users: []
  }

  componentDidMount = () => {

    this.setState({ loading: true });
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
    const { loading, users } = this.state;
    return (
      <div>
      { loading ?
        <p>Cargando</p>
          :
        users.map((user: IUser) => {
          return (
            <div key={`user-${user.login.uuid}`}>
              <p>email: {user.email}</p>
              <p><img src={user.picture.medium} /></p>
            </div>
          )
        })
      }
      </div>
    );
  }
}
