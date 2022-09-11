import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import MatrixDialog from "./MatrixDialog";
import "./style.css";

const MatrixModal = (props) => {
  const [modalShowAct, setModalShowMatrix] = useState(false);

  return (
    <Modal dialogClassName="layout-w" {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header className="py-2 px-4" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Matriz de Interesados
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        
        <Button className='mb-3' variant="outline-primary" onClick={() => setModalShowMatrix(true)}>+ Elemento</Button>
        <MatrixDialog show={modalShowAct} onHide={() => setModalShowMatrix(false)} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Interesado</th>
                        <th>Objetivo Meta</th>
                        <th>Nivel de Interés</th>
                        <th>Nivel de Influencia</th>
                        <th>Acciones Posibles Positivas</th>
                        <th>Acciones Posibles Negativas</th>
                        <th>Estrategias</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Bajo</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Medio</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Nombre</td>
                        <td>Descripción</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Alto</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                </tbody>
            </Table>
           
      </Modal.Body>
      <Modal.Footer className="py-2" >
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
        <Button variant="primary">Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MatrixModal;