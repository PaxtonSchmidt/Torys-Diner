import React from 'react';
import emailjs from 'emailjs-com'
import { Col, Row } from 'react-bootstrap';
import { ContactFormProps } from '../../Script/Interfaces/ContactFormProps';

export default function ContactForm(props: ContactFormProps) {
    const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const sendEmail = (e: any) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tdwpznq', 'template_70033wa', form.current, 'UZi4GOQdspcV1Ys3-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    function handleSubmitClick(e: any){
        sendEmail(e);
        props.onSubmitCloseModalFunction(e);
    }

    return(
        <form ref={form} className='form'>
            <Row style={{marginBottom: '10px'}}>
                <Col>
                    <h1 className='header' style={{fontFamily: 'Fredoka, Geneva, Tahoma, sans-serif', textAlign: 'center'}}>Contact Us</h1>
                </Col>
            </Row>

            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <label className='inputRow'>
                        <input className='inputField' type='text' placeholder='Name' maxLength={30} name='name' />
                    </label>
                </Col>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <label className='inputRow'>
                        <input className='inputField'  type='text' placeholder='Email' maxLength={64} name='email'/>
                    </label>
                </Col>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <label className='inputRow'>
                        <input className='inputField'  type='text' placeholder='Phone Number' maxLength={40} name='phoneNumber'/>
                    </label>
                </Col>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Col>
                    <label className='inputRow'>
                        <textarea className='inputField textArea'  placeholder='Message' maxLength={800} name='message'></textarea>
                    </label>
                </Col>
            </Row>
            <input className='inputRow submit' type='submit' onClick={handleSubmitClick} />
        </form>
    )
}