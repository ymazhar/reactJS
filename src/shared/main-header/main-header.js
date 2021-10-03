import PropTypes from "prop-types";
import "./main-header.scss";

const MainHeader = ({ children }) => {
    return (
    <header className={"main-header"}>
      <div className={"main-container"}>
        <div className="main-header__holder">
            {children}
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

MainHeader.defaultProps = {
    children: {}
}

export default MainHeader;
