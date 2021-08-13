import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./select-field.scss"

class SelectField extends Component {

    constructor(props) {
        super(props);
        this.state = {value: this.props.options[0]};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        const {id, className, label, onChange, options, ...attrs} = this.props;

        const classes = classNames(
            `select-field`, className
        )

        const optionsList = this.props.options.length && options.map(option => {
            return (
                <option key={option.id} value={option.value}>{option.name}</option>
            )
        })
        return (
            <div className={"input-field-wrapper"}>
                { label &&
                <label className={"input-field-label"} htmlFor={id}>{label}</label>
                }
                <div className={"select-field-wrapper"}>
                    <select className={classes} value={this.state.value} onChange={(e) => this.handleChange(e)} {...attrs}>
                        {optionsList}
                    </select>
                    <span className={"icon-arrow-down"}></span>
                </div>
            </div>
        )
    }


}

SelectField.prototypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
}

SelectField.defaultProps = {
    className: '',
    onChange: () => {
    },
    options: []
}

export default SelectField;

