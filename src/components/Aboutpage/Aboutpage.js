import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I am a software engineer from Pakistan with 5 years of industry experience. My focus is on building websites that provide a seamless experience for all users, with a strong emphasis on responsiveness. I have a passion for learning more about developing scalable distribution systems, and I am dedicated to problem solving with maintainable code. I take pride in my expertise in responsive design, which ensures that your website is accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3/Bootstrap/Ant Design</li>
                                    <li>JavaScript</li>
                                    <li>React/Redux</li>
                                    <li>VueJs</li>
                                </Col>
                                <Col md={4}>
                                    <li>NodeJS</li>
                                    <li>Python Django</li>
                                    <li>PHP</li>
                                    <li>Git/Gitlab/Github</li>
                                </Col>
                                <Col md={1}>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>Firebase</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage