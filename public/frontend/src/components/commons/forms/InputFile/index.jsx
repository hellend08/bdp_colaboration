import React from 'react';
import Form from 'react-bootstrap/Form';
import "./style.css"


const InputFile = ({label}) => {

      const handleChange = event => {
        const fileUploaded = event.target.files[0];
       console.log(fileUploaded);
      };

    return (
        <>
            <p className="mb-2">{label}</p>
            <Form.Group controlId="formFile" >
                <Form.Label className="d-inline mb-2 position-relative">
                    <input type="text" class="form-control" />
                    <span className="position-absolute container-icon">
                        <i className="bi bi-paperclip icon-file "></i>
                    </span>
                </Form.Label>
                <Form.Control onChange={handleChange} type="file" className="d-none" />
            </Form.Group>
        </>
    )
}

export default InputFile;

