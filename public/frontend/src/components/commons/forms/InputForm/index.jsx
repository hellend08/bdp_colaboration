import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputForm = ({name, type, label, textDecoration, register, errors, placeholder}) => {

    return (
        <Form.Group  md="4" controlId="validationCustomUsername">
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} placeholder={placeholder} />
                { textDecoration && <InputGroup.Text id="inputGroupPrepend">{textDecoration}</InputGroup.Text>}
                <p>{errors.firstName?.message}</p>  
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputForm;