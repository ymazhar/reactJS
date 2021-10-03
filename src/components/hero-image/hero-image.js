import PropTypes from "prop-types";
import classNames from "classnames";
import "./hero-image.scss";
import "./hero-image.jpg";

const HeroImage = ({children, darkBlur}) => {
    const classes = classNames('hero-image', {
        'hero-image--dark-blur': darkBlur
    });
  return (
    <div className={classes}>
        {children}
      <div className={"hero-image__blur"} />
    </div>
  );
};

HeroImage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    darkBlur: PropTypes.bool
}

HeroImage.defaultProps = {
    children: {},
    darkBlur: false
}

export default HeroImage;
