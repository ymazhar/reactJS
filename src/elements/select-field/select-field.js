import PropTypes from "prop-types";
import classNames from "classnames";
import Select, {components} from 'react-select'
import "./select-field.scss";
import "../../variables/colors.scss"

const SelectField = ({id, className, placeholder, options, value, multiple, ...attrs}) => {
    const classes = classNames(`select-field`, className);
    const colorStyles = {
        control: () => null,
        option: () => null,
        input: () => {
        },
    }
    const Option = ({isSelected, label, ...restProps}) => {
        return (
            <div>
                <components.Option {...restProps} className="select-field__option">
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{label}</label>
                </components.Option>
            </div>
        )
    }
    const Control = ({children, ...props}) => {
        return (
            <components.Control {...props} className="select-field__control">
                {children}
            </components.Control>
        )
    };
    const DropDownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <div>123</div>
            </components.DropdownIndicator>
        )
    };
    const Placeholder = props => {
        return <components.Placeholder {...props} className="select-field__placeholder"/>;
    };
    const ValueContainer = ({children, ...props}) => (
        <components.ValueContainer {...props}
                                   className="select-field__value-container">{children}</components.ValueContainer>
    );
    const IndicatorSeparator = () => null;

    const Menu = ({children, ...props}) => {
        return (
            <components.Menu {...props} className="select-field__menu">{children}</components.Menu>
        );
    };

    return (
        <Select
            isMulti={multiple}
            options={options}
            styles={colorStyles}
            components={{Option, Control, Placeholder, DropDownIndicator, IndicatorSeparator, ValueContainer, Menu}}
            id={id}
            className={classes}
            placeholder={placeholder}
            closeMenuOnSelect={false}
            value={value}
            {...attrs}
        />
    );
};

SelectField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
        PropTypes.string, PropTypes.array
    ]),
    multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    isSelected: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.node
};

SelectField.defaultProps = {
    className: "",
    onChange: () => {
    },
    options: [],
    value: "",
    multiple: false
};

export default SelectField;
