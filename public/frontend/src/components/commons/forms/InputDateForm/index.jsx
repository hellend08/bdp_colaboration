import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./style.css"

const InputDateForm = ({name, type, label, register, errors}) => {

    return (
        // <Form.Group md="4" controlId="validationCustomUsername">
        <Form.Group controlId="validationCustomUsername">
             {/* className="mb-3" */}
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control className='relativo' {...register(name)} type={type} />
                {/* { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>} */}
                {/* <InputGroup.Text id="basic-addon1">
                <i className="bi bi-calendar"></i>
                </InputGroup.Text> */}
                <p></p>  
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputDateForm;