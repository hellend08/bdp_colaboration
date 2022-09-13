import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import NuevaMatrizIntDialog from "./NuevaMatrizIntDialog";
import { modalStore, dialogStore } from "../../../../../../store/commons"
import "./style.css";

const MatrizInteresadosModal = () => {
  const { modal, selectModal } = modalStore();
  const { selectDialog } = dialogStore();
  const name = "matriz-interesados";
  const onClose = () => selectModal("");

  return (
    <Modal show={name === modal}  onHide={onClose}  dialogClassName="layout-w"  size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header className="py-2 px-4" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Matriz de Interesados
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <Button className='mb-3' variant="outline-primary" onClick={() => selectDialog("nueva-matriz-int")}>+ Elemento</Button>
        <NuevaMatrizIntDialog />
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
        <Button variant="primary" onClick={onClose}>ACEPTAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MatrizInteresadosModal;