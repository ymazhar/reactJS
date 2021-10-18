import ModalContainer from "../modal-container";
import {useDispatch} from "react-redux";
import {hideModalAddMovie} from "../../actions/modalActions";
import {addMovie} from "../../actions/moviesActions";
import {withFormik} from "formik";
import MovieForm from "../../components/movie-form";
import {MovieFormShemas} from "../../shemas/movieFormShemas";
import {getAddModalSelector} from "../../selectors/modalSelectors";

const AddMovieContainer = () => {
    const dispatch = useDispatch();
    const addMovieModal = getAddModalSelector();

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

            dispatch(addMovie(payload))
        },
    })

    const MovieFormFormik = formikEnhancer(MovieForm);

    return (
        <>
            <ModalContainer
                title={addMovieModal.title}
                isOpen={addMovieModal.isOpen}
                onClose={onClose}
                id={addMovieModal.id}>
                <div className="modal__body">
                    <MovieFormFormik />
                </div>
            </ModalContainer>
        </>
    )
}

export default AddMovieContainer;