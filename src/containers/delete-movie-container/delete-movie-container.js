import ModalContainer from "../modal-container";
import Button from "../../elements/button";
import {hideModalDeleteMovie} from "../../actions/modalActions";
import {useDispatch} from "react-redux";
import {getDeleteModalSelector} from "../../selectors/modalSelectors";
import {getDeleteMovieIdSelector} from "../../selectors/movieSelectors";
import {deleteMovie} from "../../actions/moviesActions";
import {useCallback} from "react";

const DeleteMovieContainer = () => {
    const dispatch = useDispatch();
    const deleteMovieModal = getDeleteModalSelector();
    const deleteMovieId = getDeleteMovieIdSelector();
    const onClose = () => {
        dispatch(hideModalDeleteMovie());
    }
    const handleConfirm = useCallback(() => {
        dispatch(deleteMovie(deleteMovieId))
    }, [deleteMovieId])

    return (
        <>
            <ModalContainer
                title={deleteMovieModal.title}
                isOpen={deleteMovieModal.isOpen}
                onClose={onClose}
                id={deleteMovieModal.id}>
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