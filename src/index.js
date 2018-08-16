import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCBrQBrjFn10qnYMlbyhmDQdFb-m-OJDPY',
  authDomain: 'ganymede-c2dce.firebaseapp.com',
  databaseURL: 'https://ganymede-c2dce.firebaseio.com',
  projectId: 'ganymede-c2dce',
  storageBucket: 'ganymede-c2dce.appspot.com',
  messagingSenderId: '99814253255'
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
