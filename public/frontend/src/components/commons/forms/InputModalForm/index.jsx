import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ActModal from '../../../nuevo/desarrollo/Inicio/ActividadesForm/form-sections/InicioActividadVeintitres/modals/ActModal';
// import MatrixModal from '../../../nuevo/desarrollo/Inicio/ActividadesForm/form-sections/InicioActividadVeintitres/modals/MatrixModal';

const InputModalForm = ({name, type, label, register, errors}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Form.Group md="4" controlId="validationCustomUsername">
            {/* <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type}  />
                { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>}
            </InputGroup> */}
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} />
                <Button variant="secondary" id="button-addon2" onClick={() => setModalShow(true)}>
                +
                </Button>
                <p>{errors.firstName?.message}</p>  
                <ActModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
                {/* <MatrixModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                /> */}
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputModalForm;