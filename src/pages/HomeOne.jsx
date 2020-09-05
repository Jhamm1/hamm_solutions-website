import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import Showcase from "../components/versionOne/Showcase";
import Features from "../components/versionOne/Features";
import About from "../components/common/About";
// import Services from "../components/versionOne/Services";
import Vision from "../components/common/Vision";
import FunFactCOunter from "../components/versionOne/FunFactCounter";
import JointClient from "../components/common/JoinClient";
import Works from "../components/common/Works";
import Team from "../components/versionOne/Team";
// import Testimonial from "../components/versionOne/Testimonial";
// import Faq from "../components/common/FAQ";
//import Pricing from "../components/versionOne/Pricing";
import Partners from "../components/common/Partners";
import Subscribe from "../components/common/Subscribe";
import Footer from "../components/common/Footer";

class HomeOne extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="home" />
                {/* Showcase: src/components/versionOne/Showcase */}
                <Showcase />
                {/* Features: src/components/versionOne/Features */}
                <About />
                {/* About: src/components/common/About */}
                <Features />
                {/* Services: src/components/versionOne/Services */}
                {/* <Services /> */}
                {/* Vision: src/components/common/Vision */}
                {/* <Vision /> */}
                {/* FunFactCOunter: src/components/versionOne/FunFactCounter */}
                <FunFactCOunter />
                {/* JointClient: src/components/common/JoinClient */}
                <JointClient />
                {/* Works: src/components/common/Works */}
                <Works />
                {/* Team: src/components/versionOne/Team */}
                <Team />
                {/* Testimonial: src/components/versionOne/Testimonial
                <Testimonial /> */}
                {/* Faq: src/components/common/FAQ
                <Faq /> */}
                {/* Pricing: src/components/versionOne/Pricing */}
                {/* <Pricing /> */}
                {/* Partners: src/components/common/Partners
                <Partners /> */}
                {/* Subscribe: src/components/common/Subscribe */}
                <Subscribe />
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="home" />
            </React.Fragment>
        );
    }
}

export default HomeOne;
