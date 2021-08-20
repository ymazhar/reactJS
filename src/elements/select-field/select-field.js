import PropTypes from "prop-types";
import classNames from "classnames";
import "./select-field.scss";

const SelectField = ({ id, className, options, onChange, value, ...attrs }) => {
  const classes = classNames(`select-field`, className);

  const optionsList =
    options.length &&
    options.map((option) => {
      return (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      );
    });
  return (
    <div className={"select-field-wrapper"}>
      <select
        id={id}
        className={classes}
        value={value}
        onChange={onChange}
        {...attrs}
      >
        {optionsList}
      </select>
      <span className={"icon-arrow-down"} />
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  className: "",
  onChange: () => {},
  options: [],
};

export default SelectField;
