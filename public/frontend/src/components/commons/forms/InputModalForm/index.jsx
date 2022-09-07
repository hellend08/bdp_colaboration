import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const InputModalForm = ({name, type, label, register, errors}) => {

    return (
        <Form.Group md="4" controlId="validationCustomUsername">
            {/* <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type}  />
                { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>}
            </InputGroup> */}
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} />
                <Button variant="secondary" id="button-addon2">
                +
                </Button>
                <p>{errors.firstName?.message}</p>  
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputModalForm;