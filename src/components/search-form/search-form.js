import InputField from "../../elements/input-field";
import Button from "../../elements/button";

import "./search-form.scss";
import PropTypes from "prop-types";

const SearchForm = ({onSubmit, handleChange, value}) => {
    return (
        <form className={"search-form"} onSubmit={onSubmit}>
            <InputField placeholder={"What do you want to watch?"}
                        onChange={handleChange}
                        value={value}
                        id="query"
                        name="query"/>
            <Button primary>Search</Button>
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    value: PropTypes.string,
};

export default SearchForm;
