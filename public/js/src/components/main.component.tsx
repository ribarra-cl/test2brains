/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginComponent from "./login.component";
import UsersComponent from "./users.component";
import {get} from "../utils/requests";
import {connect} from "react-redux";
import {IProfileState} from "../reducers/profile.reducer";
import {ILoginState, loginClearAction} from "../actions/login.action";
import {humanizeName} from "../../../../src/models/user.model";
import * as PropTypes from 'prop-types';
import {Dispatch} from "redux";

type IPropsType = {
  login: ILoginState;
  profile: IProfileState;
}

type Props = IPropsType & DispatchProps;

class MainComponent extends React.Component<Props, {}> {

  static defaultProps = {
    login: {token: ''},
    profile: {
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
      }
    }
  }

  unsubscribe: firebase.Unsubscribe;

  componentDidMount = () => {

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

  onLogout = () => {
    firebase.auth().signOut();

    // should be based only on firebase?
    this.props.dispatch(loginClearAction());

  }


  render = () => {

    const {login, profile} = this.props;

    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li>
                <span>
                  Hola&nbsp;
                  {login.token ?
                    humanizeName(profile.user) :
                    ''
                  }
                </span>
              </li>
            </ul>
            {login.token ?
              <ul className="navbar-nav ml-auto">
                <li><a href="#" onClick={this.onLogout}>Cerrar sesión</a></li>
              </ul> : null
            }
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={LoginComponent}/>
            <Route path="/users/" component={UsersComponent}/>
          </Switch>
        </div>
      </Router>

    )

  }
}

type DispatchProps = {
  dispatch: Dispatch
}

const
  mapDispatchToProps = (dispatch: Dispatch) :DispatchProps=> {
    return {
      dispatch
    }
  }

const
  mapStateToProps = (state: { login: ILoginState, profile: IProfileState }) => {
    return {
      login: state.login,
      profile: state.profile
    }
  }

export default connect<{}, DispatchProps, IPropsType>(mapStateToProps, mapDispatchToProps)(MainComponent);
