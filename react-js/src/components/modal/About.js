import React from 'react';
import { Modal } from 'react-bootstrap';

const About = (props) => {
    return (
        <Modal
            {...props} centered
            aria-labelledby='modal-add-item'>

            <Modal.Header closeButton className="bg-secondary text-white">
                <Modal.Title id='modal-add-item'>About</Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-center">
                <h4>Personal Finance Manager</h4>
                <div className="px-4">
                    <hr></hr>
                </div>
                <p> A Personal Finance Manager web application to calculate income and expense. </p>
            </Modal.Body>
        </Modal>
    );
};

export default About;
