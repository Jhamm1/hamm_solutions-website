import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";

class Testimonial extends Component {
    render() {
        //Testimonial Data loop Start
        const testimonialData = this.props.testimonialsData.map(
            (testimonial, index) => (
                <div className="col-lg-12 col-md-12" key={index}>
                    <div className="testimonials-item">
                        <div className="client-info">
                            <div className="img">
                                <img src={testimonial.image} alt="client" />
                            </div>
                            <div className="client-title">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.designation}</span>
                            </div>
                        </div>
                        <p>{testimonial.description}</p>
                        <i className="icofont-quote-left" />
                    </div>
                </div>
            )
        );
        //Testimonial Data loop END
        return (
            <React.Fragment>
                <section className="testimonials-area  ptb-100">
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme testimonials-slides"
                                loop
                                autoplay={true}
                                nav={true}
                                mouseDrag={true}
                                autoplayHoverPause={true}
                                responsiveClass={true}
                                dots={false}
                                navText={[
                                    "<i class='icofont-curved-double-left'></i>",
                                    "<i class='icofont-curved-double-right'></i>"
                                ]}
                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    768: {
                                        items: 2
                                    },
                                    1024: {
                                        items: 2
                                    },
                                    1200: {
                                        items: 3
                                    }
                                }}
                            >
                                {testimonialData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Testimonial.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Testimonial.defaultProps = {
    sectionName: "Testimonials",
    sectionTitle: "What Our Users Say",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    testimonialsData: [
        {
            image: require("../../assets/img/client-avatar1.jpg"),
            name: "Jhon Smith",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
            image: require("../../assets/img/client-avatar2.jpg"),
            name: "David Warner",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
            image: require("../../assets/img/client-avatar3.jpg"),
            name: "Glenn Maxwell",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
            image: require("../../assets/img/client-avatar3.jpg"),
            name: "Aaron Finch",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
            image: require("../../assets/img/client-avatar1.jpg"),
            name: "Shaun Marsh",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
            image: require("../../assets/img/client-avatar2.jpg"),
            name: "Mitchell Starc",
            designation: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
    ]
};

export default Testimonial;
