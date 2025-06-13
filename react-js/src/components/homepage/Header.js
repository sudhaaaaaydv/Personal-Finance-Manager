import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <div className='dark-overlay-container'>
                <div className='dark-overlay' style={{minHeight:"400px"}}>
                    <Container className='pt-md-3'>
                        <Row>
                            <Col className='col-md-11 col-lg-10 block'>
                                <h1 className='text-h1'>Master your <strong>money</strong> to get out and stay out of debt</h1>
                                <p className='sub-text mt-4' style={{ color: '#ffffffb8' }}>
                                   Personal Finance Manager is a online money management tool that just do that Personal Finance Manager is a free online money management tool that helps you track your income and expenses, set budgets, and achieve your financial goals. Whether you're looking to save for a vacation, pay off debt, or simply keep your finances organized, Personal Finance Manager has you covered.
                                    </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>

    );
};

export default Header;
