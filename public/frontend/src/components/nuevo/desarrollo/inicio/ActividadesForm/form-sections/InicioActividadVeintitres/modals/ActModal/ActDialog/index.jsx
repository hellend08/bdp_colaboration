import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputDateForm from '../../../../../../../../../commons/forms/InputDateForm';
import "./style.css"

const schema = yup.object({
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  observations: yup.string().required(),
  //age: yup.number().positive().integer().required(),
}).required();


function ActDialog(props) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
});
const onSubmit = data => console.log(data);
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='px-4 container-shadow'>
        <h5>Crear Actividad</h5>
        <Form onSubmit={handleSubmit(onSubmit)} className='mt-4 px-3'>
            <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="text" placeholder="Hito" />
                
            </Form.Group>
            <InputDateForm name="startDate" label="" type="date" register={register} errors={errors}></InputDateForm>
            <InputDateForm name="startDate" label="" type="date" register={register} errors={errors}></InputDateForm>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" placeholder="Hito" />
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" placeholder="Hito" />
            </Form.Group> */}
            <Row className="d-flex flex-row-reverse pr-3 mt-4">
                <Button onClick={props.onHide} className="btn-sumit" type="submit" variant="primary">
                    <i className="bi bi-send-fill"></i>
                </Button>
            </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ActDialog;