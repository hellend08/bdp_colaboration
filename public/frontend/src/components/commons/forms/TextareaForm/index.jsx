import Form from 'react-bootstrap/Form';

const TextareaForm = ({label, name, register, errors}) => {
    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{label}</Form.Label>
            <Form.Control {...register(name)}  as="textarea" rows={1} />
            <p>{errors.descripcion?.message}</p>  
        </Form.Group>
    );
}
  
export default TextareaForm;