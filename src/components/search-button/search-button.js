import "./search-button.scss";
import PropTypes from "prop-types";

const SearchButton = ({ text }) => (
  <button className={"search-button"} type={"submit"}>
    {text}
  </button>
);
SearchButton.propTypes = {
  text: PropTypes.string,
};

export default SearchButton;
