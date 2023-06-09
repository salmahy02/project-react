import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/jarvis.jpg";
import projImg2 from "../assets/img/Web.jpg";
import projImg3 from "../assets/img/farming.jpg";
import projImg4 from "../assets/img/sql.jpg";
import projImg5 from "../assets/img/olahraga.jpg";
import projImg6 from "../assets/img/blooood.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My Project Personal Assistant",
      description: "AI text to speech",
      imgUrl: projImg1,
    },
    {
      title: "Laundry Website Management",
      description: "Laravel-based website",
      imgUrl: projImg2,
    },
    {
      title: "IOT Smart Farming",
      description: "Watering Control and Monitoring Systemt",
      imgUrl: projImg3,
    },
    {
      title: "Employee Payroll System",
      description: "Mysql Database",
      imgUrl: projImg4,
    },
    {
      title: "Workout Website",
      description: "Home Workout Web",
      imgUrl: projImg5,
    },
    {
      title: "RedHelp!",
      description: "Blood Donation Website",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Portofolio</h2>
                <p>All Project and My Skills</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Recommendation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><h2>Email</h2>
                        <h4>20102163@ittelkom-pwt.ac.id</h4>
                        <h4>suciatipkl001@gmail.com</h4></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have soft skills and hard skills. The soft skills I have include I can communicate well in various situations, I can solve problems calmly and quickly, I can manage time well, I can lead a team, and I am always responsible for my duties. As for hard skills, I can become a UI/UX Designer, Web Development, and IoT Engineering</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
