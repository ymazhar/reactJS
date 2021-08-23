import PropTypes from "prop-types";
import "./main-footer.scss";

const MainFooter = ({ children }) => (
  <footer className={"main-footer"}>{children}</footer>
);

MainFooter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

MainFooter.defaultProps = {
    children: {}
}

export default MainFooter;
