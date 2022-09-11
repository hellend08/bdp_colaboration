import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Textarea from '../../../../../commons/forms/Textarea';
import "./style.css"
import ActDialog from "./ActDialog";
import ElementDialog from "./ElementDialog";

const schema = yup.object({
    proposito: yup.string().required(),
    objetivo: yup.string().required(),
    descripcion: yup.string().required(),
    alcance: yup.string().required(),
    presupuesto: yup.string().required(),
    riesgos: yup.string().required(),
    gerencia: yup.string().required(),
    mecanimos: yup.string().required(),
  }).required();

const ActModal = (props) => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            proposito: "",
            objetivo: "",
            descripcion: "",
            alcance: "",
            presupuesto: "",
            riesgos: "",
            gerencia: "",
            mecanimos: "",
        }
    });
    const onSubmit = data => console.log(data);

    const [modalShowAct, setModalShowAct] = useState(false);
    const [modalShowElement, setModalShowElement] = useState(false);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header className="py-3 px-4" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Acta Constitución
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                <Row>
                    <Col>
                        <Textarea name="proposito" label="Problema y propósito" type="text" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Textarea name="objetivo" label="Objetivos" type="text" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Textarea name="descripcion" label="Descripción del modelo de intervención" type="text" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Textarea name="alcance" label="Alcance" type="text" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Textarea name="presupuesto" label="Presupuesto" type="text" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Textarea name="riesgos" label="Riesgos, supuestos y restricciones" type="text" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Textarea name="gerencia" label="Gerencia y equipo" type="text" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Textarea name="mecanimos" label="Mecanismos de control de cambios y monitoreo" type="text" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row className="d-flex flex-row-reverse pr-3">
                    <Button className="btn-sumit" type="submit" variant="primary" >
                        <i className="bi bi-send-fill"></i>
                    </Button>
                </Row>
            </form>
            <Row className="d-flex flex-row justify-content-between align-items-center mb-3">
                    <p className="mb-0 w-25">Cronograma</p>
                    <Button className="btn-modal" variant="outline-primary" onClick={() => setModalShowAct(true)}>+ Actividad</Button>
            </Row>
            <ActDialog show={modalShowAct} onHide={() => setModalShowAct(false)} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Hitos</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Actividad 1</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Actividad 2</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>Actividad 3</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                </tbody>
            </Table>
            
            <Row className="d-flex flex-row justify-content-between align-items-center mb-3">
                    <p className="mb-0 w-50">Estructura Organizacional</p>
                    <Button className="btn-modal" variant="outline-primary" onClick={() => setModalShowElement(true)}>+ Elemento</Button>
            </Row>
            <ElementDialog show={modalShowElement} onHide={() => setModalShowElement(false)} />

            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Nivel</th>
                        <th>Cargo</th>
                        <th>Nombre</th>
                        {/* <th className="text-center">Eliminar</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Objetivo</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>1.1</td>
                        <td>Componente</td>
                        <td>Descripción</td>
                        {/* <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td> */}
                    </tr>
                    <tr>
                        <td>1.1.1</td>
                        <td>Producto</td>
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

export default ActModal;