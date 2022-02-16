import { Col, Container, Row } from 'react-bootstrap'
import lobby from '../Img/About/lobby.png'


const imgStyle = {
    maxHeight: '300px',
    marginTop: '30px',
    verticalAlign: 'top'
}


export default function About() {
    return (
        <div className='about'>
            <Container style={{paddingTop: '0'}}>
                <Row style={{display: 'inline', justifyContent: 'center', paddingTop: '0'}}>
                    <Col >
                        <img src={lobby} alt='Lobby picture' style={imgStyle} className='rounded' />
                    </Col>
                    <Col style={{color: 'white'}}>
                        <a style={{display: 'inline', marginTop: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
                    </Col>
                </Row>  
            </Container>
        </div>
    )
}