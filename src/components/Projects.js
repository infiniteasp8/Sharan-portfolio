import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-weatherapp.png";
import projImg4 from "../assets/img/project-loginpage.png";
import projImg5 from "../assets/img/project-dicegame.png";
import projImg6 from "../assets/img/project-emojipedia.png";
import projImg7 from "../assets/img/project-port1.png";
import projImg8 from "../assets/img/project-port-con.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      title: "InfoShop-ShoppigCart",
      description: "Based on Angular and .NET-API ",
      imgUrl: projImg1,
    },
     {
      title: "Weather-App",
      description: "Uses weather API ",
      imgUrl: projImg3,
    },
    {
      title: "Quote-Generator",
      description: "Uses external JS to produce random quotes",
      imgUrl: projImg2,
    },
   
  ];
  
  const project2 = [
    
    {
      title: "Login-Page",
      description: "React.js and reply if credentials are correct or not",
      imgUrl: projImg4,
    },
    {
      title: "Dicer",
      description: "A fun game which produces random numbers for 2 players",
      imgUrl: projImg5,
    },
    {
      title: "Emojipedia",
      description: "A book of emojis: based on Reactjs and tells dynamically mapped",
      imgUrl: projImg6,
    },

  ]
  const project3 = [
    {
      title: "Self-website",
      description: "Used React, animation, leaflet, bootstrap and emailjs ",
      imgUrl: projImg7,
    },
    {
      title: "Connect",
      description: "Uses Emailjs library and leaflet for map.",
      imgUrl: projImg8,
    },
  ]



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>There is a collection of different tasks I have worked on. These tasks show my skills and what I have achieved. I have done various things, such as creating websites, designing, analyzing data, and solving problems. Each project reflects my abilities and passion for delivering good results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project, index) => {
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
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project3.map((project, index) => {
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
