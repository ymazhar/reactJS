import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import MoviesService from "./services/movie-service";
import MoviesServiceContext from "./components/movies-service-context";
import ErrorBoundary from "./components/error-boundary";
import store from "./store";
const moviesService = new MoviesService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <MoviesServiceContext.Provider value={moviesService}>
        <Router>
          <App />
        </Router>
      </MoviesServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
