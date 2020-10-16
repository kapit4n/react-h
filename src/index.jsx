import React from "react";
import "./style.css";

import Root from './Root';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

library.add(faUserTimes);
library.add(faUserPlus);
library.add(faPlus);
library.add(faBookOpen);
library.add(faClipboard);
library.add(faSave);
library.add(faEdit);
library.add(faTimes);


ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
