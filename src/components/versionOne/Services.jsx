import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import i from "react-icofont";
import PropTypes from "prop-types";

class Services extends Component {
    render() {
        //Service loop start
        const servicedata = this.props.servicesData.map((service, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <div className="single-services">
                    <i className={service.icon} />
                    <h3>{service.heading}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        ));
        //Service loop END
        return (
            <React.Fragment>
                <section
                    id="services"
                    className="services-area bg-gray ptb-100"
                >
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme services-slides"
                                loop={true}
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
                                    0: { items: 1 },
                                    768: {
                                        items: 2
                                    },
                                    1024: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 3
                                    }
                                }}
                            >
                                {servicedata}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Services.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    sectionName: "Services",
    sectionTitle: "We provide best service for you customers",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    servicesData: [
        {
            icon: "icofont-ruler-pencil",
            heading: "Software Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-laptop-alt",
            heading: "Web Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-brand-designfloat",
            heading: "Graphic Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-ssl-security",
            heading: "Web Secuirity",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-globe-alt",
            heading: "Online Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-letterbox",
            heading: "Branding Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            icon: "icofont-support",
            heading: "Helping Support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};
export default Services;
