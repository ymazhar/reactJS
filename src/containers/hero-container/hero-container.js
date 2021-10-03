import PropTypes from "prop-types";
import HeroImage from "../../components/hero-image";
import "./hero-container.scss";

const HeroContainer = ({children, darkBlur}) => {
    return (
    <section className={"hero-container"}>
        <HeroImage darkBlur={darkBlur}>
            <div className="main-container">
                {children}
            </div>
        </HeroImage>
    </section>
  );
};

HeroContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    darkBlur: PropTypes.bool
}
HeroContainer.defaultProps = {
    children: '',
    darkBlur: false
}

export default HeroContainer;
