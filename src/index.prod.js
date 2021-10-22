import ReactDom from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
