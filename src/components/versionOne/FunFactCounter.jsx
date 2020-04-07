import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class FunFactCOunter extends Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* <section className="funfacts-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="funFact">
                                    <i className="icofont-users-alt-5" />
                                    <h3>
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 500
                                                        : 0
                                                }
                                                suffix="K"
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </h3>
                                    <p>Lovely Users</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="funFact">
                                    <i className="icofont-download" />
                                    <h3>
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 450
                                                        : 0
                                                }
                                                suffix="K"
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </h3>
                                    <p>Download</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="funFact">
                                    <i className="icofont-search-document" />
                                    <h3>
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 1000
                                                        : 0
                                                }
                                                suffix="K"
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </h3>
                                    <p>Resource</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="funFact">
                                    <i className="icofont-star-shape" />
                                    <h3>
                                        <VisibilitySensor
                                            onChange={this.onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                decimals={2}
                                                start={0}
                                                end={
                                                    this.state.didViewCountUp
                                                        ? 5
                                                        : 0
                                                }
                                                duration={3}
                                            />
                                        </VisibilitySensor>
                                    </h3>
                                    <p>Average Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </React.Fragment>
        );
    }
}

export default FunFactCOunter;
