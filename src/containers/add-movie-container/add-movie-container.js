import ModalContainer from "../modal-container";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesError, getMoviesSuccess, hideModalAddMovie} from "../../actions";
import MoviesServiceContext from "../../components/movies-service-context";
import {useContext} from "react";
import {withFormik} from "formik";
import MovieForm from "../../components/movie-form";
import {MovieFormShemas} from "../../shemas/movieFormShemas";

const AddMovieContainer = () => {
    const dispatch = useDispatch();
    const movieService = useContext(MoviesServiceContext);
    const modals = useSelector(({modals}) => modals);
    const {addMovie} = modals;

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
            movieService.addMovie(payload)
                .then(() => {
                    movieService.getMovies()
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