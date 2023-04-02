import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import jobster from '../../Assets/jobster.png'
import primeflix from '../../Assets/primeflix.png'
import rahimstore from '../../Assets/rahimstore.png'
function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={rahimstore}
                isBlog={false}
                title="Rahim Store"
                description="Rahim Store is an online retail platform for purchasing goods. As a developer, I worked on the Flyer and custom items purchase order features, showcasing my skills in web development using modern technologies such as HTML5, CSS3, JavaScript, PHP, and MSSQL. The user-friendly interface allows customers to easily design and purchase custom products."
                ghLink="https://www.rahimstore.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jobster}
                isBlog={false}
                title="Jobster"
                description="Jobster is a job search and recruitment platform, demonstrating the developer's skills in web development using modern technologies such as HTML5, CSS3, JavaScript, Bootstrap, jQuery, and Laravel. The user-friendly interface allows job seekers to apply and receive job alerts, while employers can post job vacancies and manage applications."
                ghLink="https://zeeaanahmad.github.io/jobster/#/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={primeflix}
                isBlog={false}
                title="PrimeFlix"
                description="Primeflix is a streaming platform clone, replicating the features and functionalities of the popular streaming giants , Netflix and PrimeFlix. This portfolio project showcases the developer's skills in web development, utilizing modern technologies such as React,Node.js and Firebase. The user-friendly interface allows users to browse and watch a wide range of movies and TV shows, create profiles, and manage their watchlist."
                ghLink="https://primeflix-netflixclone.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist