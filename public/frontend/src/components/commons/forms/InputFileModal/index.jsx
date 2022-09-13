import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { modalStore } from "../../../../store/commons"

const InputFileModal = ({name, type, label, register, errors, modal}) => {
    const { selectModal } = modalStore()
    return (
        <Form.Group md="4" controlId="validationCustomUsername">
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control {...register(name)} type={type} />
                <Button variant="secondary" id="button-addon2" onClick={() => selectModal(modal)}>
                +
                </Button>
                {/*<p>{errors.firstName?.message}</p>*/} 
            </InputGroup>
        </Form.Group>
    );
}
  
export default InputFileModal;