import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ElementDialog(props) {
  return (
    <Modal dialogClassName=""
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='px-4 container-shadow'>
        <h5>Crear Elemento</h5>
        <Form className='mt-4 px-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nivel" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Cargo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Row className="d-flex flex-row-reverse pr-3">
                <Button onClick={props.onHide} className="btn-sumit" type="submit" variant="primary">
                    <i className="bi bi-send-fill"></i>
                </Button>
            </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ElementDialog;