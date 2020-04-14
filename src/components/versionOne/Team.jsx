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
    sectionDescription:  "Dr Julian Hamm is Director at Hamm solutions in charge of leading the overall strategic direction of the company. He is also an IT consultant contracted at various companies as a software engineer/ chief test architect, advising companies on user experience, software architecture and automation solutions in order to deliver quality software products. He is also involved in a number of multimillion-pound research and commercial projects from transformation/migration projects to scientific research projects that address economic and societal challenges. In particular, he worked on a cyberstalking project in 2011 that was reported through the media and resulted in some" +
    "interesting insights to such an extent that the findings were presented at the house of lord, ultimately led to changes made to the stalking and harassment laws in the UK and recommendations made to the laws in the EU. Prior to starting Hamm solutions, Julian completed a PhD in computer science at Brunel University, where he investigated the use of mobile 3D visualisation technology to address the limitations of the existing clinical guidance tools used by older patients to perform home-based assessments. This research project was a fully-funded PhD scholarship funded by EPSRC. During his time as a doctoral student, Julian published a number of research papers in peer-reviewed computer science and health informatic journals. He was also booked for many speaking engagements on his research topic to speak on the potential societal and healthcare provision impact. Dr Hamm is a member of the British Computer Society, certified Project Manager and Scrum Master and have gained many other Industry recognised certification over the years."
    
};

export default Team;
