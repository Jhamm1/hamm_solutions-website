import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner bg-gray">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="main-banner-content">
                                            <h1>{this.props.showcasenName}</h1>
                                            <p>
                                                {this.props.showcaseDescription}
                                            </p>
                                            <a
                                                href={
                                                    this.props
                                                        .showcaseBtnOneLink
                                                }
                                                className="btn btn-primary"
                                            >
                                                {this.props.showcaseBtnOneText}
                                            </a>

                                            <ModalVideo
                                                channel="youtube"
                                                isOpen={this.state.isOpen}
                                                videoId="vr0qNXmkUJ8"
                                                onClose={() =>
                                                    this.setState({
                                                        isOpen: false
                                                    })
                                                }
                                            />
                                            <button
                                                onClick={this.openModal}
                                                className="btn btn-secondary "
                                            >
                                                <i className="icofont-ui-play" />
                                                {this.props.showcaseBtnTwoText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="banner-img">
                                            <img
                                                src={this.props.showcaseImage}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern" />
                </div>
            </React.Fragment>
        );
    }
}

//Props Types
Showcase.propTypes = {
    showcasenName: PropTypes.string,
    showcaseDescription: PropTypes.string,
    showcaseImage: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string
};

//Default Props
Showcase.defaultProps = {
    showcasenName: "Hamm solutions is a product-focused technology consultancy",
    showcaseDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    showcaseImage: require("../../assets/img/main.jpg"),
    showcaseBtnOneLink: "#about",
    showcaseBtnOneText: "Get Started",
    showcaseBtnTwoLink: "//www.youtube.com/watch?v=vr0qNXmkUJ8",
    showcaseBtnTwoText: "Watch Our Video"
};

export default Showcase;
