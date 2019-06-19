import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class Services extends Component {
    render() {
        //Service loop start
        const servicedata = this.props.servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-services text-center">
                    <i className={service.icon} />
                    <h3>{service.heading}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
        ));
        //Service loop END
        return (
            <React.Fragment>
                <section id="services" className="services-area  ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{servicedata}</div>
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
        }
    ]
};
export default Services;
