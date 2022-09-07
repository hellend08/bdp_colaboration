import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputForm = ({name, type, label, placeholder, register, errors}) => {

    return (
        <Form.Group className="mb-3" controlId="validationCustomUsername">
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type}  />
                { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>}
                <p></p>  
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputForm;