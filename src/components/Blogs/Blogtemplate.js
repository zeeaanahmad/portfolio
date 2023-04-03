import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import { JsPDFBlog } from './JsPDFBlog';


function BlogTemplate() {
    return (
        <div className='bloglistpagebackground'>
            <Container>
                <Row className='blogbackground'>
                    <Col md={12} >
                        <p className='aboutdetails'>
                            <JsPDFBlog/>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogTemplate