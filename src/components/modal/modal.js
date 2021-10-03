import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ title, isOpen, onClose, children, id }) => {
  return (
    <>
      {isOpen && (
        <div className={"modal-overlay"}>
          <div className={"modal"} id={id}>
            <div className="modal__header">
              <h2 className={"modal__title"}>{title}</h2>
              <button
                className={"button modal__close-button"}
                data-modal-id={id}
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string,
};

Modal.defaultProps = {
  title: "Modal title",
  isOpen: false,
  onClose: () => {},
  children: {},
  id: null,
};

export default Modal;
