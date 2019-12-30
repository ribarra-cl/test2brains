import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import * as firebase from "firebase";
import reducers from './reducers/index.reducer';
import firebaseConfig from "./config/firebaseConfig";
import MainComponent from "./components/main.component";
import {createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainComponent />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);

