import SearchForm from "../../components/search-form";
import {useFormik} from "formik";
import {useHistory} from "react-router";

const SearchContainer = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: (values) => {
            history.push(`/search/?search=${values.query}`)
        },
    });

    return (
        <SearchForm onSubmit={formik.handleSubmit} handleChange={formik.handleChange} value={formik.values.query}/>
    )
}

export default SearchContainer;