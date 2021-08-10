import React from "react";
import InputField from "../input-field";
import SearchButton from "../search-button";

import "./search-form.scss";

const SearchForm = () => {
    return(
        <form className={"search-form"}>
            <InputField placeholder={"What do you want to watch?"} className={"search-form__input"}/>
            <SearchButton text={"Search"} />
        </form>
    )
}

export default SearchForm;