import Form from 'react-bootstrap/Form';

const Select = ({name, label, options, register, errors}) => {
  return (
      <Form.Group className="mb-3" controlId="formGridState">
        <Form.Label>{label}</Form.Label>
        <Form.Select  {...register(name)} defaultValue="Choose..." >
          <option>Choose...</option>
          <option value="option 1">{options}</option>
        </Form.Select>
      </Form.Group>
  );
}

export default Select;