
import React from 'react';
import { Form, Col } from 'react-bootstrap';

const InputText = ({ defaultValue, label, handler, conditionView, width }) => {
    return (
        <Form.Group as={Col} md={width} controlId="controlId6">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                name={label}
                placeholder={label}
                defaultValue={defaultValue}
                onChange={conditionView ? null : handler}
                readOnly={conditionView ? true : false}
                disabled={conditionView ? true : false}
            />
        </Form.Group>)
}

export default InputText;