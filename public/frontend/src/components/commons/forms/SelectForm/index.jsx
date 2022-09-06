import Form from 'react-bootstrap/Form';

const SelectForm = ({label, value, option}) => {
  return (
    <Form.Select aria-label="Default select example">
      <option>{label}</option>
      <option value={value}>{option}</option>
    </Form.Select>
  );
}

export default SelectForm;