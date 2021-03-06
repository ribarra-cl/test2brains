/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {get, post} from "../utils/requests";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {loadProfileDataAction} from "../actions/profile.action";
import {ILoginState, loginSetupTokenAction} from "../actions/login.action";
import {IProfileState} from "../reducers/profile.reducer";
import * as PropTypes from 'prop-types';
import {Dispatch} from "redux";


interface IStateType {
  loading: boolean;
  error: string;
  username: string;
  password: string;
}

interface IPropsType {

  login: ILoginState,
  profile: IProfileState

  match: any;
  history: any;
  location: any;
  dispatch: Dispatch;
}

class LoginComponent extends React.Component<IPropsType, IStateType> {

  unsubscribe: firebase.Unsubscribe;

  state = {
    loading: false,
    error: '',
    username: '',
    password: '',
  }

  componentDidUpdate = (prevProps: Readonly<IPropsType>, prevState: Readonly<IStateType>, snapshot?: any): void => {
    const {login} = this.props;
    console.log("prev", prevProps.login.token);
    if (login.token) {
      console.log("--token", login.token);
      this.props.history.push('/users');
    }
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

    this.setState({error: '', loading: true});

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
        return get(`/api/users/${uid}`);
      })
      .then((response) => {
        this.props.dispatch(loginSetupTokenAction(response.data.id.value));
        this.props.dispatch(loadProfileDataAction(response.data));
        console.log("-- second response", response.data);
      })
      .catch((error: Error) => {
        // TODO: improve UI
        this.setState({
          loading: false,
          error: error.message
        });
      });
    event.preventDefault();

  }

  render = () => {

    const {error, loading} = this.state;


    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <form method="POST" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario</label>
                  <input type="text" name="username" className="form-control" id="username"
                         value={this.state.username} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" className={error ? 'form-control is-invalid' : 'form-control'}
                         id="password"
                         value={this.state.password} onChange={this.onChange}/>
                  {error ?
                    <div className="invalid-feedback">{error}</div>
                    : null}
                </div>
                {loading ?
                  <button type="submit" className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    &nbsp;Cargando...
                  </button> :
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const
  mapStateToProps = (state: { login: ILoginState, profile: IProfileState }) => {
    return {
      login: state.login,
      profile: state.profile
    }
  }

export default withRouter(connect<{}, {}, IPropsType>(mapStateToProps)(LoginComponent));