import React, {Component} from "react";
import Button from "../../components/button";
import Modal from "../../components/modal";
import AddMovieForm from "../add-movie-form";

const AddMovieModal = ({title, isOpen, onReset, onSubmit, onClose}) => {
    return (
        <Modal isOpen={isOpen} title={title} onCancel={onClose}>
            <div className="modal__body">
                <AddMovieForm/>
            </div>
            <div className="modal__footer">
                <Button onClick={onReset} inverted>Reset</Button>
                <Button onClick={onSubmit}>Submit</Button>
            </div>
        </Modal>
    )
}

export default AddMovieModal;