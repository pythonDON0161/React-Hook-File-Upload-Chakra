import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
//import UploadPage from "./UploadPage";

<Router>
  <Route component={App} />
</Router>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
