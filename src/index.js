import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  // Initialize Firebase
    apiKey: "AIzaSyASEwaWJW_S0pzIoKvpuPBAwW4SldaScL4",
    authDomain: "belajardatabase-36418.firebaseapp.com",
    databaseURL: "https://belajardatabase-36418.firebaseio.com",
    projectId: "belajardatabase-36418",
    storageBucket: "belajardatabase-36418.appspot.com",
    messagingSenderId: "940801931706"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
