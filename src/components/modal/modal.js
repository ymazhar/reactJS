import React from "react";
import Proptypes from "prop-types";
import "./modal.scss";

const Modal = ({title, isOpen, onCancel, children}) => {
    return (
        <>
            {isOpen &&
            <div className={"modal-overlay"}>
                <div className={"modal"}>
                    <div className="modal__header">
                        <h2 className={"modal__title"}>{title}</h2>
                        <button className={"button modal__close-button"} onClick={onCancel} />
                    </div>
                    {children}
                </div>
            </div>
            }
        </>
    )
}

Modal.prototypes = {
    title: Proptypes.string,
    isOpen: Proptypes.bool,
    onCancel: Proptypes.func,
    children: Proptypes.node
}

Modal.defaultProps = {
    title: "Modal title",
    isOpen: false,
    onCancel: () => {
    },
}

export default Modal;