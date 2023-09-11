import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from './services/stateService';

function ErrorModal() {
    // dispatch peredajot action v redux. 
    // on svjaznoj mezdhu react i redux.
    // On prinemajet v sebja action i otprovljaet action v redux vmeste s novymi dannymi.
    const dispatch = useDispatch();

    // useSelector eto hukk slushatel' kotoryj slushajet jemu naznachennoje sostojanie. 
    // pri izmenija, komponent perezapuskajetsa
    const errorMessage = useSelector(state => state.errorMessage);
    const handleClose = () => dispatch(setErrorMessage(null));

    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;
