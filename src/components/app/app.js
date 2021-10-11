import {Route, Switch} from "react-router-dom";
import "normalize-scss/sass/normalize/_import-now.scss";
import "./app.scss";
import {HomePage, ErrorPage, FilmPage, SearchPage} from '../../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/film/:id" exact component={FilmPage} />
            <Route path={`/search/`} component={SearchPage} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    );
}

export default App;
