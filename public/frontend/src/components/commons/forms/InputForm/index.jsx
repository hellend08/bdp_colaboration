import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputForm = ({name, type, label, placeholder, register, errors}) => {

    return (
        <Form.Group  md="4" controlId="validationCustomUsername">
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} />
                { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>}
                <p>{errors.firstName?.message}</p>  
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputForm;