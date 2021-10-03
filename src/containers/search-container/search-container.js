import SearchForm from "../../components/search-form";
import {useFormik} from "formik";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import MoviesServiceContext from "../../components/movies-service-context";
import {getMoviesError, getMoviesSuccess} from "../../actions";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const movieService = useContext(MoviesServiceContext);
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: values => {
            movieService.getMoviesWithParams(`search=${values.query}`)
                .then(data => dispatch(getMoviesSuccess(data)))
                .catch(error => dispatch(getMoviesError(error)))
        },
    });

    return (
        <SearchForm onSubmit={formik.handleSubmit} handleChange={formik.handleChange} value={formik.values.query}/>
    )
}

export default SearchContainer;