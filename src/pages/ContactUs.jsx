import React, { Component } from "react";
import axios from "axios";
import Subscribe from "../components/common/Subscribe";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "../components/common/NavBar";
import GoogleMap from "../components/common/GoogleMap";
import Footer from "../components/common/Footer";
//import { withGoogleMap} from 'react-google-maps';

class ContactUS extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: "",
            subject: "",
            message: ""
        };
    }

    handleForm = e => {
        let that = this;
        axios
            .post("/api/contact", this.state, {
                headers: { Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Headers": "Origin" }
            })
            .then(function(response) {
                document.getElementById("contactForm").reset();
                that.setState({
                    successMsg: "We received your submission"
                });
                document.getElementById("contactForm").reset();
                console.log(response);
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="contact" />
                <div>
                    {/* Start Page Title Area */}
                    <div className="page-title">
                        <div className="pattern-2" />
                        <div className="bg-top" />
                        <div className="bg-bottom" />
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="page-title-content">
                                        <h3>{this.props.sectionName}</h3>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <i className="icofont-thin-right" />
                                            </li>
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Title Area */}
                    {/* Start Contact Area */}
                    <section className="contact-area bg-gray ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="icofont-phone" />
                                        </div>
                                        <div className="content">
                                            <h4>{this.props.phoneTitle}</h4>
                                            <p>
                                                <a href="callto:+021245522455">
                                                    {this.props.phoneNoOne}
                                                </a>
                                            </p>
                                            <p>
                                                <a href="callto:+000245522455">
                                                    {this.props.phoneNoTwo}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="icofont-envelope" />
                                        </div>
                                        <div className="content">
                                            <h4>{this.props.emailTitle}</h4>
                                            <p>
                                                <a
                                                    href={
                                                        "mailto:" +
                                                        this.props
                                                            .emailAddressOne +
                                                        ""
                                                    }
                                                >
                                                    {this.props.emailAddressOne}
                                                </a>
                                            </p>
                                            <p>
                                                <a
                                                    href={
                                                        "mailto:" +
                                                        this.props
                                                            .emailAddressTwo +
                                                        ""
                                                    }
                                                >
                                                    {this.props.emailAddressTwo}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="icofont-google-map" />
                                        </div>
                                        <div className="content">
                                            <h4>{this.props.locationTitle}</h4>
                                            <p>
                                                {
                                                    this.props
                                                        .locationAddressLineOne
                                                }
                                                <span>
                                                    {
                                                        this.props
                                                            .locationAddressLineTwo
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div id="map">
                                        {/* GoogleMap: src/components/common/GoogleMap */}
                                 
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact-text">
                                        <h3>{this.props.contactTitle}</h3>
                                        <p>
                                            {this.props.contactDescriptionsOne}
                                        </p>
                                        <p>
                                            {this.props.contactDescriptionsTwo}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <ValidationForm
                                        id="contactForm"
                                        onSubmit={(e, formData, inputs) => {
                                            e.preventDefault();
                                            this.handleForm(formData);
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="name"
                                                        id="name"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your name"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your email address"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            {/** Number */}
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="number"
                                                        id="number"
                                                        type="text"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your number"
                                                        className="form-control"
                                                        placeholder="Number"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        //required
                                                        successMessage=""
                                                        errorMessage="Please enter your email subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="message"
                                                        id="description"
                                                        multiline
                                                        placeholder="Your message"
                                                        className="form-control"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please write your message"
                                                        rows="5"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                        <div className="clearfix" />
                                    </ValidationForm>
                                    {this.state.successMsg !== "" ? (
                                        <h3 className="contactMsg">
                                            {this.state.successMsg}
                                        </h3>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Start Contact Area */}
                </div>
                {/* Subscribe: src/components/common/Subscribe */}
                <Subscribe />
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="contact" />
            </React.Fragment>
        );
    }
}

//Props Types
ContactUS.propTypes = {
    sectionName: PropTypes.string,

    phoneTitle: PropTypes.string,
    phoneNoOne: PropTypes.string,
    phoneNoTwo: PropTypes.string,
    emailTitle: PropTypes.string,
    emailAddressOne: PropTypes.string,
    emailAddressTwo: PropTypes.string,
    locationTitle: PropTypes.string,
    locationAddressLineOne: PropTypes.string,
    locationAddressLineTwo: PropTypes.string,

    contactTitle: PropTypes.string,
    contactDescriptionsOne: PropTypes.string,
    contactDescriptionsTwo: PropTypes.string
};
//Default Props
ContactUS.defaultProps = {
    sectionName: "CONTACT HAMM SOLUTIONS",

    phoneTitle: "Phone",
    phoneNoOne: "020 3372 5064",
    // phoneNoTwo: "(+021) 245522456",
    emailTitle: "E-mail",
    emailAddressOne: "info@Axolot.com",
    emailAddressTwo: "support@Axolot.com",
    locationTitle: "Location",
    locationAddressLineOne: "11 The Thrums, Watford",
    locationAddressLineTwo: "Herfordshire, WD24 6DJ",

    contactTitle: "Get in Touch..",
    contactDescriptionsOne:
        "Contact us using the details below or fill in this form and a member of our team will be in touch soon. We also would welcome to discuss new opportunities with you.",
    contactDescriptionsTwo:
        "***************"
};

export default ContactUS;
