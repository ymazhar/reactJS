import InputField from "../../elements/input-field";
import SearchButton from "../search-button";

import "./search-form.scss";

const SearchForm = () => {
  return (
    <form className={"search-form"}>
      <InputField placeholder={"What do you want to watch?"} />
      <SearchButton text={"Search"} />
    </form>
  );
};

export default SearchForm;
