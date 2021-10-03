import {Route, Switch} from "react-router-dom";
import "normalize-scss/sass/normalize/_import-now.scss";
import "./app.scss";
import {HomePage} from '../../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
    );
}

export default App;
