import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import TextareaForm from '../../../../../../../../commons/forms/TextareaForm';
import "./style.css"

const schema = yup.object({
    comments: yup.string().required(),
  }).required();

const ActModal = (props) => {

    const { register, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    // const onSubmit = data => console.log(data);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header className="py-2" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Acta Constitución
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
            <Col>
                <TextareaForm name="comments" label="Problema y propósito" type="text" register={register} errors={errors} />
            </Col>
            <Col>
                <TextareaForm name="comments" label="Objetivos" type="text" register={register} errors={errors} />
            </Col>
        </Row>
        <Row>
            <Col>
                <TextareaForm name="comments" label="Descripción del modelo de intervención" type="text" register={register} errors={errors} />
            </Col>
            <Col>
                <TextareaForm name="comments" label="Alcance" type="text" register={register} errors={errors} />
            </Col>
        </Row>
        <p>Cronograma</p>
        <Row>
        <Col sm={10}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Hitos</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Actividad 1</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Actividad 2</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Actividad 3</td>
                        <td>12/12/9999</td>
                        <td>12/12/9999</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </Col>
            <Col sm={2}>
                <Button variant="outline-primary">Actividad +</Button>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col>
                <TextareaForm name="comments" label="Presupuesto" type="text" register={register} errors={errors} />
            </Col>
            <Col>
                <TextareaForm name="comments" label="Riesgos, supuestos y restricciones" type="text" register={register} errors={errors} />
            </Col>
        </Row>
        <p>Estructura Organizacional</p>
        <Row>
        <Col sm={10}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="fs-6 fw-semibold lh-sm align-middle size-sm">
                        <th>Nivel</th>
                        <th>Cargo</th>
                        <th>Nombre</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Objetivo</td>
                        <td>Descripción</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.1</td>
                        <td>Componente</td>
                        <td>Descripción</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1.1.1</td>
                        <td>Producto</td>
                        <td>Descripción</td>
                        <td className="d-flex flex-row">
                            <Button className="rounded-circle py-0 mx-auto" size="sm" variant="danger">-</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </Col>
            <Col sm={2}>
                <Button variant="outline-primary">Elemento +</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <TextareaForm name="comments" label="Gerencia y equipo" type="text" register={register} errors={errors} />
            </Col>
            <Col>
                <TextareaForm name="comments" label="Mecanismos de control de cambios y monitoreo" type="text" register={register} errors={errors} />
            </Col>
        </Row>
        
      </Modal.Body>
      <Modal.Footer className="py-2" >
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
        <Button variant="primary">Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ActModal;