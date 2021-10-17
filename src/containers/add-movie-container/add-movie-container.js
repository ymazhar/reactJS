import ModalContainer from "../modal-container";
import {useDispatch} from "react-redux";
import {getMoviesError, getMoviesSuccess} from "../../actions/moviesActions";
import {hideModalAddMovie} from "../../actions/modalActions";
import {withFormik} from "formik";
import MovieForm from "../../components/movie-form";
import {MovieFormShemas} from "../../shemas/movieFormShemas";
import {getAddModalSelector} from "../../selectors/modalSelectors";
import {moviesAPI} from "../../services/movie-service";

const AddMovieContainer = () => {
    const dispatch = useDispatch();
    const addMovie = getAddModalSelector();

    const onClose = () => {
        dispatch(hideModalAddMovie());
    }

    const formikEnhancer = withFormik({
        validationSchema: MovieFormShemas,
        mapPropsToValues: () => ({
            id: '',
            title: '',
            release_date: '',
            poster_path: '',
            genres: [],
            overview: '',
            runtime: '',
        }),
        handleSubmit: (values ) => {
            const payload = {
                ...values,
                runtime: +values.runtime,
                genres: values.genres.map(t => t.value),
            };

            delete payload.id;
            moviesAPI.addMovie(payload)
                .then(() => {
                    moviesAPI.getMovies()
                        .then(data => dispatch(getMoviesSuccess(data)))
                        .catch(error => dispatch(getMoviesError(error)))
                });
        },
    })

    const MovieFormFormik = formikEnhancer(MovieForm);

    return (
        <>
            <ModalContainer
                title={addMovie.title}
                isOpen={addMovie.isOpen}
                onClose={onClose}
                id={addMovie.id}>
                <div className="modal__body">
                    <MovieFormFormik />
                </div>
            </ModalContainer>
        </>
    )
}

export default AddMovieContainer;