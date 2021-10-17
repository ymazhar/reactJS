import MovieForm from "../../components/movie-form";
import {useDispatch} from "react-redux";
import {getMovieById, removeEditMovieId, updateMovie} from "../../actions/moviesActions";
import {hideModalEditMovie} from "../../actions/modalActions";
import ModalContainer from "../modal-container";
import {withFormik} from "formik";
import {MovieFormShemas} from "../../shemas/movieFormShemas";
import {getEditModalSelector} from "../../selectors/modalSelectors";

const EditMovieContainer = () => {
    const dispatch = useDispatch();
    const editMovie = getEditModalSelector();
    const movie = getMovieById();

    const onClose = () => {
        dispatch(hideModalEditMovie());
        dispatch(removeEditMovieId());
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

            dispatch(updateMovie(payload));
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