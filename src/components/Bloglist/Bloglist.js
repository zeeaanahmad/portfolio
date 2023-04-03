import React from 'react'
import '../../pages/style.css';
import BlogCard from "./BlogCard";
import { Container, Row, Col } from 'react-bootstrap'
function Bloglist() {
  return (
    <div className="blogbackgroundpage">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
              <BlogCard
                // imgPath={rahimstore}
                isBlog={true}
                title="JSPDF"
                description="How to use jsPDF"
                path="/blog/how-to-use-jspdf"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Bloglist