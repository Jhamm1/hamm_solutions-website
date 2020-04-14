import React, { Component } from "react";
import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    // const submit = () =>
    //     email &&
    //     email.value.indexOf("@") > -1 &&
    //     onValidated({
    //         EMAIL: email.value
    //     });
    
    
    function reqpayload (email){

        const payload = {email: email};

        return payload;
    }
       const submitEmail = e => {
            // axios
            //     .post("/api/subscription-updates", this.state, {
            //         headers: { Accept: "application/json",
            //         "Access-Control-Allow-Origin": "*",
            //         "Access-Control-Allow-Headers": "Content-Type",
            //         "Access-Control-Allow-Headers": "Origin" }
            //     })
            //     .then(function(response) {
            //         document.getElementById("contactForm").reset();
            //         that.setState({
            //             successMsg: "We received your submission"
            //         });
            //         document.getElementById("contactForm").reset();
            //         console.log(response);
            //     })
            //     .catch(function(error) {});
            email &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value
            });
            
            // console.log(email.value);
            console.log(reqpayload(email.value));

            document.getElementById("myForm").reset(); 
        };

    return (
        <div className="subscribe-form">
            <form id="myForm">
            <input
                ref={node => (email = node)}
                type="email"
                id="controlF"
                placeholder="Your Email Address"
                className="form-control"
                required
            />
            </form>
            <button className="btn btn-primary" onClick={submitEmail}>
                Submit
            </button>
            {status === "sending" && (
                <div className="subs-sending-msg">sending...</div>
            )}
            {status === "error" && (
                <div
                    className="subs-error-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="subs-success-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </div>
    );
};

class Subscribe extends Component {
    state = {};
    render() {
        const url =
            "https://salahsoftwaresolution.us20.list-manage.com/subscribe/post?u=12beaf82e73f59e8b7d199a95&id=a7729f146f";
        return (
            <React.Fragment>
                <section className="subscribe-area ptb-100">
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="newsletter">
                                    <h4>
                                        Subscribe for the latest
                                        <span> Hamm solution</span> Updates
                                    </h4>
                                    <MailchimpSubscribe
                                        url={url}
                                        render={({
                                            subscribe,
                                            status,
                                            message
                                        }) => (
                                            <CustomForm
                                                status={status}
                                                message={message}
                                                onValidated={formData =>
                                                    subscribe(formData)
                                                }
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern" />
                    <div className="pattern-2" />
                </section>
            </React.Fragment>
        );
    }
}

export default Subscribe;
