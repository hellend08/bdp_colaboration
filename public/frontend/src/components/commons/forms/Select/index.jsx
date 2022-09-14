import Form from 'react-bootstrap/Form';

const Select = ({name, label, options, register, errors}) => {
  return (
      <Form.Group className="mb-3" controlId="formGridState">
        <Form.Label>{label}</Form.Label>
        <Form.Select  {...register(name)} defaultValue="" >
          <option  value="" disabled>Elegir opción</option>
          {options.map((option, index) => (
            <option key={index + 1} value={index + 1} >{option}</option>
          ))}
        </Form.Select>
      </Form.Group>
  );
}

export default Select;