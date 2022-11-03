import React from 'react'
import './header.css'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header({ onChange, title }) {
    return (
        <div>
            <div className="header mt-5">
                <h1 className='text-center mb-5 text-primary'>{title} Shadow Generator</h1>
                <Card>
                    <Card.Header className='bg-dark'>
                        <Nav variant="tabs" defaultActiveKey="#">
                            <Nav.Item>
                                <Nav.Link as={Link} to={'/'} href="#" onClick={() => onChange('box')}>Box Shadow</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to={'/text-shadow'} href="#text" onClick={() => onChange('text')}>Text Shadow</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card>
            </div>
        </div>
    )
}

export default Header