import MainHeader from "../shared/main-header";
import MainBody from "../shared/main-body";
import MainFooter from "../shared/main-footer";
import MainLogo from "../components/main-logo";
import {Link} from "react-router-dom";
import "./error-page.scss";

const ErrorPage = () => {

    return (
        <div className="site">
            <MainHeader>
                <MainLogo/>
            </MainHeader>
            <MainBody>
                <div className="error-page">
                    <div className="error-page__holder">
                        <h1>Page Not Found</h1>
                        <div>404</div>
                        <Link to="/" className={""}> Back to Home</Link>
                    </div>
                </div>
            </MainBody>
            <MainFooter>
                <div className="main-container">
                    <MainLogo/>
                </div>
            </MainFooter>
        </div>
    )
}

export default ErrorPage;