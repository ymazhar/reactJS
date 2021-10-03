import ModalContainer from "../modal-container";
import Button from "../../elements/button";
import {getMoviesError, getMoviesSuccess, hideModalDeleteMovie} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";
import MoviesServiceContext from "../../components/movies-service-context";

const DeleteMovieContainer = () => {
    const dispatch = useDispatch();
    const movieService = useContext(MoviesServiceContext);
    const modals = useSelector(({modals}) => modals);
    const {deleteMovie} = modals;
    const deleteMovieId = useSelector(({deleteMovieId}) => deleteMovieId);
    const onClose = () => {
        dispatch(hideModalDeleteMovie());
    }
    const handleConfirm = () => {
        movieService.deleteMovieById(deleteMovieId)
            .then(() => {
                movieService.getMovies()
                    .then(data => dispatch(getMoviesSuccess(data)))
                    .catch(error => dispatch(getMoviesError(error)))
            });
    }

    return (
        <>
            <ModalContainer
                title={deleteMovie.title}
                isOpen={deleteMovie.isOpen}
                onClose={onClose}
                id={deleteMovie.id}>
                <div className="modal__body">
                    <p>Are you sure you want to delete this movie?</p>
                </div>
                    <div className="modal__footer">
                        <Button onClick={handleConfirm} primary>Confirm</Button>
                    </div>
            </ModalContainer>
        </>
    )
}

export default DeleteMovieContainer;