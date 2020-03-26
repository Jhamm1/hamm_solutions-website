import React, { Component } from "react";
import PropTypes from "prop-types";

class Pricing extends Component {
    render() {
        //Price loop start
        const priceData = this.props.pricesData.map((pricedata, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="pricing-table">
                    <span className="icon">
                        <i className="icofont-globe" />
                    </span>
                    <div className="pricing-table-header">
                        <h3 className="title">{pricedata.planName}</h3>
                        <span className="price-value">
                            {pricedata.price}
                            <b>{pricedata.duration}</b>
                        </span>
                    </div>

                    <ul className="pricing-content">
                        {pricedata.contentOne && (
                            <li>{pricedata.contentOne}</li>
                        )}
                        {pricedata.contentTwo && (
                            <li>{pricedata.contentTwo}</li>
                        )}
                        {pricedata.contentThree && (
                            <li>{pricedata.contentThree}</li>
                        )}
                        {pricedata.contentFour && (
                            <li>{pricedata.contentFour}</li>
                        )}
                        {pricedata.contentFive && (
                            <li>{pricedata.contentFive}</li>
                        )}
                    </ul>
                    <a href={pricedata.link} className="btn btn-primary">
                        Select Plan
                    </a>
                </div>
            </div>
        ));
        //Price loop END

        return (
            <React.Fragment>
                <section id="pricing" className="pricing-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{priceData}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Pricing.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    pricesData: PropTypes.array
};

//Default Props
Pricing.defaultProps = {
    sectionName: "Pricing",
    sectionTitle: "Our Packages",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pricesData: [
        {
            planName: "Basic Plan",
            price: "$29.00",
            duration: "/mon",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        },
        {
            planName: "Advanced Plan",
            price: "$49.00",
            duration: "/mon",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        },
        {
            planName: "Expert Plan",
            price: "$69.00",
            duration: "/mon",
            contentOne: "Unlimited Reservations",
            contentTwo: "6 Clients and Products",
            contentThree: "Housekeeping Status",
            contentFour: "Invoicing and Payments",
            contentFive: "Data Security and Backups",
            link: "#0"
        }
    ]
};

export default Pricing;
