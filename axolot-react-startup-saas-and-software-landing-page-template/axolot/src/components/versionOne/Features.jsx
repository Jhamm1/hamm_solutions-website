import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class Features extends Component {
    render() {
        //Features loop start
        const featuredata = this.props.featuresData.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-features">
                    <i className={feature.icon} />
                    <h3>{feature.featuresName}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        ));
        //Features loop END

        return (
            <React.Fragment>
                <section
                    id="features"
                    className="features-area bg-gray ptb-100"
                >
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{featuredata}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Features.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    featuresData: PropTypes.array
};

Features.defaultProps = {
    sectionName: "Features",
    sectionTitle: "Our Amazing Features",
    sectionDescription:
        "The products that we offer at Hamm solutions provide our customers with a number of features.",

    featuresData: [
        {
            icon: "icofont-code",
            featuresName: "Web/mobile app development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-users-alt-6",
            featuresName: "User research",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-code-alt",
            featuresName: "Test automation Framework",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-cloud",
            featuresName: "Cloud development & DevOps",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-rocket",
            featuresName: "App integration",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-data",
            featuresName: "Data analysis/analytics",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-support",
            featuresName: "24/7 Support on bespoke products",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            icon: "icofont-ssl-security",
            featuresName: "Cybersecurity",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        }
    ]
};
export default Features;
