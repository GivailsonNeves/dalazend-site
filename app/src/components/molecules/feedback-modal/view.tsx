import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export interface FeedbackModalProps {
  title?: string;
  message?: string;
  handleClose?: any;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  message,
  title,
  handleClose,
}) => {
  const [t] = useTranslation();

  return (
    <>
      <Modal show={!!message} onHide={handleClose}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("general.close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
