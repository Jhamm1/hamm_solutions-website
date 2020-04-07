import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class About extends Component {
    render() {
        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
                {index % 2 === 0 ? (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mb-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mt-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                {/* Start About Area */}
                <section id="about" className="about-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>About Us</span>
                            <h3>We provide best service to our clients</h3>
                            <p>
                            Hamm Solutions Consulting was formed in 2018 and 
                            has worked with public and private sector organisations 
                            in delivering large scale, complex software solutions and 
                            the associated business strategies for successful delivery.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h3>{this.props.aboutTitle}</h3>
                                    <p>{this.props.aboutDescription}</p>
                                    <ul className="pull-left">
                                        {this.props.aboutListItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemOne}
                                            </li>
                                        )}

                                        {this.props.aboutListItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemTwo}
                                            </li>
                                        )}
                                        {this.props.aboutListItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemThree}
                                            </li>
                                        )}
                                        {this.props.aboutListItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFour}
                                            </li>
                                        )}
                                    </ul>
                                    <ul>
                                        {this.props.aboutListItemFive && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFive}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSix && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSix}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSeven && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSeven}
                                            </li>
                                        )}
                                        {this.props.aboutListItemEight && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemEight}
                                            </li>
                                        )}
                                    </ul>
                                    <a
                                        href={this.props.aboutBtnLink}
                                        className="btn btn-primary"
                                    >
                                        {this.props.aboutBtnText}
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img
                                        src={this.props.aboutImage}
                                        alt="about"
                                    />
                                </div>
                            </div>
                        </div>
                        {aboutData}
                    </div>
                </section>
                {/* End About Area */}
            </React.Fragment>
        );
    }
}

//Props Types
About.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutBtnText: PropTypes.string,
    aboutBtnLink: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    sectionName: "About Us",
    sectionTitle: "Success, in our eyes, is based on value delivered by the software.",
    sectionDescription:
        "We’re a pragmatic, practical, decent, down-to-earth bunch, who have been around the block a few times (in the nicest possible way)."+ 
        "A cast of characters, who, because of our individual and collective experience are able to get under the skin of a project and move quickly to establish an effective game plan.",

    aboutImage: require("../../assets/img/about.png"),
    aboutTitle: "We offer onsite consultations to our customers.",
    aboutDescription:
        "Hamm solutions is an IT consultancy company which provide other companies, of all sizes, with technical solutions to address business problems and optimise existing business processes by leveraging cutting-edge technology. We work with companies, in-house, on agile practices (i.e. following agile ceremonies), micro-service architecture, improving the user experience and setting up automation test frameworks. Hamm solutions is part of the umbrella company, Micronox, which has many divisions including software products that will be brought to market and consultancy. Our goal at Hamm solutions is to become a national ’go to place’ for other companies in order to deliver bespoke solutions for business processes, whether it’s to help with transformation projects or improving the user experience. Hamm solutions is currently working with AIG Life in developing a robust and efficient automation test architecture (which include a series of test oriented microservices written in C#) to perform fullstack testing to obtain sufficient test coverage for an IT transformation project. This also involves implementing best practices for CI/CD pipelines (using TeamCity), containerising all services using Docker (both Windows and Linux containers) and troubleshooting infrastructure related issues to ensure that the mission critical business systems are deployed on sound and efficient infrastructure. The aim of the project to which I have been assigned is to deliver a sophisticated engine responsible for processing life insurance applications.",
    aboutListItemOne: "Creative Design",
    aboutListItemTwo: "Retina Ready",
    aboutListItemThree: "Responsive Design",
    aboutListItemFour: "Creative Design",
    aboutListItemFive: "Modern Design",
    aboutListItemSix: "Awesome Design",
    aboutListItemSeven: "Digital Marketing & Branding",
    aboutListItemEight: "Creative Design",
    aboutBtnText: "Read More",
    aboutBtnLink: "#0",
    aboutsData: [
        {
            image: require("../../assets/img/1.png"),
            position: ".01",
            title: "Get Started with our software",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/2.png"),
            position: ".02",
            title: "Solve your problem faster",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            listItemOne: "Creative Design",
            listItemTwo: "Retina Ready",
            listItemThree: "Modern Design",
            listItemFour: "Digital Marketing & Branding"
        },
        {
            image: require("../../assets/img/3.png"),
            position: ".03",
            title: "All In one for all products",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            image: require("../../assets/img/4.png"),
            position: ".04",
            title: "We provide proffesional staff",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            blockQuote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
    ]
};

export default About;
