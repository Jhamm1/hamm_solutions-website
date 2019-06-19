import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";

class Team extends Component {
    render() {
        //Team loop start
        const teamData = this.props.teamsData.map((team, index) => (
            <div className="col-lg-12 col-md-12" key={index}>
                <div className="our-team">
                    <div className="pic">
                        <img src={team.image} alt="team" />
                        <ul className="social">
                            {team.fbLink && (
                                <li>
                                    <a href={team.fbLink}>
                                        <i className="icofont-facebook" />
                                    </a>
                                </li>
                            )}

                            {team.twitterLink && (
                                <li>
                                    <a href={team.twitterLink}>
                                        <i className="icofont-twitter" />
                                    </a>
                                </li>
                            )}

                            {team.behanceLink && (
                                <li>
                                    <a href={team.behanceLink}>
                                        <i className="icofont-behance" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{team.name}</h3>
                        <span className="post">{team.designation}</span>
                    </div>
                </div>
            </div>
        ));
        //Team loop END
        return (
            <React.Fragment>
                <section id="team" className="team-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel
                                className="owl-theme team-slides"
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
                                        items: 4
                                    }
                                }}
                            >
                                {teamData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Team.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    sectionName: "Team",
    sectionTitle: "Our Team Members",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    teamsData: [
        {
            fbLink: "",
            twitterLink: "#",
            behanceLink: "#",
            name: "John Doe",
            designation: "Web Developer",
            image: require("../../assets/img/team-1.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "",
            name: "John Smith",
            designation: "Web Developer",
            image: require("../../assets/img/team-2.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "",
            behanceLink: "#",
            name: "David Warner",
            designation: "Web Developer",
            image: require("../../assets/img/team-3.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "#",
            name: "Steven Smith",
            designation: "Web Developer",
            image: require("../../assets/img/team-4.jpg")
        },
        {
            fbLink: "#",
            twitterLink: "#",
            behanceLink: "#",
            name: "David Walker",
            designation: "Web Developer",
            image: require("../../assets/img/team-5.jpg")
        }
    ]
};

export default Team;
