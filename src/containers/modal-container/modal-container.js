import {createPortal} from "react-dom";
import Modal from "../../components/modal";

const ModalContainer = (props) => {
    return createPortal(
        <Modal {...props}/>,
        document.getElementById('modal-root'),
    );
}

export default ModalContainer;