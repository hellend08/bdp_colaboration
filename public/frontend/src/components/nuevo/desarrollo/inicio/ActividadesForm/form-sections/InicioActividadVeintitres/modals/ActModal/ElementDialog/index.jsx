import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputForm from '../../../../../../../../../commons/forms/InputForm';


const schema = yup.object({
  nivel: yup.string().required(),
  position: yup.string().required(),
  name: yup.string().required(),
  //age: yup.number().positive().integer().required(),
}).required();

function ElementDialog(props) {

  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
  });
  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset()
  };

  return (
    <Modal dialogClassName=""
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='px-4 container-shadow'>
        <h5>Crear Elemento</h5>
        <Form onSubmit={handleSubmit(onSubmit)} className='mt-3 px-3'>
       
            <InputForm name="nivel" label="" textAlternative="Nivel" register={register} errors={errors} />
            <InputForm name="position" label="" textAlternative="Cargo" register={register} errors={errors} />
            <InputForm name="name" label="" textAlternative="Nombre" register={register} errors={errors} />
          
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nivel" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Cargo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Nombre" />
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

export default ElementDialog;