import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MatrizInteresados from "../../tables/MatrizInteresados";
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
        <MatrizInteresados />
      </Modal.Body>
      <Modal.Footer className="py-2" >
        <Button variant="primary" onClick={onClose}>ACEPTAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MatrizInteresadosModal;