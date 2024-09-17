"use client"

import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';

export default function Navbar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='allNav'>
            <div className='hamNav'>
                <Button variant="primary" onClick={handleShow} className="hamButton">
                    {/* <img className="hamIcon" src='/hamMenu.svg' alt="Menu" /> */}
                    <Image className="hamIcon" src='/hamMenu.svg' alt="Menu"></Image>
                </Button>
                <Offcanvas show={show} onHide={handleClose} className="customOffcanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Alya ❤ Demir</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="offcanvasNav" variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/anilarimiz' eventKey="link-1">Anılarımız</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/hikayeBaslangici' eventKey="link-1">Hikaye Başlangıcı</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Nav variant="underline" defaultActiveKey="/home" className="desktopNav">
                <Nav.Item>
                    <Nav.Link href="/">Ana Sayfa</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/anilarimiz' eventKey="link-1">Anılarımız</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='hikayeBaslangici' eventKey="link-1">Hikaye Başlangıcı</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}