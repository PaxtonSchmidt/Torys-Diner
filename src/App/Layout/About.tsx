import { Col, Container, Row } from 'react-bootstrap'
import lobby from '../Img/About/lobby.png'


const imgStyle = {
    maxHeight: '300px',
    alignContent: 'top',
    justifyContent:'center'
}

const containerStyle = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: '30px',
    fluid: 'lg'
}


export default function About() {
    return (
        <Container style={containerStyle} >
            <Row >
                <Col style={{alignContent: 'top'}}>
                    <img src={lobby} alt='Lobby picture' style={imgStyle} className='rounded' />
                </Col>
                <Col style={{alignContent: 'bottom'}} lg={6}>
                    <a style={{color: '#1a1a1a'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
                </Col>
                <Col className='d-none d-md-block' >
                </Col>
            </Row>  
        </Container> 
    )
}

     