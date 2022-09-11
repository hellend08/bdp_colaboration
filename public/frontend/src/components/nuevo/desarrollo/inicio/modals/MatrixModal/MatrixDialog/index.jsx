import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/esm/Col";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from '../../../../../../commons/forms/Input';
import "./style.css"


const schema = yup.object({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    observations: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

function MatrixDialog(props) {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <Modal dialogClassName=""
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body className='px-4 container-shadow'>
            <h5>Crear Elemento</h5>
            <Form onSubmit={handleSubmit(onSubmit)} className='mt-3 px-3'>
                <Row>
                    <Col>
                        <Input name="comments" label="" textAlternative="Interesado" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="comments" label="" textAlternative="Objetivo Meta" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="comments" label="" textAlternative="Nivel de Interés" register={register} errors={errors} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input name="comments" label="" textAlternative="Nivel de Influencia" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="comments" label="" textAlternative="Acciones Posibles Positivas" register={register} errors={errors} />
                    </Col>
                    <Col>
                        <Input name="comments" label="" textAlternative="Acciones Posibles Negativas" register={register} errors={errors} />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Input name="comments" label="" textAlternative="Estrategias" register={register} errors={errors} />
                </Row>

                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Nivel" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Cargo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group> */}
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

export default MatrixDialog;