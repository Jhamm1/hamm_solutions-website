import React, { Component } from "react";
import PropTypes from "prop-types";
// import OwlCarousel from "react-owl-carousel3";

import profilepic from '../../assets/img/jhamm.png';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="team" className="team-area ptb-100">
                    <div className="container">

                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                        </div>
                        

                        <div className="row mt-100">
                            <div className="col-lg-6 col-md-6">
                                <div className="profilepic">
                                    <img src={profilepic} width="500" height="500" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about-text mb-0">
                                {/* <h3 align="center">Dr Julian Hamm</h3> */}
                                <p align="justify">{this.props.sectionDescription}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Team.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    sectionName: "Company Director",
    sectionTitle: "Dr Julian Hamm",
    sectionDescription:  "Dr Julian Hamm is Director at Hamm solutions in charge of leading the overall strategic direction of the company. He is also an IT consultant contracted at various companies as a software engineer, advising companies on user experience, software architecture and automation solutions in order to deliver quality software products. He has been involved in a number of commercial IT transformation and migration projects to R&D projects that address that have both commercial and societal impact. Prior to starting Hamm solutions, Julian completed a PhD in computer science at Brunel University, where he investigated the use of mobile 3D visualisation technology to address the limitations of the existing clinical guidance tools used by older patients to perform home-based assessments. This research project was a PhD scholarship fully funded by EPSRC. During his time as a doctoral student, Julian published a number of research papers in peer-reviewed computer science and health informatic journals. He was also booked for many speaking engagements on his research topic to speak on the societal benefits and the impact emerging technologies have on the healthcare provision. Dr Hamm has deputised for Directors of QA and Engineering during internal auditing and software releases, and have no issues with supporting in such capacity, where appropriate. He is a member of the British Computer Society, certified Project Manager and have gained many other industry recognised certifications in recent years. He is extremely passionate about technology and building elegant technical solutions for companies. I regard myself as a technology enthusiast as he keeps up to date with the latest trends in IT and often involved in R&D projects outside work."
    
};

export default Team;
