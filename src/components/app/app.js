import {Route, Switch} from "react-router-dom";
import "normalize-scss/sass/normalize/_import-now.scss";
import "./app.scss";
import {HomePage, ErrorPage, FilmPage, SearchPage} from '../../pages';
import store from "../../store";
import {Provider} from "react-redux";
import ErrorBoundary from "../error-boundary";

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/film/:id" exact component={FilmPage}/>
                    <Route path={`/search/`} component={SearchPage}/>
                    <Route path="*" component={ErrorPage}/>
                </Switch>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
