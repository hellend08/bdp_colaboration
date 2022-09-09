import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputForm = ({name, type, label, placeholder, textAlternative, register, errors}) => {

    return (
        // <Form.Group md="4" controlId="validationCustomUsername">
        <Form.Group controlId="validationCustomUsername">
             {/* className="mb-3" */}
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} placeholder={textAlternative} />
                { placeholder && <InputGroup.Text id="inputGroupPrepend">{placeholder}</InputGroup.Text>}
                {/* <p>{errors}</p>   */}
                {/* <p className="text-danger text-small d-block mb-2">
                    {errors?.name?.message}
                </p> */}
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputForm;