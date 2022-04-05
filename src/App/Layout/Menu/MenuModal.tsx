import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MenuContainer from './MenuContainer';
import closeX from '../../Img/Icons/x-circle.svg';

export default function MenuModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <button onClick={handleShow} className='modalButton'>
                Check it out!
            </button>
            <Modal show={show} onHide={handleClose} size='lg' style={{width: '100%', backgroundColor: 'rgba(255, 127, 17, 0.5)'}}>
                <Modal.Body style={{border: '3px solid #429aae', borderRadius: '4px'}}>
                    <div  style={{textAlign: 'end', width: '100%'}}>
                        <button onClick={handleClose} style={{border: 'none', padding: '0px', backgroundColor: 'white'}}>
                            <img src={closeX} className='modalCloseButton' />
                        </button>
                    </div>
                    <MenuContainer />
                </Modal.Body>
            </Modal>
        </>
    )
}