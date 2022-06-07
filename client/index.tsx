import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './reducers/store'
import App from './app';
import "./styles/styles.css";
var mountNode = document.getElementById("app");
ReactDOM.render(<Provider store={store}><App /></Provider>, mountNode);