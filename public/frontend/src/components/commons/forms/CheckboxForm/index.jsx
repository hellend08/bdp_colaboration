import Form from 'react-bootstrap/Form';

const CheckboxForm = ({name, label, register, errors}) => {
    
    return (
        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check {...register(name)} type="checkbox" label={label} />
        </Form.Group>
    );
}
  
export default CheckboxForm;