import MovieForm from "../../components/movie-form";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import MoviesServiceContext from "../../components/movies-service-context";
import {getMoviesError, getMoviesSuccess, hideModalEditMovie, removeEditMovieId} from "../../actions";
import ModalContainer from "../modal-container";
import {withFormik} from "formik";
import {MovieFormShemas} from "../../shemas/movieFormShemas";

const EditMovieContainer = () => {
    const dispatch = useDispatch();
    const movieService = useContext(MoviesServiceContext);
    const modals = useSelector(({modals}) => modals);
    const {editMovie} = modals;
    const editMovieId = useSelector(({editMovieId}) => editMovieId);
    const [movie, setMovie] = useState({});

    const onClose = () => {
        dispatch(hideModalEditMovie());
        dispatch(removeEditMovieId());
    }

    useEffect(() => {
        if(!editMovieId) {
            return;
        }
        movieService.getMovieById(editMovieId)
            .then(movie => setEditMovieValues(movie));
    }, [editMovieId])

    const setEditMovieValues = (movie) => {

        const options = movie.genres.map(genre => ({label: genre, value: genre}));

        setMovie({...movie, genres: options })
    }
    const formikEnhancer = withFormik({
        validationSchema: MovieFormShemas,
        mapPropsToValues: () => movie,
        handleSubmit: (values ) => {
            const payload = {
                ...values,
                runtime: +values.runtime,
                genres: values.genres.map(t => t.value),
            };

            movieService.updateMovieById(payload)
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
                title={editMovie.title}
                isOpen={editMovie.isOpen}
                onClose={onClose}
                id={editMovie.id}>
                <div className="modal__body">
                    <MovieFormFormik edit />
                </div>
            </ModalContainer>
        </>
    )
}

export default EditMovieContainer;