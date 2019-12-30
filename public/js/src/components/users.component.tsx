/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import IUser, {humanizeName} from "../../../../src/models/user.model";
import {withRouter} from "react-router-dom";
import {ILoginState} from "../actions/login.action";
import {IProfileState} from "../reducers/profile.reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {get} from "../utils/requests";

interface IStateType {
  loggedIn: boolean,
  loading: boolean;
  users: IUser[];
}

interface IPropsType
{

  login: ILoginState,
  profile: IProfileState

  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.object.isRequired
}

class UsersComponent extends React.Component<IPropsType, IStateType> {

  state = {
    loggedIn: false,
    loading: false,
    users: []
  }

  componentDidMount = () => {

    const { login } = this.props;
    if(!login.token)
    {
      // TODO: no session, should I check this on server? firebase does not allow
      const { history } = this.props;
      return history.push('/');
    }

    // TODO: improve UI with some loader
    // this.setState({loading: true});
    get('/api/users/')
      .then((response) => {

      const users = response.data as IUser[];
      this.setState({
        users,
        loading: false,
      });
    }).catch((error) => {
      console.log("--error", error);
    });
  }

  componentDidUpdate = (prevProps: Readonly<IPropsType>, prevState: Readonly<IStateType>, snapshot?: any): void => {
    // TODO: move to a top component
    const { login } = this.props;
    console.log("prev", prevProps.login.token);
    if(!login.token)
    {
      this.props.history.push('/');
    }
  }

  render = () => {
    const {loggedIn, loading, users} = this.state;

    return (
      <div className="container">
      <div className="row">
        {
          users.map((user: IUser) => {
            return (
              <div key={`user-${user.login.uuid}`} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                  <img src={user.picture.large} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{humanizeName(user)}</h5>
                    <p className="card-text">{user.email}</p>
                  </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    );
  }
}

const
  mapStateToProps = (state: { login: ILoginState, profile: IProfileState }) => {
    return {
      login: state.login,
      profile: state.profile
    }
  }

export default withRouter(connect<{}, {}, IPropsType>(mapStateToProps)(UsersComponent));
