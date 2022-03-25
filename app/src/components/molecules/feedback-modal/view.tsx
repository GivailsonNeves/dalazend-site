import { Button, Modal } from "react-bootstrap";

export interface FeedbackModalProps {
    title?: string;
    message?: string;
    handleClose?: any;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ message, title, handleClose }) => {
    return (
        <>
            <Modal show={!!message} onHide={handleClose}>
                {
                    title && (
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                    )
                }
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FeedbackModal;