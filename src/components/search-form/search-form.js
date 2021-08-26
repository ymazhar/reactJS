import InputField from "../../elements/input-field";
import Button from "../../elements/button";

import "./search-form.scss";

const SearchForm = () => {
    return (
        <form className={"search-form"}>
            <InputField placeholder={"What do you want to watch?"}/>
            <Button primary>Search</Button>
        </form>
    );
};

export default SearchForm;
