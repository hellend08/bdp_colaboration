import React from 'react';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { modalStore } from "../../../../store/commons"
import "./style.css"


const InputFileModal = ({label, modal}) => {

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
       console.log(fileUploaded);
    };

    const { selectModal } = modalStore()

    return (
        <>
            <p className="mb-2">{label}</p>
            <Row className="position-relative mb-5">
                
                {/* <Form.Group md="4" controlId="validationCustomUsername" className="input-w-90">
                    <Form.Label>{label}</Form.Label> */}
                    {/* <InputGroup hasValidation>
                        <Form.Control {...register(name)} type={type} className="w-50" /> */}
                        
                        {/*<p>{errors.firstName?.message}</p>*/} 
                    {/* </InputGroup>
                </Form.Group> */}
                <Form.Group controlId="formFile" className="position-absolute">
                    <Button className="btn-file-modal" variant="secondary" id="button-addon2" onClick={() => selectModal(modal)}> + </Button>
                    <Form.Label className="d-inline mb-2 position-relative">
                        <input type="text" class="form-control" />
                        <span className="position-absolute container-icon-file-modal">
                            <i className="bi bi-paperclip icon-file-modal"></i>
                        </span>
                    </Form.Label>
                    <Form.Control onChange={handleChange} type="file" className="d-none" />
                </Form.Group>
            </Row>
        </>
    );
}
export default InputFileModal;